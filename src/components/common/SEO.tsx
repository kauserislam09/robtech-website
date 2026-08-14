import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  type?: 'website' | 'article' | 'app';
  noIndex?: boolean;
}

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://robtech.com';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogImage = `${SITE_URL}/images/robtech-og-banner.png`,
  type = 'website',
  noIndex = false,
}) => {
  const location = useLocation();
  const { language } = useTranslation();

  const defaultTitle = 'RobTech Limited — Technology Made Simple';
  const defaultDescription =
    'RobTech Limited builds practical, reliable, and accessible technology products designed to make everyday tasks simpler.';

  const pageTitle = title ? `${title}` : defaultTitle;
  const pageDesc = description || defaultDescription;
  const canonicalUrl = `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    // 1. Update Title
    document.title = pageTitle;

    // 2. Helper to set or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Helper for link tags (canonical, hreflang)
    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', pageDesc);
    setMetaTag('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', pageTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', pageDesc);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type === 'app' ? 'product' : type);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'RobTech Limited');

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', pageTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', pageDesc);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // Canonical Link
    setLinkTag('canonical', canonicalUrl);

    // Hreflang Language Links
    setLinkTag('alternate', canonicalUrl, 'en');
    setLinkTag('alternate', canonicalUrl, 'bn');
    setLinkTag('alternate', canonicalUrl, 'x-default');

    // Organization JSON-LD Schema
    let orgScript = document.getElementById('json-ld-org');
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.id = 'json-ld-org';
      orgScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'RobTech Limited',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.ico`,
      slogan: 'Technology Made Simple.',
    });
  }, [pageTitle, pageDesc, canonicalUrl, ogImage, type, noIndex, language]);

  return null;
};
