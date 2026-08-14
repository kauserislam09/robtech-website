import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import {
  Breadcrumb,
  Typography,
  Card,
  Divider,
} from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { PRODUCTS } from '../data/products';
import { RELEASES } from '../data/releases';
import { NotFoundPage } from './NotFoundPage';
import { AppHero } from '../components/app/AppHero';
import { QuickInfo } from '../components/app/QuickInfo';
import { FeatureGrid } from '../components/app/FeatureGrid';
import { ScreenshotGallery } from '../components/app/ScreenshotGallery';
import { RequirementsTable } from '../components/app/RequirementsTable';
import { ReleaseHistory } from '../components/app/ReleaseHistory';
import { RelatedProducts } from '../components/app/RelatedProducts';
import { ROUTES } from '../utils/routes';
import { BookOpen, Shield, HelpCircle } from 'lucide-react';
import './AppDetailPage.css';

export const AppDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = useTranslation();

  const product = PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  useEffect(() => {
    if (!product) return;

    let script = document.getElementById('json-ld-app');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-app';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }

    const appSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: product.name,
      operatingSystem: 'Android',
      applicationCategory: product.category,
      softwareVersion: product.latestVersion || '1.0.0',
      description: product.description[language] || product.description.en,
      offers: {
        '@type': 'Offer',
        price: '0.00',
        priceCurrency: 'USD',
      },
    };

    script.textContent = JSON.stringify(appSchema);
  }, [product, language]);

  if (!product) {
    return <NotFoundPage />;
  }

  const appReleases = RELEASES.filter((r) => r.productId === product.id);

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.apps'), href: ROUTES.APPS },
    { label: product.name },
  ];

  return (
    <PageContainer size="lg">
      <SEO
        title={`${product.name} — RobTech`}
        description={product.shortDescription[language] || product.shortDescription.en}
      />

      <Breadcrumb items={breadcrumbs} />

      {/* Hero Section */}
      <AppHero product={product} />

      {/* Quick Metrics Bar */}
      <QuickInfo product={product} />

      {/* Overview / About App */}
      <section className="app-section">
        <Typography variant="h2" className="app-section__title">
          About {product.name}
        </Typography>
        <Card variant="standard" padding="lg">
          <Typography variant="body" muted style={{ lineHeight: 1.7, fontSize: 'var(--font-size-body-lg)' }}>
            {product.description[language] || product.description.en}
          </Typography>
        </Card>
      </section>

      <Divider />

      {/* Key Features */}
      {product.features && product.features.length > 0 && (
        <>
          <FeatureGrid features={product.features} />
          <Divider />
        </>
      )}

      {/* Screenshots */}
      {product.screenshots && product.screenshots.length > 0 && (
        <>
          <ScreenshotGallery screenshots={product.screenshots} />
          <Divider />
        </>
      )}

      {/* System Requirements */}
      {product.requirements && product.requirements.length > 0 && (
        <>
          <RequirementsTable requirements={product.requirements} />
          <Divider />
        </>
      )}

      {/* Version & Release History */}
      <ReleaseHistory releases={appReleases} />

      <Divider />

      {/* Documentation, Privacy & Support Quick Bar */}
      <section className="app-section">
        <Card variant="standard" padding="md" className="app-links-card">
          {product.documentationUrl && (
            <Link to={product.documentationUrl} className="app-link-item">
              <BookOpen size={20} aria-hidden="true" />
              <span>Documentation</span>
            </Link>
          )}
          {product.privacyUrl && (
            <Link to={product.privacyUrl} className="app-link-item">
              <Shield size={20} aria-hidden="true" />
              <span>Privacy Policy</span>
            </Link>
          )}
          {product.supportUrl && (
            <Link to={product.supportUrl} className="app-link-item">
              <HelpCircle size={20} aria-hidden="true" />
              <span>Support & Help</span>
            </Link>
          )}
        </Card>
      </section>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} allProducts={PRODUCTS} />
    </PageContainer>
  );
};
