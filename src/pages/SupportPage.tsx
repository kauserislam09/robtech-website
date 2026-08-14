import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card, Button, Select } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { PRODUCTS } from '../data/products';
import { ROUTES } from '../utils/routes';
import { Mail, BookOpen, AlertTriangle, RefreshCw } from 'lucide-react';

export const SupportPage: React.FC = () => {
  const { t } = useTranslation();
  const [selectedAppId, setSelectedAppId] = useState<string>('');

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.support') },
  ];

  const appOptions = [
    { value: '', label: 'Select an application (Optional)' },
    ...PRODUCTS.map((p) => ({ value: p.id, label: p.name })),
  ];

  const selectedProduct = PRODUCTS.find((p) => p.id === selectedAppId);

  return (
    <PageContainer size="lg">
      <SEO
        title={t('supportPage.title')}
        description={t('supportPage.description')}
      />

      <PageHeader
        title={t('supportPage.title')}
        description={t('supportPage.description')}
        breadcrumbs={breadcrumbs}
        actions={
          <Link to={ROUTES.CONTACT}>
            <Button variant="primary" size="sm">
              <Mail size={16} style={{ marginRight: 4 }} aria-hidden="true" />
              {t('common.contactUs')}
            </Button>
          </Link>
        }
      />

      {/* App Selector Block */}
      <Card variant="featured" padding="lg" style={{ marginBottom: 'var(--space-8)' }}>
        <Typography variant="h2" style={{ marginBottom: 'var(--space-2)' }}>
          Which application do you need help with?
        </Typography>
        <Typography variant="body" muted style={{ marginBottom: 'var(--space-4)' }}>
          Select an app to jump directly to its user manual and specialized support guide.
        </Typography>

        <div style={{ maxWidth: 420 }}>
          <Select
            label="Choose App"
            options={appOptions}
            value={selectedAppId}
            onChange={(e) => setSelectedAppId(e.target.value)}
          />
        </div>

        {selectedProduct && (
          <div style={{ marginTop: 'var(--space-4)', display: 'flex', gap: 'var(--space-3)', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to={`/docs/apps/${selectedProduct.slug}`}>
              <Button variant="primary" size="sm">
                <BookOpen size={16} style={{ marginRight: 4 }} aria-hidden="true" />
                View {selectedProduct.name} Manual
              </Button>
            </Link>
            <Link to={`/contact`}>
              <Button variant="outline" size="sm">
                <Mail size={16} style={{ marginRight: 4 }} aria-hidden="true" />
                Contact Support for {selectedProduct.name}
              </Button>
            </Link>
          </div>
        )}
      </Card>

      {/* Support Resources Grid */}
      <section style={{ marginBottom: 'var(--space-8)' }}>
        <Typography variant="h2" style={{ marginBottom: 'var(--space-4)' }}>
          Support Resources
        </Typography>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-5)' }}>
          <Card variant="standard" padding="md">
            <BookOpen size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
            <Typography variant="h3">User Manuals</Typography>
            <Typography variant="body" muted style={{ fontSize: 'var(--font-size-body-sm)' }}>
              Step-by-step guides for installing and using RobTech applications.
            </Typography>
            <Link to="/docs" style={{ display: 'inline-block', marginTop: 'var(--space-3)' }}>
              <Button variant="outline" size="sm">Browse Documentation</Button>
            </Link>
          </Card>

          <Card variant="standard" padding="md">
            <AlertTriangle size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
            <Typography variant="h3">Troubleshooting</Typography>
            <Typography variant="body" muted style={{ fontSize: 'var(--font-size-body-sm)' }}>
              Solutions for download errors, Android permissions, and installation issues.
            </Typography>
            <Link to="/docs/troubleshooting" style={{ display: 'inline-block', marginTop: 'var(--space-3)' }}>
              <Button variant="outline" size="sm">View Troubleshooting</Button>
            </Link>
          </Card>

          <Card variant="standard" padding="md">
            <RefreshCw size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
            <Typography variant="h3">App Updates</Typography>
            <Typography variant="body" muted style={{ fontSize: 'var(--font-size-body-sm)' }}>
              Learn how to update installed APKs and check release changelogs.
            </Typography>
            <Link to="/updates" style={{ display: 'inline-block', marginTop: 'var(--space-3)' }}>
              <Button variant="outline" size="sm">Check Updates</Button>
            </Link>
          </Card>
        </div>
      </section>
    </PageContainer>
  );
};
