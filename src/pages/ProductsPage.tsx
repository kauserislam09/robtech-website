import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card, Badge, Button } from '../components/ui';
import type { BadgeVariant } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { PRODUCTS } from '../data/products';
import './ProductsPage.css';

export const ProductsPage: React.FC = () => {
  const { t, language } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Productivity', 'Media & Entertainment', 'Utilities', 'Management'];

  const filteredProducts = selectedCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

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
    { label: t('navigation.products') },
  ];

  return (
    <PageContainer size="lg">
      <SEO
        title={t('productsPage.title')}
        description={t('productsPage.description')}
      />

      <PageHeader
        title={t('productsPage.title')}
        description={t('productsPage.description')}
        breadcrumbs={breadcrumbs}
      />

      {/* Category Filter Bar */}
      <div className="products-filter-bar">
        <Typography variant="small" muted className="filter-label">
          {t('productsPage.filterLabel')}
        </Typography>
        <div className="filter-btn-group">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? t('common.all') : cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Product List Grid */}
      <div className="products-grid">
        {filteredProducts.map((prod) => (
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
              <Typography variant="caption" muted>
                {t('common.version')}: {prod.latestVersion || 'N/A'}
              </Typography>
              <Link to={`/apps/${prod.slug}`}>
                <Button variant="secondary" size="sm">
                  {t('common.viewDetails')}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </PageContainer>
  );
};
