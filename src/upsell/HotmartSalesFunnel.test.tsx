import { StrictMode } from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const url = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
beforeEach(() => { vi.resetModules(); });
afterEach(() => {
  cleanup();
  document.querySelectorAll(`script[src="${url}"]`).forEach(script => script.remove());
  delete window.checkoutElements;
});

describe('Official Hotmart sales funnel', () => {
  it('loads one official script and mounts once after load under StrictMode and rerenders', async () => {
    const { HotmartSalesFunnel } = await import('./HotmartSalesFunnel');
    const mount = vi.fn();
    const init = vi.fn(() => ({ mount }));
    const view = render(<StrictMode><HotmartSalesFunnel /></StrictMode>);
    await waitFor(() => expect(document.querySelectorAll(`script[src="${url}"]`)).toHaveLength(1));
    expect(init).not.toHaveBeenCalled();
    expect(view.container.querySelectorAll('#hotmart-sales-funnel')).toHaveLength(1);
    window.checkoutElements = { init };
    document.querySelector(`script[src="${url}"]`)?.dispatchEvent(new Event('load'));
    await waitFor(() => expect(init).toHaveBeenCalledExactlyOnceWith('salesFunnel'));
    expect(mount).toHaveBeenCalledExactlyOnceWith('#hotmart-sales-funnel');
    view.rerender(<StrictMode><HotmartSalesFunnel /></StrictMode>);
    expect(init).toHaveBeenCalledTimes(1);
    view.unmount();
    render(<HotmartSalesFunnel />);
    await waitFor(() => expect(init).toHaveBeenCalledTimes(2));
    expect(document.querySelectorAll(`script[src="${url}"]`)).toHaveLength(1);
  });

  it('cancels a pending initialization after unmount', async () => {
    const { HotmartSalesFunnel } = await import('./HotmartSalesFunnel');
    const init = vi.fn(() => ({ mount: vi.fn() }));
    const view = render(<HotmartSalesFunnel />);
    await waitFor(() => expect(document.querySelector(`script[src="${url}"]`)).not.toBeNull());
    view.unmount();
    window.checkoutElements = { init };
    document.querySelector(`script[src="${url}"]`)?.dispatchEvent(new Event('load'));
    await Promise.resolve();
    expect(init).not.toHaveBeenCalled();
  });

  it('does not duplicate a funnel already mounted by the official script', async () => {
    const { HotmartSalesFunnel } = await import('./HotmartSalesFunnel');
    const init = vi.fn(() => ({ mount: vi.fn() }));
    const view = render(<HotmartSalesFunnel />);
    await waitFor(() => expect(document.querySelector(`script[src="${url}"]`)).not.toBeNull());
    view.container.querySelector('#hotmart-sales-funnel')?.appendChild(document.createElement('iframe'));
    window.checkoutElements = { init };
    document.querySelector(`script[src="${url}"]`)?.dispatchEvent(new Event('load'));
    await Promise.resolve();
    await Promise.resolve();
    expect(init).not.toHaveBeenCalled();
    expect(view.container.querySelectorAll('iframe')).toHaveLength(1);
  });

  it('shows a discreet error without creating payment controls if the script fails', async () => {
    const { HotmartSalesFunnel } = await import('./HotmartSalesFunnel');
    const view = render(<HotmartSalesFunnel />);
    await waitFor(() => expect(document.querySelector(`script[src="${url}"]`)).not.toBeNull());
    document.querySelector(`script[src="${url}"]`)?.dispatchEvent(new Event('error'));
    await waitFor(() => expect(view.getByRole('alert')).toBeTruthy());
    expect(view.container.querySelectorAll('button, a, input')).toHaveLength(0);
  });
});