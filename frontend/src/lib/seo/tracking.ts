import { siteConfig } from "./site.config";

/**
 * Hotjar / Clarity IDs that differ per page (taken from the old pages).
 *  - hotjarId: Hotjar site ID for that page (omit = no Hotjar on that page)
 *  - clarityId: a string = that page's own Clarity project,
 *               null = no Clarity on that page,
 *               omitted = the site-wide Clarity project
 * Pages that are not listed get the site-wide Clarity project and no Hotjar.
 * Keys are the real URL paths. Add one line per page as you convert it.
 */
type PageTracking = { hotjarId?: number; clarityId?: string | null };

export const pageTracking: Record<string, PageTracking> = {
  "/services/red-team-assessment": { hotjarId: 6527247, clarityId: null },
  "/services/vapt": { hotjarId: 6527249, clarityId: "wqwbb470fz" },
  "/services/soc-2-compliance": { hotjarId: 6702241 },
  "/services/vciso": { hotjarId: 6702234, clarityId: "wqwdh2t96p" },
  "/services/ai-augamented-red-team": { clarityId: null },
  "/services/dpdp-compliance": { clarityId: null },
};

export function resolveTracking(pathname: string | null): { hotjarId?: number; clarityId?: string } {
  const key = (pathname ?? "/").replace(/\/+$/, "") || "/";
  const t = pageTracking[key];
  return {
    hotjarId: t?.hotjarId,
    clarityId: t?.clarityId === null ? undefined : (t?.clarityId ?? siteConfig.analytics.clarityId),
  };
}