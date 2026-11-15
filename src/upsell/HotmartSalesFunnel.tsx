import { useEffect, useRef, useState } from 'react';

const SCRIPT_URL = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
type CheckoutElements = { init: (type: 'salesFunnel') => { mount: (selector: string) => void } };
declare global {
  interface Window { checkoutElements?: CheckoutElements }
}

let scriptLoad: Promise<void> | undefined;

function loadOfficialScript() {
  if (scriptLoad) return scriptLoad;
  if (window.checkoutElements) return Promise.resolve();
  scriptLoad = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_URL}"]`);
    const script = existing ?? document.createElement('script');
    let timeout: ReturnType<typeof setTimeout>;
    const finish = (error?: Error) => {
      clearTimeout(timeout);
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
      if (error) reject(error);
      else resolve();
    };
    const onLoad = () => finish(window.checkoutElements ? undefined : new Error('Hotmart initialization unavailable'));
    const onError = () => finish(new Error('Hotmart script unavailable'));
    script.addEventListener('load', onLoad, { once: true });
    script.addEventListener('error', onError, { once: true });
    timeout = setTimeout(() => finish(new Error('Hotmart script timed out')), 20000);
    if (!existing) {
      script.src = SCRIPT_URL;
      script.async = true;
      document.head.appendChild(script);
    }
  });
  return scriptLoad;
}

/** The official library owns the funnel's payment actions and iframe contents. */
export function HotmartSalesFunnel({ placement = 'offer' }: { placement?: 'offer' | 'lessons' | 'hero' }) {
  const containerId = placement === 'offer' ? 'hotmart-sales-funnel' : `hotmart-sales-funnel-${placement}`;
  const wrapperId = placement === 'offer' ? 'hotmart-upsell' : `hotmart-upsell-${placement}`;
  const container = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    // The first StrictMode effect is cancelled before it can load or mount anything.
    void Promise.resolve().then(async () => {
      if (cancelled) return;
      await loadOfficialScript();
      const host = container.current;
      if (cancelled || !host?.isConnected || initialized.current) return;
      const checkoutElements = window.checkoutElements;
      if (!checkoutElements) throw new Error('Hotmart initialization unavailable');
      // The vendor also auto-detects this ID; do not mount twice if it got here first.
      if (!host.hasChildNodes()) {
        checkoutElements.init('salesFunnel').mount(`#${containerId}`);
      }
      initialized.current = true;
    }).catch(() => { if (!cancelled) setFailed(true); });
    return () => { cancelled = true; };
  }, [containerId]);

  return <div id={wrapperId} className="ia-widget ia-sales-funnel" tabIndex={-1} aria-label="Oferta complementar Hotmart">
    <div id={containerId} ref={container} />
    {failed && <p className="ia-widget-error" role="alert">Não foi possível carregar a oferta da Hotmart. Atualize a página para tentar novamente.</p>}
  </div>;
}