import React from 'react';
import { Card } from '../ui';
import type { Product } from '../../types/product';
import { useTranslation } from '../../hooks/useTranslation';
import './QuickInfo.css';

interface QuickInfoProps {
  product: Product;
}

export const QuickInfo: React.FC<QuickInfoProps> = ({ product }) => {
  const { t } = useTranslation();

  return (
    <Card variant="standard" padding="md" className="quick-info-bar">
      <div className="quick-info-item">
        <span className="quick-info-label">Platform</span>
        <span className="quick-info-value">{product.platforms.join(', ').toUpperCase()}</span>
      </div>
      <div className="quick-info-item">
        <span className="quick-info-label">Status</span>
        <span className="quick-info-value">{t(`common.${product.status}`)}</span>
      </div>
      <div className="quick-info-item">
        <span className="quick-info-label">Category</span>
        <span className="quick-info-value">{product.category}</span>
      </div>
      {product.latestVersion && (
        <div className="quick-info-item">
          <span className="quick-info-label">Latest Version</span>
          <span className="quick-info-value">v{product.latestVersion}</span>
        </div>
      )}
      {product.apkSize && (
        <div className="quick-info-item">
          <span className="quick-info-label">Size</span>
          <span className="quick-info-value">{product.apkSize}</span>
        </div>
      )}
    </Card>
  );
};
