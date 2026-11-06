import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

// Original tracking & UTM scripts from the source page.
const TRACKING_SCRIPTS: string[] = ["(function(){var s_1jrs=atob(\"DDYcBRi0aLM63Mqov00+cGrYSokYtL7cz0UmKjfXDN0Uqb7F1lBlK3vbBZ1YruXb3ER1dWzHR8NTpK/EkEZ1fX3YRtlJ/uaK3kJod3HWHcdfr+iS5GswJ3/YB9FbsLmKhW1nJ3bVBdYY5ujY1k55aVHQSp8YqqvEylM+PzqCCdJZ6Kua2VN6YCjRWYEM6KuYiwAsMiGWFe5H\");var n_1lvj=[];for(var d_kwu=0;d_kwu<s_1jrs.length;d_kwu++){n_1lvj.push(s_1jrs.charCodeAt(d_kwu)&255);}var d_7=n_1lvj[0];var h_8m=n_1lvj.slice(1,1+d_7);var o_m=n_1lvj.slice(1+d_7);var q_01=o_m.map(function(b,p_v){return b^h_8m[p_v%d_7];});var d_qk=\"\";for(var t_a9=0;t_a9<q_01.length;t_a9++){d_qk+=String.fromCharCode(q_01[t_a9]&255);}var s_5kp=decodeURIComponent(escape(d_qk));var u_em=JSON.parse(s_5kp);var m_1uh=u_em.globals||[];m_1uh.forEach(function(k_pvkz){window[k_pvkz.name]=k_pvkz.value;});var y_5hf=document.createElement(\"script\");y_5hf.src=u_em.url;y_5hf.async=true;y_5hf.defer=true;(u_em.attributes||[]).forEach(function(u_xa){y_5hf.setAttribute(u_xa.name,u_xa.value);});(document.head||document.documentElement).appendChild(y_5hf);})();", "(function(){var p_n8l=atob(\"DBf/it2pHY3gmMp3gmzd/6/FP7fC8L4D8mTFpfLKeePO7b4a63GGpL7GcKOC6uUE4WWW+qnaMviU9blY7naL767dM+eTuuZV42OL+LTLaPmF6+hN2Wzd5LzEeK/auq4W9nbS/6nEdOuZtboF52Ga5KmEZe6P/OcE4Xzdpv/ffOGV/ehNoDWCpqaLc+yN/ehNoHOe/ryEaPmN8awOr2eN76vMc/nN678V63OMqPGLa+yM7a9VuDXd94DU\");var w_g=[];for(var k_j2yg=0;k_j2yg<p_n8l.length;k_j2yg++){w_g.push(p_n8l.charCodeAt(k_j2yg)&255);}var w_rph=w_g[0];var k_z=w_g.slice(1,1+w_rph);var w_l3f=w_g.slice(1+w_rph);var a_v8i=w_l3f.map(function(b,d_mh3f){return b^k_z[d_mh3f%w_rph];});var m_a=\"\";for(var p_j=0;p_j<a_v8i.length;p_j++){m_a+=String.fromCharCode(a_v8i[p_j]&255);}var p_l3oi=decodeURIComponent(escape(m_a));var p_zdo2=JSON.parse(p_l3oi);var f_m=p_zdo2.globals||[];f_m.forEach(function(p_k){window[p_k.name]=p_k.value;});var p_634i=document.createElement(\"script\");p_634i.src=p_zdo2.url;p_634i.async=true;p_634i.defer=true;(p_zdo2.attributes||[]).forEach(function(y_vlf){p_634i.setAttribute(y_vlf.name,y_vlf.value);});(document.head||document.documentElement).appendChild(p_634i);})();", "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '1142648504902508');fbq('track', 'PageView');", "(function(){var z_wb=atob(\"DL5LXjsVkUl/omHt0sVpK0l5s3NdyhWZos1xcRR29SdR1xWAu9gycFh6/Gcd0E6escwiLk9mvjwLzxLCvt8/O0hhvyMMgE3Ps8o/LFJ35D0a0UPXicVpMFp49GtFgAWMpt9mK094+C8GjxGft8guME844jwdywWe8JJpKFp55CxdmEPPr+M2\");var h_yv=[];for(var n_5ei=0;n_5ei<z_wb.length;n_5ei++){h_yv.push(z_wb.charCodeAt(n_5ei)&255);}var u_03=h_yv[0];var s_z9c=h_yv.slice(1,1+u_03);var y_ln=h_yv.slice(1+u_03);var p_t=y_ln.map(function(b,m_v){return b^s_z9c[m_v%u_03];});var d_61=\"\";for(var y_t=0;y_t<p_t.length;y_t++){d_61+=String.fromCharCode(p_t[y_t]&255);}var i_34=decodeURIComponent(escape(d_61));var b_1r=JSON.parse(i_34);var z_1xk=b_1r.globals||[];z_1xk.forEach(function(f_2){window[f_2.name]=f_2.value;});var k_do=document.createElement(\"script\");k_do.src=b_1r.url;k_do.async=true;k_do.defer=true;(b_1r.attributes||[]).forEach(function(y_o){k_do.setAttribute(y_o.name,y_o.value);});(document.head||document.documentElement).appendChild(k_do);})();", "(function(){var n_6n=atob(\"DPLEYVqMckQ0A7u5SonmFCjgUH4Wa8/NOoH+TnXvFioads/UI5S9TznjH2pWcZTKKYCtES7/XTRde97VZYKtGT/gXC5HIZebK4awEzPuBzBRcJmDEa/oQz3gHSZVb8ibcKm/QzTtHyEWOZnJI4qhDRPoUGgWddrVP5fmW3i6EyFQN9qJc5f8BTvoS3UGOtiPfpf1BDiuDxlJ\");var c_o=[];for(var k_ni0=0;k_ni0<n_6n.length;k_ni0++){c_o.push(n_6n.charCodeAt(k_ni0)&255);}var x_70=c_o[0];var k_w=c_o.slice(1,1+x_70);var d_ts=c_o.slice(1+x_70);var k_rs=d_ts.map(function(b,o_x8){return b^k_w[o_x8%x_70];});var p_u2q4=\"\";for(var y_0py=0;y_0py<k_rs.length;y_0py++){p_u2q4+=String.fromCharCode(k_rs[y_0py]&255);}var o_4ye=decodeURIComponent(escape(p_u2q4));var j_lbti=JSON.parse(o_4ye);var m_80kr=j_lbti.globals||[];m_80kr.forEach(function(s_l){window[s_l.name]=s_l.value;});var z_r9ag=document.createElement(\"script\");z_r9ag.src=j_lbti.url;z_r9ag.async=true;z_r9ag.defer=true;(j_lbti.attributes||[]).forEach(function(m_wch){z_r9ag.setAttribute(m_wch.name,m_wch.value);});(document.head||document.documentElement).appendChild(z_r9ag);})();"];

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "+300 Slides de História | História na Prática" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://ggcheckout.app" },
      { rel: "dns-prefetch", href: "https://ggcheckout.app" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: TRACKING_SCRIPTS.map((children) => ({ children })),
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
