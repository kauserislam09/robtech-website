import type { LocalizedText } from './product';

export type DocCalloutType = 'note' | 'tip' | 'warning' | 'important';

export interface DocSection {
  id: string;
  title: LocalizedText;
  content?: LocalizedText;
  type?: 'text' | 'steps' | 'callout';
  calloutType?: DocCalloutType;
  items?: LocalizedText[];
}

export interface DocArticle {
  id: string;
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  category: 'getting-started' | 'installation' | 'updates' | 'troubleshooting' | 'faq' | 'apps' | 'developer';
  appId?: string;
  order?: number;
  sections: DocSection[];
}
