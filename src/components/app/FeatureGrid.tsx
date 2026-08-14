import React from 'react';
import { Card, Typography } from '../ui';
import type { Feature } from '../../types/product';
import { useTranslation } from '../../hooks/useTranslation';
import { CheckCircle2 } from 'lucide-react';
import './FeatureGrid.css';

interface FeatureGridProps {
  features?: Feature[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  const { language } = useTranslation();

  if (!features || features.length === 0) return null;

  return (
    <section className="app-section">
      <Typography variant="h2" className="app-section__title">
        Key Features
      </Typography>

      <div className="feature-grid">
        {features.map((feat) => (
          <Card key={feat.id} variant="standard" padding="md" className="feature-card">
            <div className="feature-card__icon" aria-hidden="true">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <Typography variant="h3" className="feature-card__title">
                {feat.title[language] || feat.title.en}
              </Typography>
              <Typography variant="body" muted className="feature-card__desc">
                {feat.description[language] || feat.description.en}
              </Typography>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
