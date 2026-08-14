import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card, Badge, Button } from '../components/ui';
import type { BadgeVariant } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { PRODUCTS } from '../data/products';

export const AppsPage: React.FC = () => {
  const { t, language } = useTranslation();

  const androidApps = PRODUCTS.filter((p) => p.platforms.includes('android'));

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

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.apps') },
  ];

  return (
    <PageContainer size="lg">
      <SEO
        title={t('appsPage.title')}
        description={t('appsPage.description')}
      />

      <PageHeader
        title={t('appsPage.title')}
        description={t('appsPage.description')}
        breadcrumbs={breadcrumbs}
      />

      <div className="products-grid">
        {androidApps.map((app) => (
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
              <Badge variant={getStatusBadgeVariant(app.status)}>
                {t(`common.${app.status}`)}
              </Badge>
              <Link to={`/apps/${app.slug}`}>
                <Button variant="primary" size="sm">
                  {t('common.viewApp')}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};
