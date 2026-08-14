import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography, Badge, Button } from '../ui';
import type { BadgeVariant } from '../ui';
import type { Product } from '../../types/product';
import { useTranslation } from '../../hooks/useTranslation';
import './RelatedProducts.css';

interface RelatedProductsProps {
  currentProductId: string;
  allProducts: Product[];
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProductId,
  allProducts,
}) => {
  const { t, language } = useTranslation();

  const related = allProducts.filter((p) => p.id !== currentProductId).slice(0, 3);

  if (related.length === 0) return null;

  const getStatusVariant = (status: string): BadgeVariant => {
    switch (status) {
      case 'stable': return 'success';
      case 'active': return 'success';
      case 'beta': return 'warning';
      case 'development': return 'info';
      default: return 'neutral';
    }
  };

  return (
    <section className="app-section">
      <Typography variant="h2" className="app-section__title">
        You May Also Like
      </Typography>

      <div className="related-products-grid">
        {related.map((prod) => (
          <Card key={prod.id} variant="standard" padding="md" className="product-card">
            <div className="product-card__header">
              <Typography variant="h3">{prod.name}</Typography>
              <Badge variant={getStatusVariant(prod.status)}>
                {t(`common.${prod.status}`)}
              </Badge>
            </div>
            <Typography variant="caption" className="product-card__category">
              {prod.category} • Android
            </Typography>
            <Typography variant="body" muted className="product-card__desc">
              {prod.shortDescription[language] || prod.shortDescription.en}
            </Typography>
            <div className="product-card__footer">
              <Link to={`/apps/${prod.slug}`}>
                <Button variant="outline" size="sm">
                  {t('common.viewApp')}
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
