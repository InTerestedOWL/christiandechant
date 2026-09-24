"use client";

/**
 * Cookie/storage consent, kept in localStorage on the visitor's device only.
 * Bump CONSENT_VERSION whenever a new optional service is added, so visitors are asked again.
 */
export const CONSENT_VERSION = 1;
const STORAGE_KEY = 'cd-consent';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;
export const OPEN_SETTINGS_EVENT = 'cd:open-cookie-settings';
export const CONSENT_CHANGED_EVENT = 'cd:consent-changed';

export type ConsentCategory = 'statistics';

export interface Consent {
  version: number,
  date: string,
  statistics: boolean,
}

/** Returns the stored decision, or null if the visitor has to be asked (again). */
export function readConsent(): Consent | null {
  try {
    const consent = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? 'null') as Consent | null;
    if ( !consent || consent.version !== CONSENT_VERSION ) {
      return null;
    }
    if ( Date.now() - new Date(consent.date).getTime() > MAX_AGE_MS ) {
      return null;
    }
    return consent;
  } catch {
    return null;
  }
}

export function saveConsent(choice: Omit<Consent, 'version' | 'date'>) {
  const consent: Consent = { ...choice, version: CONSENT_VERSION, date: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // Storage blocked (e.g. private mode): the choice still applies for this page view.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: consent }));
}

/** Use before loading any optional third-party service. */
export function hasConsent(category: ConsentCategory) {
  return readConsent()?.[category] === true;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
