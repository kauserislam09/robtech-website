# RobTech Android Release & Metadata Maintenance Guide

This document details the official release procedure for publishing RobTech Android applications and updating the central website metadata.

---

## 1. Monotonic Versioning Requirements

Android requires every release to increment its integer `versionCode`:

```text
Version Name (human readable):  1.2.0  -->  1.3.0
Version Code (integer):          12    -->   13
```

> [!CAUTION]
> The remote `versionCode` MUST strictly increase for Android clients to detect updates. Never release a new version with an unchanged or lower `versionCode`.

---

## 2. Step-by-Step Release Workflow

```text
Step 1: Increment versionCode & versionName in Android build.gradle.kts
Step 2: Build signed release APK (`./gradlew assembleRelease`)
Step 3: Test APK installation on physical test devices
Step 4: Calculate APK SHA-256 Checksum (Optional):
        PowerShell: Get-FileHash .\RobPersonalStock-1.3.0.apk -Algorithm SHA256
Step 5: Create GitHub Release tag (e.g. v1.3.0) on official app repository
Step 6: Upload RobPersonalStock-1.3.0.apk asset to the GitHub Release
Step 7: Copy the direct HTTPS download URL of the uploaded APK
Step 8: Update website static manifest: public/update/<app-id>.json
Step 9: Run automated validation: node scripts/validate-releases.js
Step 10: Commit manifest changes & push to main repository
```

---

## 3. Immutable Download URLs

Always use version-specific immutable GitHub release asset URLs:

**Correct (Immutable):**
```text
https://github.com/robtech-limited/rob-personal-stock/releases/download/v1.3.0/RobPersonalStock-1.3.0.apk
```

**Incorrect (Mutable):**
```text
https://github.com/robtech-limited/rob-personal-stock/releases/latest/download/RobPersonalStock.apk
```

---

## 4. Defective APK Correction Policy

If an APK binary is found to have a critical defect after release:

1. **Do NOT overwrite** the file behind the existing GitHub release asset or version code.
2. Increment `versionCode` (e.g., from `13` to `14`) and `versionName` (e.g., `1.3.1`).
3. Build a corrected APK and publish a new GitHub release tag `v1.3.1`.
4. Update `public/update/<app-id>.json` with the new version and changelog explanation.
