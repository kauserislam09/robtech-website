import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import {
  Breadcrumb,
  PageHeader,
  Typography,
  Card,
  Badge,
  Button,
} from '../components/ui';
import type { BadgeVariant } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { RELEASES } from '../data/releases';
import { PRODUCTS } from '../data/products';
import { NotFoundPage } from './NotFoundPage';
import { ROUTES } from '../utils/routes';
import { isValidHttpsUrl } from '../utils/updateSystem';
import { Download, ExternalLink } from 'lucide-react';
import './ReleaseDetailPage.css';

export const ReleaseDetailPage: React.FC = () => {
  const { appId, version } = useParams<{ appId: string; version: string }>();
  const { t, language } = useTranslation();

  const release = RELEASES.find(
    (r) => r.productId === appId && r.versionName === version
  );
  const product = PRODUCTS.find((p) => p.id === appId);

  if (!release || !product) {
    return <NotFoundPage />;
  }

  const getStatusVariant = (status: string): BadgeVariant => {
    switch (status) {
      case 'stable': return 'success';
      case 'active': return 'success';
      case 'beta': return 'warning';
      case 'development': return 'info';
      default: return 'neutral';
    }
  };

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.updates'), href: ROUTES.UPDATES },
    { label: product.name, href: `/apps/${product.slug}` },
    { label: `v${release.versionName}` },
  ];

  const hasValidApkUrl = isValidHttpsUrl(release.apkUrl);
  const hasValidGitHubUrl = isValidHttpsUrl(release.releasePageUrl);

  return (
    <PageContainer size="lg">
      <SEO
        title={`${product.name} ${release.versionName} Release — RobTech`}
        description={`Release notes, system requirements, and APK download for ${product.name} version ${release.versionName}.`}
      />

      <Breadcrumb items={breadcrumbs} />

      <PageHeader
        title={`${product.name} v${release.versionName}`}
        description={`Released on ${release.releaseDate} • Build Code ${release.versionCode}`}
        actions={
          <Badge variant={getStatusVariant(release.status)}>
            {t(`common.${release.status}`)}
          </Badge>
        }
      />

      <div className="release-detail-grid">
        {/* Main Release Content */}
        <div className="release-detail-main">
          <Card variant="standard" padding="lg">
            <Typography variant="h2" style={{ marginBottom: 'var(--space-3)' }}>
              What's New in Version {release.versionName}
            </Typography>

            <ul className="release-changelog-list">
              {(release.changelog[language] || release.changelog.en).map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Download & Spec Sidebar */}
        <div className="release-detail-sidebar">
          <Card variant="featured" padding="lg" className="release-download-card">
            <Typography variant="h3" style={{ marginBottom: 'var(--space-2)' }}>
              Download Release
            </Typography>
            <Typography variant="caption" muted style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
              File: {release.fileName || `${product.id}-v${release.versionName}.apk`} ({release.fileSize || 'APK'})
            </Typography>

            {hasValidApkUrl ? (
              <a href={release.apkUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="primary" size="lg" fullWidth={true}>
                  <Download size={20} style={{ marginRight: 4 }} aria-hidden="true" />
                  {t('download.button', 'Download APK')}
                </Button>
              </a>
            ) : (
              <div className="download-unavailable-notice">
                {t('download.unavailable', 'Download currently unavailable.')}
              </div>
            )}

            {hasValidGitHubUrl && (
              <a href={release.releasePageUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', marginTop: 'var(--space-3)', display: 'block' }}>
                <Button variant="outline" size="sm" fullWidth={true}>
                  <ExternalLink size={16} style={{ marginRight: 4 }} aria-hidden="true" />
                  View GitHub Release
                </Button>
              </a>
            )}
          </Card>

          <Card variant="standard" padding="md" style={{ marginTop: 'var(--space-4)' }}>
            <Typography variant="h4" style={{ marginBottom: 'var(--space-3)' }}>
              Release Technical Info
            </Typography>

            <div className="spec-row">
              <span className="spec-label">Version Name</span>
              <span className="spec-value">{release.versionName}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Version Code</span>
              <span className="spec-value">{release.versionCode}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">Status</span>
              <span className="spec-value">{release.status}</span>
            </div>
            {release.minimumAndroidVersion && (
              <div className="spec-row">
                <span className="spec-label">Min Android API</span>
                <span className="spec-value">API {release.minimumAndroidVersion}</span>
              </div>
            )}
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};
