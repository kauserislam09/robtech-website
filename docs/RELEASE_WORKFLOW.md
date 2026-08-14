# RobTech Application Release & Publishing Workflow

This document outlines the standard step-by-step workflow for publishing a new RobTech application release.

---

## Release Step-by-Step Sequence

```text
1. Build & Sign Android APK
          ↓
2. Increment versionCode & versionName
          ↓
3. Test APK locally on test devices
          ↓
4. Create GitHub Release tag (e.g., v1.2.0)
          ↓
5. Upload signed APK asset to GitHub Release
          ↓
6. Update RobTech website static metadata (public/update/<app-id>.json)
          ↓
7. Run validation script (npm run validate:releases)
          ↓
8. Commit & Push to main repository
          ↓
9. Deploy RobTech Website to Cloudflare Pages
```

---

## Detailed Step Explanation

### Step 1: Build & Sign APK
Generate a release-ready signed APK using Android Studio or Gradle CLI:
```bash
./gradlew assembleRelease
```

### Step 2: Update Version Metadata
Ensure `build.gradle.kts` has updated version metrics:
```kotlin
android {
    defaultConfig {
        versionCode = 13 // Must increment monotonically
        versionName = "1.3.0"
    }
}
```

### Step 3: GitHub Release & Asset Upload
1. Navigate to the GitHub repository for the app.
2. Draft a new release tagged `v1.3.0`.
3. Upload `RobPersonalStock-1.3.0.apk`.
4. Publish release and copy the direct HTTPS download URL of the uploaded APK asset.

### Step 4: Update RobTech Static Manifest (`public/update/<app-id>.json`)
Update the static JSON file in the website repository:
```json
{
  "appId": "rob-personal-stock",
  "name": "Rob Personal Stock",
  "latest": {
    "versionCode": 13,
    "versionName": "1.3.0",
    "releaseDate": "2026-09-01",
    "status": "stable",
    "minimumAndroidVersion": 26,
    "apkUrl": "https://github.com/robtech-limited/rob-personal-stock/releases/download/v1.3.0/RobPersonalStock-1.3.0.apk",
    "releasePageUrl": "https://github.com/robtech-limited/rob-personal-stock/releases/tag/v1.3.0",
    "fileName": "RobPersonalStock-1.3.0.apk",
    "fileSize": "15.1 MB",
    "mandatory": false
  },
  "releaseNotes": {
    "en": [
      "Added dark theme support for item cards.",
      "Fixed barcode scanner autofocus latency."
    ],
    "bn": [
      "আইটেম কার্ডে ডার্ক থিম মোড যুক্ত করা হয়েছে।",
      "বারকোড স্ক্যানারের অটোফোকাস সমস্যা সমাধান করা হয়েছে।"
    ]
  }
}
```

### Step 5: Run Automated Validation
Verify manifest schema integrity and HTTPS security rules:
```bash
node scripts/validate-releases.js
```

### Step 6: Deploy Website
Push changes to main repository. Cloudflare Pages automatically builds and deploys the static website and JSON update endpoints within seconds.
