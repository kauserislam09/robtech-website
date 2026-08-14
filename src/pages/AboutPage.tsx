import React from 'react';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card, Divider } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { Sparkles, Zap, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.about') },
  ];

  return (
    <PageContainer size="lg">
      <SEO
        title={t('aboutPage.title')}
        description={t('aboutPage.description')}
      />

      <PageHeader
        title={t('aboutPage.title')}
        description={t('aboutPage.description')}
        breadcrumbs={breadcrumbs}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <section>
          <Typography variant="h2" style={{ marginBottom: 'var(--space-3)' }}>
            RobTech Limited
          </Typography>
          <Typography variant="body" muted style={{ fontSize: 'var(--font-size-body-lg)', lineHeight: 1.7 }}>
            RobTech Limited is a technology-focused brand developing practical software products designed around simplicity, usefulness, reliability, and accessibility.
          </Typography>
        </section>

        <Divider />

        <section>
          <Typography variant="h2" style={{ marginBottom: 'var(--space-3)' }}>
            Our Approach
          </Typography>
          <Typography variant="body" muted>
            We believe technology should work quietly and efficiently for users. Rather than overwhelming people with complex options or intrusive notifications, RobTech builds software that solves real problems without unnecessary complexity.
          </Typography>
        </section>

        <Divider />

        <section>
          <Typography variant="h2" style={{ marginBottom: 'var(--space-4)' }}>
            Our Principles
          </Typography>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
            <Card variant="standard" padding="md">
              <Sparkles size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
              <Typography variant="h3">{t('principles.simpleTitle')}</Typography>
              <Typography variant="body" muted>{t('principles.simpleDesc')}</Typography>
            </Card>

            <Card variant="standard" padding="md">
              <Zap size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
              <Typography variant="h3">{t('principles.usefulTitle')}</Typography>
              <Typography variant="body" muted>{t('principles.usefulDesc')}</Typography>
            </Card>

            <Card variant="standard" padding="md">
              <CheckCircle2 size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
              <Typography variant="h3">{t('principles.reliableTitle')}</Typography>
              <Typography variant="body" muted>{t('principles.reliableDesc')}</Typography>
            </Card>

            <Card variant="standard" padding="md">
              <ShieldCheck size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
              <Typography variant="h3">{t('principles.accessibleTitle')}</Typography>
              <Typography variant="body" muted>{t('principles.accessibleDesc')}</Typography>
            </Card>

            <Card variant="standard" padding="md">
              <Lock size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
              <Typography variant="h3">{t('principles.privacyTitle')}</Typography>
              <Typography variant="body" muted>{t('principles.privacyDesc')}</Typography>
            </Card>
          </div>
        </section>

        <Divider />

        <section>
          <Typography variant="h2" style={{ marginBottom: 'var(--space-3)' }}>
            Our Vision
          </Typography>
          <Typography variant="body" muted>
            Build a growing ecosystem of practical technology products that people can understand, trust, and use comfortably every day.
          </Typography>
        </section>
      </div>
    </PageContainer>
  );
};
