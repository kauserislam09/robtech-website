import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './BrandLogo.css';

interface BrandLogoProps {
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'auto' | 'compact';
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  showTagline = true,
  size = 'md',
  variant = 'auto',
  className = '',
}) => {
  const { t } = useTranslation();

  return (
    <div className={`brand-logo brand-logo--${size} brand-logo--${variant} ${className}`}>
      <div className="brand-logo__mark" aria-hidden="true">
        <span className="brand-logo__mark-letter">R</span>
        <span className="brand-logo__mark-dot"></span>
      </div>
      {variant !== 'compact' && (
        <div className="brand-logo__text">
          <span className="brand-logo__name">
            Rob<span className="brand-logo__accent">Tech</span>
          </span>
          {showTagline && (
            <span className="brand-logo__tagline">{t('brand.tagline')}</span>
          )}
        </div>
      )}
    </div>
  );
};
