import { useSyncExternalStore } from "react";

/**
 * Tiny cookie-consent store (localStorage + a DOM event).
 * Analytics scripts are only loaded when `analytics` is true.
 */
export type Consent = { analytics: boolean };

const KEY = "isecurion_cookie_consent_v1";
const CHANGE_EVENT = "isecurion:consent-change";
export const OPEN_SETTINGS_EVENT = "isecurion:cookie-settings";

let cachedRaw: string | null | undefined;
let cachedValue: Consent | null = null;

/** Returns the saved choice, or null if the visitor has not decided yet. */
export function readConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return null;
  }
  // Return the same object while storage is unchanged (required by useSyncExternalStore)
  if (raw === cachedRaw) return cachedValue;
  cachedRaw = raw;
  try {
    cachedValue = raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    cachedValue = null;
  }
  return cachedValue;
}

export function writeConsent(consent: Consent): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(consent));
  } catch {
    /* storage blocked: the choice only lasts for this page view */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(onChange: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useConsent(): Consent | null {
  return useSyncExternalStore(subscribe, readConsent, () => null);
}

/** false during SSR and the hydration pass, true afterwards (avoids a banner flash) */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

/** Call from a footer link: <button onClick={openCookieSettings}>Cookie settings</button> */
export function openCookieSettings(): void {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}