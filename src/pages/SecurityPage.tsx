import React from 'react';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card, Alert } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { ShieldCheck, Lock, AlertTriangle } from 'lucide-react';

export const SecurityPage: React.FC = () => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: 'Security Policy' },
  ];

  return (
    <PageContainer size="lg">
      <SEO
        title="Security Policy & Vulnerability Disclosure — RobTech"
        description="Learn about RobTech's privacy-first security principles, release verification, and responsible vulnerability disclosure policy."
      />

      <PageHeader
        title="Security Policy & Responsible Disclosure"
        description="RobTech is committed to privacy-by-default, static asset verification, and prompt vulnerability response."
        breadcrumbs={breadcrumbs}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
        <Alert variant="info" title="Security Model Assurance">
          RobTech web applications operate static-first with zero tracking scripts, zero advertising pixels, zero non-essential cookies, and strict Content Security Policies (CSP).
        </Alert>

        {/* Security Principles */}
        <section>
          <Typography variant="h2" style={{ marginBottom: 'var(--space-4)' }}>
            Core Security Principles
          </Typography>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
            <Card variant="standard" padding="md">
              <ShieldCheck size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
              <Typography variant="h3">Static & CDN Delivery</Typography>
              <Typography variant="body" muted style={{ fontSize: 'var(--font-size-body-sm)' }}>
                Our public platform serves pre-rendered static assets directly over HTTPS, eliminating backend server injection risks and rate-limit exploits.
              </Typography>
            </Card>

            <Card variant="standard" padding="md">
              <Lock size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
              <Typography variant="h3">Zero Personal Tracking</Typography>
              <Typography variant="body" muted style={{ fontSize: 'var(--font-size-body-sm)' }}>
                No advertising pixels, session recording tools, or third-party fingerprinting scripts run on RobTech web pages.
              </Typography>
            </Card>

            <Card variant="standard" padding="md">
              <AlertTriangle size={24} style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }} aria-hidden="true" />
              <Typography variant="h3">HTTPS & Verified Assets</Typography>
              <Typography variant="body" muted style={{ fontSize: 'var(--font-size-body-sm)' }}>
                Application download links are restricted strictly to secure HTTPS protocol endpoints from verified release sources.
              </Typography>
            </Card>
          </div>
        </section>

        {/* Responsible Disclosure */}
        <Card variant="standard" padding="lg">
          <Typography variant="h3" style={{ marginBottom: 'var(--space-3)' }}>
            Responsible Vulnerability Disclosure
          </Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7, marginBottom: 'var(--space-4)' }}>
            If you believe you have discovered a potential security vulnerability in any RobTech web application or release manifest, we encourage you to report it responsibly. Please do not perform destructive actions, access non-public data, or disrupt service availability.
          </Typography>

          <Typography variant="h4" style={{ marginBottom: 'var(--space-2)' }}>
            How to Report
          </Typography>
          <Typography variant="body" muted style={{ marginBottom: 'var(--space-4)' }}>
            To report a potential security issue, please contact our team via the official Contact page. Provide a description of the issue, reproduction steps, and potential impact.
          </Typography>
        </Card>
      </div>
    </PageContainer>
  );
};
