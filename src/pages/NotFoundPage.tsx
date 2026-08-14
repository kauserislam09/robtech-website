import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import { Typography, Button } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { ROUTES } from '../utils/routes';

export const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer size="md">
      <SEO
        title="404 — Page Not Found"
        description="The requested page does not exist."
      />

      <div style={{ textAlign: 'center', padding: 'var(--space-9) 0' }}>
        <Typography variant="display" style={{ color: 'var(--color-primary)' }}>
          404
        </Typography>
        <Typography variant="h2" style={{ marginBottom: 'var(--space-3)' }}>
          Page Not Found
        </Typography>
        <Typography variant="body" muted style={{ marginBottom: 'var(--space-6)', maxWidth: '480px', margin: '0 auto var(--space-6) auto' }}>
          The page you are looking for does not exist or may have been moved.
        </Typography>

        <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={ROUTES.HOME}>
            <Button variant="primary">{t('common.goHome')}</Button>
          </Link>
          <Link to={ROUTES.APPS}>
            <Button variant="secondary">{t('common.exploreApps')}</Button>
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};
