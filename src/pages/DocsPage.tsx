import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card, Badge } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { DOC_ARTICLES } from '../data/docs';
import { PRODUCTS } from '../data/products';
import { DocSearch } from '../components/docs/DocSearch';
import { BookOpen, Download, RefreshCw, AlertTriangle, HelpCircle, Smartphone, Code, ArrowRight } from 'lucide-react';
import './DocsPage.css';

export const DocsPage: React.FC = () => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.docs') },
  ];

  const categoryCards = [
    {
      title: t('docs.gettingStarted', 'Getting Started'),
      desc: 'Learn how to explore, download, install, and use RobTech apps.',
      icon: <BookOpen size={28} className="cat-icon" aria-hidden="true" />,
      url: '/docs/getting-started',
      badge: 'Start Here',
    },
    {
      title: t('docs.installation', 'APK Installation'),
      desc: 'Step-by-step instructions for installing Android packages safely.',
      icon: <Download size={28} className="cat-icon" aria-hidden="true" />,
      url: '/docs/installation',
      badge: 'Android Guide',
    },
    {
      title: t('docs.updates', 'Updating Apps'),
      desc: 'Understand update notifications and installation confirmations.',
      icon: <RefreshCw size={28} className="cat-icon" aria-hidden="true" />,
      url: '/docs/updates',
      badge: 'Release System',
    },
    {
      title: t('docs.troubleshooting', 'Troubleshooting'),
      desc: 'Solutions for common download, installation, and crash problems.',
      icon: <AlertTriangle size={28} className="cat-icon" aria-hidden="true" />,
      url: '/docs/troubleshooting',
      badge: 'Help',
    },
    {
      title: t('docs.faq', 'Frequently Asked Questions'),
      desc: 'Quick answers about RobTech products, versions, and security.',
      icon: <HelpCircle size={28} className="cat-icon" aria-hidden="true" />,
      url: '/docs/faq',
      badge: 'FAQs',
    },
    {
      title: 'Maintainer & Developer Guide',
      desc: 'Technical guide for release metadata, versionCode rules, and workflow.',
      icon: <Code size={28} className="cat-icon" aria-hidden="true" />,
      url: '/docs/developer',
      badge: 'Technical',
    },
  ];

  return (
    <PageContainer size="lg">
      <SEO
        title="RobTech Documentation & Guides"
        description="Find simple guides and helpful information for using RobTech applications."
      />

      <PageHeader
        title={t('docsPage.title')}
        description={t('docsPage.description')}
        breadcrumbs={breadcrumbs}
      />

      {/* Instant Search Bar */}
      <DocSearch articles={DOC_ARTICLES} />

      {/* Core Category Cards */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Typography variant="h2" style={{ marginBottom: 'var(--space-4)' }}>
          Documentation Categories
        </Typography>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-5)' }}>
          {categoryCards.map((cat, idx) => (
            <Link key={idx} to={cat.url} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card variant="interactive" padding="lg" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>
                    {cat.icon}
                  </div>
                  <Typography variant="h3">{cat.title}</Typography>
                  <Typography variant="body" muted style={{ fontSize: 'var(--font-size-body-sm)' }}>
                    {cat.desc}
                  </Typography>
                </div>
                <div style={{ marginTop: 'var(--space-4)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Badge variant="neutral">{cat.badge}</Badge>
                  <ArrowRight size={18} style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* App Specific User Manuals */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Typography variant="h2" style={{ marginBottom: 'var(--space-4)' }}>
          Application User Manuals
        </Typography>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
          {PRODUCTS.map((prod) => (
            <Link key={prod.id} to={`/docs/apps/${prod.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card variant="standard" padding="md" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-primary-light)', color: 'var(--color-primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Smartphone size={22} aria-hidden="true" />
                </div>
                <div>
                  <Typography variant="h3" style={{ fontSize: 'var(--font-size-h4)', marginBottom: 2 }}>
                    {prod.name}
                  </Typography>
                  <Typography variant="caption" muted>
                    User Manual & Guide
                  </Typography>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  );
};
