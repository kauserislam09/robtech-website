import type { Release } from '../types/release';
import { RELEASES } from '../data/releases';

/**
 * Validates that a string is a secure HTTPS URL.
 */
export function isValidHttpsUrl(url?: string | null): boolean {
  if (!url || typeof url !== 'string') return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Validates release metadata integrity for security and completeness.
 */
export function validateReleaseData(release: Partial<Release>): boolean {
  if (!release.id || !release.productId || !release.versionName) {
    console.error('[Release Validation Error]: Missing core identifiers', release);
    return false;
  }

  if (typeof release.versionCode !== 'number' || release.versionCode <= 0) {
    console.error(`[Release Validation Error]: Invalid versionCode for "${release.id}"`, release.versionCode);
    return false;
  }

  if (release.apkUrl && !isValidHttpsUrl(release.apkUrl)) {
    console.error(`[Release Security Warning]: Insecure or invalid apkUrl for "${release.id}"`, release.apkUrl);
    return false;
  }

  if (release.releasePageUrl && !isValidHttpsUrl(release.releasePageUrl)) {
    console.error(`[Release Security Warning]: Insecure or invalid releasePageUrl for "${release.id}"`, release.releasePageUrl);
    return false;
  }

  if (!release.changelog || !Array.isArray(release.changelog.en) || release.changelog.en.length === 0) {
    console.error(`[Release Validation Error]: Missing English changelog for "${release.id}"`);
    return false;
  }

  return true;
}

/**
 * Returns all valid releases for a given product ID, ordered by versionCode descending.
 */
export function getReleaseHistory(productId: string): Release[] {
  const filtered = RELEASES.filter((r) => r.productId === productId && validateReleaseData(r));
  return filtered.sort((a, b) => b.versionCode - a.versionCode);
}

/**
 * Returns the highest valid release (by versionCode) for a product ID.
 */
export function getLatestRelease(productId: string): Release | undefined {
  const history = getReleaseHistory(productId);
  return history.length > 0 ? history[0] : undefined;
}

/**
 * Android version comparison integer logic: remote > installed.
 */
export function isUpdateAvailable(installedVersionCode: number, remoteRelease?: Release): boolean {
  if (!remoteRelease || typeof remoteRelease.versionCode !== 'number') return false;
  return remoteRelease.versionCode > installedVersionCode;
}
