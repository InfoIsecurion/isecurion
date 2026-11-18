"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useConsent } from "../../lib/consent";
import { siteConfig } from "../../lib/seo/site.config";
import { resolveTracking } from "../../lib/seo/tracking";

/**
 * Google Analytics / Google Ads, Microsoft Clarity and Hotjar,
 * loaded ONLY after the visitor accepts analytics cookies.
 */
export default function Analytics() {
  const consent = useConsent();
  const pathname = usePathname();
  // Clarity and Hotjar can only load one project per full page load, so the page
  // the visitor LANDS on decides which project IDs are used.
  const [tracking] = useState(() => resolveTracking(pathname));
  const allowed = consent?.analytics === true;
  const { gaIds } = siteConfig.analytics;
  const { hotjarId, clarityId } = tracking;

  // Honour withdrawal: tell GA to stop even if the script was already loaded
  useEffect(() => {
    if (!consent) return;
    const w = window as unknown as Record<string, unknown>;
    gaIds.forEach((id) => {
      w[`ga-disable-${id}`] = !consent.analytics;
    });
  }, [consent, gaIds]);

  if (!allowed) return null;

  const gtagInit = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    ${gaIds.map((id) => `gtag('config', '${id}');`).join("\n    ")}
  `;

  const clarityInit = `
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${clarityId}");
  `;

  const hotjarInit = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${hotjarId},hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `;

  return (
    <>
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaIds[0]}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {gtagInit}
      </Script>
      {clarityId && (
        <Script id={`clarity-${clarityId}`} strategy="afterInteractive">
          {clarityInit}
        </Script>
      )}
      {hotjarId && (
        <Script id={`hotjar-${hotjarId}`} strategy="afterInteractive">
          {hotjarInit}
        </Script>
      )}
    </>
  );
}