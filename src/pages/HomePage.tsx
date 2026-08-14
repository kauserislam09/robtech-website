import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import {
  Typography,
  Card,
  Badge,
  Button,
  Divider,
} from '../components/ui';
import type { BadgeVariant } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { PRODUCTS } from '../data/products';
import { RELEASES } from '../data/releases';
import { ROUTES } from '../utils/routes';
import {
  CheckCircle2,
  Smartphone,
  Sparkles,
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
  BookOpen,
  HelpCircle,
} from 'lucide-react';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const { t, language } = useTranslation();

  const getStatusBadgeVariant = (status: string): BadgeVariant => {
    switch (status) {
      case 'active': return 'success';
      case 'stable': return 'success';
      case 'beta': return 'warning';
      case 'development': return 'info';
      case 'archived': return 'neutral';
      default: return 'info';
    }
  };

  return (
    <PageContainer size="lg">
      <SEO
        title="RobTech Limited — Technology Made Simple"
        description="RobTech builds practical technology products designed to make everyday tasks simpler, more reliable, and more accessible."
      />

      {/* Hero Section */}
      <section className="home-hero">
        <Badge variant="primary" className="hero-badge">
          <CheckCircle2 size={14} style={{ marginRight: 4 }} aria-hidden="true" />
          {t('brand.name')}
        </Badge>
        <Typography variant="display" className="hero-title">
          {t('hero.title')}
        </Typography>
        <Typography variant="body" muted className="hero-desc">
          {t('hero.subtitle')}
        </Typography>

        <div className="hero-actions">
          <Link to={ROUTES.PRODUCTS}>
            <Button variant="primary" size="lg">
              {t('common.exploreProducts')}
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </Link>
          <Link to={ROUTES.APPS}>
            <Button variant="secondary" size="lg">
              {t('common.exploreApps')}
            </Button>
          </Link>
        </div>
      </section>

      <Divider />

      {/* Trust & Principles Section */}
      <section className="home-principles">
        <div className="section-header center">
          <Typography variant="h2">{t('principles.title')}</Typography>
          <Typography variant="body" muted>{t('principles.subtitle')}</Typography>
        </div>

        <div className="principles-grid">
          <Card variant="standard" padding="md" className="principle-card">
            <div className="principle-icon">
              <Sparkles size={24} aria-hidden="true" />
            </div>
            <Typography variant="h3">{t('principles.simpleTitle')}</Typography>
            <Typography variant="body" muted>{t('principles.simpleDesc')}</Typography>
          </Card>

          <Card variant="standard" padding="md" className="principle-card">
            <div className="principle-icon">
              <Zap size={24} aria-hidden="true" />
            </div>
            <Typography variant="h3">{t('principles.usefulTitle')}</Typography>
            <Typography variant="body" muted>{t('principles.usefulDesc')}</Typography>
          </Card>

          <Card variant="standard" padding="md" className="principle-card">
            <div className="principle-icon">
              <CheckCircle2 size={24} aria-hidden="true" />
            </div>
            <Typography variant="h3">{t('principles.reliableTitle')}</Typography>
            <Typography variant="body" muted>{t('principles.reliableDesc')}</Typography>
          </Card>

          <Card variant="standard" padding="md" className="principle-card">
            <div className="principle-icon">
              <ShieldCheck size={24} aria-hidden="true" />
            </div>
            <Typography variant="h3">{t('principles.accessibleTitle')}</Typography>
            <Typography variant="body" muted>{t('principles.accessibleDesc')}</Typography>
          </Card>

          <Card variant="standard" padding="md" className="principle-card">
            <div className="principle-icon">
              <Lock size={24} aria-hidden="true" />
            </div>
            <Typography variant="h3">{t('principles.privacyTitle')}</Typography>
            <Typography variant="body" muted>{t('principles.privacyDesc')}</Typography>
          </Card>
        </div>
      </section>

      <Divider />

      {/* Featured Products Section */}
      <section className="home-products">
        <div className="section-header between">
          <div>
            <Typography variant="h2">{t('home.featuredProductsTitle')}</Typography>
            <Typography variant="body" muted>{t('home.featuredProductsDesc')}</Typography>
          </div>
          <Link to={ROUTES.PRODUCTS}>
            <Button variant="outline" size="sm">
              {t('common.exploreProducts')}
            </Button>
          </Link>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((prod) => (
            <Card key={prod.id} variant="standard" padding="md" className="product-card">
              <div className="product-card__header">
                <Typography variant="h3">{prod.name}</Typography>
                <Badge variant={getStatusBadgeVariant(prod.status)}>
                  {t(`common.${prod.status}`)}
                </Badge>
              </div>
              <Typography variant="caption" className="product-card__category">
                {prod.category} • {prod.platforms.join(', ')}
              </Typography>
              <Typography variant="body" muted className="product-card__desc">
                {prod.shortDescription[language] || prod.shortDescription.en}
              </Typography>
              <div className="product-card__footer">
                <Link to={`/apps/${prod.slug}`}>
                  <Button variant="ghost" size="sm">
                    {t('common.viewDetails')}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Divider />

      {/* Dedicated Android Apps Section */}
      <section className="home-apps">
        <div className="section-header between">
          <div className="section-title-wrap">
            <Smartphone size={24} className="section-title-icon" aria-hidden="true" />
            <div>
              <Typography variant="h2">{t('home.featuredAppsTitle')}</Typography>
              <Typography variant="body" muted>{t('home.featuredAppsDesc')}</Typography>
            </div>
          </div>
          <Link to={ROUTES.APPS}>
            <Button variant="outline" size="sm">
              {t('common.exploreApps')}
            </Button>
          </Link>
        </div>

        <div className="products-grid">
          {PRODUCTS.filter(p => p.platforms.includes('android')).map((app) => (
            <Card key={app.id} variant="featured" padding="md" className="product-card">
              <div className="product-card__header">
                <Typography variant="h3">{app.name}</Typography>
                <Badge preset="android" />
              </div>
              <Typography variant="caption" className="product-card__category">
                {app.category} • Android
              </Typography>
              <Typography variant="body" muted className="product-card__desc">
                {app.shortDescription[language] || app.shortDescription.en}
              </Typography>
              <div className="product-card__footer">
                <Link to={`/apps/${app.slug}`}>
                  <Button variant="primary" size="sm">
                    {t('common.viewApp')}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Divider />

      {/* Latest Updates Section */}
      <section className="home-updates">
        <div className="section-header between">
          <div>
            <Typography variant="h2">{t('home.updatesTitle')}</Typography>
            <Typography variant="body" muted>{t('home.updatesDesc')}</Typography>
          </div>
          <Link to={ROUTES.UPDATES}>
            <Button variant="outline" size="sm">
              {t('home.viewAllUpdates')}
            </Button>
          </Link>
        </div>

        {RELEASES.length > 0 ? (
          <div className="releases-list">
            {RELEASES.slice(0, 2).map((rel) => (
              <Card key={rel.id} variant="standard" padding="md" className="release-card">
                <div className="release-card__header">
                  <div>
                    <Typography variant="h3">{rel.productId}</Typography>
                    <Typography variant="caption" muted>
                      {t('common.version')} {rel.versionName} • {rel.releaseDate}
                    </Typography>
                  </div>
                  <Badge preset="stable" />
                </div>
                <ul className="changelog-list">
                  {(rel.changelog[language] || rel.changelog.en).map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        ) : (
          <Card variant="standard" padding="lg" style={{ textAlign: 'center' }}>
            <Typography variant="h3">{t('empty.title')}</Typography>
            <Typography variant="body" muted>{t('empty.description')}</Typography>
          </Card>
        )}
      </section>

      <Divider />

      {/* Documentation & Support Section */}
      <div className="home-help-grid">
        <Card variant="standard" padding="lg">
          <BookOpen size={28} className="help-icon" aria-hidden="true" />
          <Typography variant="h3">{t('home.docsTitle')}</Typography>
          <Typography variant="body" muted>{t('home.docsDesc')}</Typography>
          <Link to={ROUTES.DOCS}>
            <Button variant="outline" size="sm">
              {t('common.openDocs')}
            </Button>
          </Link>
        </Card>

        <Card variant="standard" padding="lg">
          <HelpCircle size={28} className="help-icon" aria-hidden="true" />
          <Typography variant="h3">{t('home.supportTitle')}</Typography>
          <Typography variant="body" muted>{t('home.supportDesc')}</Typography>
          <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
            <Link to={ROUTES.SUPPORT}>
              <Button variant="primary" size="sm">
                {t('common.visitSupport')}
              </Button>
            </Link>
            <Link to={ROUTES.CONTACT}>
              <Button variant="secondary" size="sm">
                {t('common.contactUs')}
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      <Divider />

      {/* Final CTA Section */}
      <section className="home-cta">
        <Typography variant="h2">{t('home.ctaTitle')}</Typography>
        <Typography variant="body" muted className="cta-desc">
          {t('home.ctaDesc')}
        </Typography>
        <Link to={ROUTES.PRODUCTS}>
          <Button variant="primary" size="lg">
            {t('common.exploreProducts')}
          </Button>
        </Link>
      </section>
    </PageContainer>
  );
};
