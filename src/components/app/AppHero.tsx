import React from 'react';
import { Smartphone, Download, BookOpen, AlertCircle } from 'lucide-react';
import { Typography, Badge, Button, Link as CustomLink } from '../ui';
import type { BadgeVariant } from '../ui';
import type { Product } from '../../types/product';
import { useTranslation } from '../../hooks/useTranslation';
import './AppHero.css';

interface AppHeroProps {
  product: Product;
}

export const AppHero: React.FC<AppHeroProps> = ({ product }) => {
  const { t, language } = useTranslation();

  const getStatusVariant = (status: string): BadgeVariant => {
    switch (status) {
      case 'stable': return 'success';
      case 'active': return 'success';
      case 'beta': return 'warning';
      case 'development': return 'info';
      case 'archived': return 'neutral';
      default: return 'info';
    }
  };

  const hasDownload = !!product.downloadUrl;

  return (
    <div className="app-hero">
      <div className="app-hero__icon-wrap">
        {product.icon ? (
          <img src={product.icon} alt={`${product.name} icon`} className="app-hero__icon" />
        ) : (
          <div className="app-hero__icon-placeholder" aria-hidden="true">
            <Smartphone size={44} />
          </div>
        )}
      </div>

      <div className="app-hero__content">
        <div className="app-hero__badges">
          <Badge preset="android" />
          <Badge variant={getStatusVariant(product.status)}>
            {t(`common.${product.status}`)}
          </Badge>
        </div>

        <Typography variant="h1" className="app-hero__title">
          {product.name}
        </Typography>

        <Typography variant="body" muted className="app-hero__tagline">
          {product.tagline[language] || product.tagline.en}
        </Typography>

        <div className="app-hero__actions">
          {hasDownload ? (
            <CustomLink href={product.downloadUrl} external={false}>
              <Button variant="primary" size="lg">
                <Download size={20} aria-hidden="true" />
                {t('download.button', 'Download APK')} ({product.apkSize || 'APK'})
              </Button>
            </CustomLink>
          ) : (
            <div className="download-unavailable-notice" role="status">
              <AlertCircle size={18} aria-hidden="true" />
              <span>{t('download.unavailable', 'Download currently unavailable.')}</span>
            </div>
          )}

          {product.documentationUrl && (
            <CustomLink href={product.documentationUrl}>
              <Button variant="outline" size="lg">
                <BookOpen size={20} aria-hidden="true" />
                {t('common.openDocs')}
              </Button>
            </CustomLink>
          )}
        </div>
      </div>
    </div>
  );
};
