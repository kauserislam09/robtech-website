# RobTech Limited — App Update System Architecture

This directory serves as the static endpoint for RobTech Android applications to query update manifests.

## Update Manifest Endpoint Structure

Each application checks its corresponding JSON update file:

- `https://robtech.org/update/rob-personal-stock.json`
- `https://robtech.org/update/rob-music-player.json`
- `https://robtech.org/update/rob-drop-offline.json`
- `https://robtech.org/update/rob-warranty-wallet.json`
- `https://robtech.org/update/rob-house-rental.json`

## JSON Schema Specification

```json
{
  "appId": "string (unique identifier)",
  "appName": "string (display name)",
  "currentVersion": "string (semver string e.g. 1.2.0)",
  "versionCode": "number (integer e.g. 120)",
  "minSupportedVersionCode": "number (minimum versionCode required to run)",
  "mandatory": "boolean (true if update must be forced)",
  "releaseNotes": {
    "en": ["array of English changelog items"],
    "bn": ["array of Bangla changelog items"]
  },
  "downloadUrl": "string (direct HTTPS link to APK or release page)",
  "apkSize": "string (human readable size e.g. 14.7 MB)",
  "sha256": "string (optional SHA-256 hash for integrity verification)",
  "lastUpdated": "string (ISO 8601 timestamp)"
}
```

## Android Client Integration Guidelines

1. Applications make a lightweight `GET` request to their respective JSON endpoint on app launch (or upon manual "Check for Updates" trigger).
2. The client compares `versionCode` in the response with `BuildConfig.VERSION_CODE`.
3. If `versionCode > clientVersionCode`:
   - If `clientVersionCode < minSupportedVersionCode` OR `mandatory == true`, prompt an un-dismissible update dialog.
   - Otherwise, display an optional update notification modal with localized `releaseNotes`.
