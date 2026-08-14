export interface AppUpdateManifest {
  appId: string;
  appName: string;
  currentVersion: string;
  versionCode: number;
  minSupportedVersionCode: number;
  mandatory: boolean;
  releaseNotes: {
    en: string[];
    bn: string[];
  };
  downloadUrl: string;
  apkSize: string;
  sha256?: string;
  lastUpdated: string;
}
