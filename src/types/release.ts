export type ReleaseStatus = 'stable' | 'beta' | 'development' | 'deprecated' | 'archived';

export interface LocalizedChangelog {
  en: string[];
  bn: string[];
}

export interface Release {
  id: string;
  productId: string;
  versionName: string;
  versionCode: number;
  releaseDate: string;
  status: ReleaseStatus;
  minimumAndroidVersion?: number;
  apkUrl?: string;
  releasePageUrl?: string;
  fileName?: string;
  fileSize?: string | number;
  mandatory?: boolean;
  changelog: LocalizedChangelog;
}

export interface AppUpdateManifest {
  appId: string;
  name: string;
  latest: {
    versionCode: number;
    versionName: string;
    releaseDate: string;
    status: ReleaseStatus;
    minimumAndroidVersion?: number;
    apkUrl?: string;
    releasePageUrl?: string;
    mandatory?: boolean;
    fileName?: string;
    fileSize?: string | number;
  };
  releaseNotes: LocalizedChangelog;
  releases?: Release[];
}
