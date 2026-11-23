"use client";

import { useEffect, useState } from "react";
import { OPEN_SETTINGS_EVENT, useConsent, useHydrated, writeConsent } from "../../lib/consent";

type Props = {
  /** Where your privacy / cookie policy lives */
  privacyHref?: string;
};

export default function CookieConsent({ privacyHref = "/privacy-policy" }: Props) {
  const consent = useConsent();
  const hydrated = useHydrated();
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const open = () => setReopened(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  // Show only after hydration, and only if undecided (or reopened from the footer)
  if (!hydrated || (consent && !reopened)) return null;

  const choose = (analytics: boolean) => {
    writeConsent({ analytics });
    setReopened(false);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-gray-200 bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:p-5"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-700">
          We use cookies and similar technologies (including Google Analytics and Microsoft Clarity/Hotjar) 
          to understand how visitors use this site. Analytics cookies are optional and only load if you agree. See our{' '} 
          <a href={privacyHref} className="font-medium underline">
            privacy policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-md bg-[#3498db] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Accept 
          </button>
        </div>
      </div>
    </div>
  );
}