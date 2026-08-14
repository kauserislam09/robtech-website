import type { Release } from './release';

export type ProductStatus = 'stable' | 'active' | 'beta' | 'development' | 'archived';

export type Platform = 'android' | 'web' | 'windows' | 'cross-platform';

export interface LocalizedText {
  en: string;
  bn: string;
}

export interface Feature {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  icon?: string;
}

export interface Requirement {
  label: LocalizedText;
  value: LocalizedText;
}

export interface Screenshot {
  id: string;
  src: string;
  alt: LocalizedText;
  caption?: LocalizedText;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  category: string;
  platforms: Platform[];
  status: ProductStatus;
  featured?: boolean;
  icon?: string;
  latestVersion?: string;
  apkSize?: string;
  repoUrl?: string;
  downloadUrl?: string;
  documentationUrl?: string;
  privacyUrl?: string;
  supportUrl?: string;
  features?: Feature[];
  requirements?: Requirement[];
  screenshots?: Screenshot[];
  releases?: Release[];
}
