# RobTech Android App Update System — API & Integration Contract

## 1. Overview
RobTech Android applications verify updates by fetching static JSON metadata hosted on the official RobTech static web server or CDN. No server-side execution or authentication is required.

---

## 2. Endpoint Format
Every RobTech Android app queries its dedicated update JSON endpoint:

```text
GET https://robtech.com/update/<app-id>.json
```

### Supported Endpoints:
- `https://robtech.com/update/rob-personal-stock.json`
- `https://robtech.com/update/rob-music-player.json`
- `https://robtech.com/update/rob-drop-offline.json`
- `https://robtech.com/update/rob-warranty-wallet.json`
- `https://robtech.com/update/rob-house-rental.json`

---

## 3. JSON Response Schema

```json
{
  "appId": "rob-personal-stock",
  "name": "Rob Personal Stock",
  "latest": {
    "versionCode": 12,
    "versionName": "1.2.0",
    "releaseDate": "2026-08-15",
    "status": "stable",
    "minimumAndroidVersion": 26,
    "apkUrl": "https://github.com/robtech-limited/rob-personal-stock/releases/download/v1.2.0/RobPersonalStock-1.2.0.apk",
    "releasePageUrl": "https://github.com/robtech-limited/rob-personal-stock/releases/tag/v1.2.0",
    "fileName": "RobPersonalStock-1.2.0.apk",
    "fileSize": "14.7 MB",
    "mandatory": false
  },
  "releaseNotes": {
    "en": [
      "Added offline CSV data export and backup restoration.",
      "Improved low-stock notification triggers for pantry items."
    ],
    "bn": [
      "অফলাইন সিএসভি ডেটা এক্সপোর্ট এবং ব্যাকআপ রিস্টোর যুক্ত করা হয়েছে।",
      "প্যান্ট্রি আইটেমের জন্য কম স্টকের নোটিফিকেশন সুবিধা উন্নত করা হয়েছে।"
    ]
  }
}
```

---

## 4. Field Specification Table

| Field | Type | Required | Description |
|---|---|---|---|
| `appId` | String | Yes | Unique application slug identifier |
| `name` | String | Yes | Public application name |
| `latest.versionCode` | Integer | Yes | Android build version code integer for comparison |
| `latest.versionName` | String | Yes | Human readable semantic version string (e.g. `1.2.0`) |
| `latest.releaseDate` | String | Yes | ISO date string (`YYYY-MM-DD`) |
| `latest.status` | String | Yes | `stable`, `beta`, `development`, `deprecated`, or `archived` |
| `latest.minimumAndroidVersion` | Integer | No | Minimum supported Android SDK API level |
| `latest.apkUrl` | String | Yes | Valid HTTPS URL pointing to signed APK release asset |
| `latest.releasePageUrl` | String | No | Valid HTTPS URL pointing to GitHub Release tag page |
| `latest.mandatory` | Boolean | No | `true` if update is required due to critical fix |
| `releaseNotes.en` | Array[String] | Yes | English changelog bullet items |
| `releaseNotes.bn` | Array[String] | Yes | Bangla changelog bullet items |

---

## 5. Version Comparison Logic for Android Developers

Android applications MUST compare integer version codes:

```kotlin
// Android Client Update Verification Logic
fun checkUpdate(installedVersionCode: Int, remoteManifest: UpdateManifest): UpdateStatus {
    val latestVersionCode = remoteManifest.latest.versionCode
    val isMandatory = remoteManifest.latest.mandatory ?: false

    return when {
        latestVersionCode > installedVersionCode -> {
            if (isMandatory) UpdateStatus.MANDATORY_AVAILABLE else UpdateStatus.OPTIONAL_AVAILABLE
        }
        else -> UpdateStatus.UP_TO_DATE
    }
}
```

> [!CAUTION]
> Never compare `versionName` strings (e.g., `"1.10.0"` vs `"1.9.0"`) as plain strings. Always rely strictly on integer `versionCode`.

---

## 6. Error & Security Handling
1. **URL Validation:** Android apps must reject any `apkUrl` that does not begin with `https://`.
2. **Network Timeout / Failure:** If the JSON endpoint is unreachable, silently log the exception without blocking app startup.
