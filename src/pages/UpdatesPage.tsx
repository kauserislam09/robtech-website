import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card, Badge, Button, EmptyState } from '../components/ui';
import type { BadgeVariant } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { RELEASES } from '../data/releases';
import { PRODUCTS } from '../data/products';
import { isValidHttpsUrl } from '../utils/updateSystem';
import { Download, ExternalLink, ArrowRight } from 'lucide-react';
import './UpdatesPage.css';

export const UpdatesPage: React.FC = () => {
  const { t, language } = useTranslation();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.updates') },
  ];

  const getAppName = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    return found ? found.name : productId;
  };

  const getStatusBadgeVariant = (status: string): BadgeVariant => {
    switch (status) {
      case 'stable': return 'success';
      case 'active': return 'success';
      case 'beta': return 'warning';
      case 'development': return 'info';
      default: return 'neutral';
    }
  };

  const filteredReleases = selectedFilter === 'all'
    ? RELEASES
    : RELEASES.filter((r) => r.status === selectedFilter);

  return (
    <PageContainer size="lg">
      <SEO
        title={t('updatesPage.title')}
        description={t('updatesPage.description')}
      />

      <PageHeader
        title={t('updatesPage.title')}
        description={t('updatesPage.description')}
        breadcrumbs={breadcrumbs}
      />

      {/* Filter Bar */}
      <div className="updates-filter-bar" style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
        {['all', 'stable', 'beta'].map((filterKey) => (
          <Button
            key={filterKey}
            variant={selectedFilter === filterKey ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedFilter(filterKey)}
          >
            {filterKey === 'all' ? t('common.all') : filterKey.toUpperCase()}
          </Button>
        ))}
      </div>

      {filteredReleases.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          {filteredReleases.map((rel) => {
            const hasValidApkUrl = isValidHttpsUrl(rel.apkUrl);
            const hasValidGitHubUrl = isValidHttpsUrl(rel.releasePageUrl);

            return (
              <Card key={rel.id} variant="standard" padding="lg">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-3)' }}>
                  <div>
                    <Typography variant="h3">
                      <Link to={`/updates/${rel.productId}/${rel.versionName}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {getAppName(rel.productId)} v{rel.versionName}
                      </Link>
                    </Typography>
                    <Typography variant="caption" muted>
                      {t('common.version')} <strong>{rel.versionName}</strong> (Build {rel.versionCode}) • {rel.releaseDate}
                    </Typography>
                  </div>
                  <Badge variant={getStatusBadgeVariant(rel.status)}>
                    {t(`common.${rel.status}`)}
                  </Badge>
                </div>

                <Typography variant="h4" style={{ marginBottom: 'var(--space-2)' }}>
                  {t('common.releaseNotes')}
                </Typography>

                <ul style={{ paddingLeft: 'var(--space-5)', color: 'var(--color-text-muted)', fontSize: 'var(--font-size-body-sm)', marginBottom: 'var(--space-4)' }}>
                  {(rel.changelog[language] || rel.changelog.en).map((item, idx) => (
                    <li key={idx} style={{ marginBottom: 'var(--space-1)' }}>{item}</li>
                  ))}
                </ul>

                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap', alignItems: 'center', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border-subtle)' }}>
                  {hasValidApkUrl && (
                    <a href={rel.apkUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <Button variant="primary" size="sm">
                        <Download size={16} style={{ marginRight: 4 }} aria-hidden="true" />
                        {t('download.button', 'Download APK')} ({rel.fileSize || 'APK'})
                      </Button>
                    </a>
                  )}

                  {hasValidGitHubUrl && (
                    <a href={rel.releasePageUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <Button variant="outline" size="sm">
                        <ExternalLink size={16} style={{ marginRight: 4 }} aria-hidden="true" />
                        View GitHub Release
                      </Button>
                    </a>
                  )}

                  <Link to={`/updates/${rel.productId}/${rel.versionName}`} style={{ marginLeft: 'auto' }}>
                    <Button variant="ghost" size="sm">
                      Details
                      <ArrowRight size={14} style={{ marginLeft: 4 }} aria-hidden="true" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <EmptyState
          title={t('empty.title')}
          description={t('empty.description')}
        />
      )}
    </PageContainer>
  );
};
