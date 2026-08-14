import React from 'react';
import { Card, Typography, Badge, EmptyState } from '../ui';
import type { Release } from '../../types/release';
import { useTranslation } from '../../hooks/useTranslation';
import './ReleaseHistory.css';

interface ReleaseHistoryProps {
  releases?: Release[];
}

export const ReleaseHistory: React.FC<ReleaseHistoryProps> = ({ releases }) => {
  const { t, language } = useTranslation();

  return (
    <section className="app-section">
      <Typography variant="h2" className="app-section__title">
        {t('common.releaseNotes')}
      </Typography>

      {releases && releases.length > 0 ? (
        <div className="release-history-stack">
          {releases.map((rel) => (
            <Card key={rel.id} variant="standard" padding="md" className="release-history-card">
              <div className="release-history-header">
                <div>
                  <Typography variant="h3">
                    {t('common.version')} {rel.versionName}
                  </Typography>
                  <Typography variant="caption" muted>
                    Released on {rel.releaseDate} • Build {rel.versionCode}
                  </Typography>
                </div>
                <Badge preset="stable" />
              </div>

              <Typography variant="h4" className="changelog-heading">
                What's New
              </Typography>

              <ul className="changelog-bullet-list">
                {(rel.changelog[language] || rel.changelog.en).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title={t('releaseHistory.emptyTitle', 'Release history will appear here when releases are published.')}
          description={t('releaseHistory.emptyDesc', 'No past releases have been archived yet.')}
        />
      )}
    </section>
  );
};
