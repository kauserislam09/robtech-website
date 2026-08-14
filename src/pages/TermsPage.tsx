import React from 'react';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.terms') },
  ];

  return (
    <PageContainer size="lg">
      <SEO
        title={t('termsPage.title')}
        description={t('termsPage.description')}
      />

      <PageHeader
        title={t('termsPage.title')}
        description={t('termsPage.description')}
        breadcrumbs={breadcrumbs}
      />

      <Card variant="standard" padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <section>
          <Typography variant="h3">1. Acceptance of Terms</Typography>
          <Typography variant="body" muted>
            By accessing the RobTech Limited website or downloading our applications, you agree to comply with these Terms of Service.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">2. Use of Products & Services</Typography>
          <Typography variant="body" muted>
            RobTech software is provided for personal, household, and legitimate business productivity purposes. Users agree not to reverse engineer, tamper with, or redistribute modified application binaries without explicit permission.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">3. Application Downloads & Updates</Typography>
          <Typography variant="body" muted>
            Application APKs and update files distributed via RobTech static channels are provided as-is. Users are responsible for verifying device compatibility prior to installation.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">4. Intellectual Property</Typography>
          <Typography variant="body" muted>
            All brand assets, names, logos, source code, and design tokens associated with RobTech Limited are the exclusive property of RobTech Limited.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">5. Service Availability</Typography>
          <Typography variant="body" muted>
            While we strive to ensure high availability of our web platform and static update manifests, RobTech does not guarantee uninterrupted website access.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">6. Limitation of Liability</Typography>
          <Typography variant="body" muted>
            RobTech Limited is not liable for indirect or consequential damages arising from improper device usage, data loss on unbacked devices, or third-party network interruptions.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">7. Modifications to Terms</Typography>
          <Typography variant="body" muted>
            We reserve the right to revise these terms as our product ecosystem expands. Continued use of our website or apps constitutes acceptance of modified terms.
          </Typography>
        </section>
      </Card>
    </PageContainer>
  );
};
