import React from 'react';
import { PageContainer } from '../layouts/PageContainer';
import { PageHeader, Typography, Card } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';

export const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.privacy') },
  ];

  return (
    <PageContainer size="lg">
      <SEO
        title={t('privacyPage.title')}
        description={t('privacyPage.description')}
      />

      <PageHeader
        title={t('privacyPage.title')}
        description={t('privacyPage.description')}
        breadcrumbs={breadcrumbs}
      />

      <Card variant="standard" padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <section>
          <Typography variant="h3">1. Privacy Principles & Commitment</Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7 }}>
            RobTech Limited is committed to a privacy-first approach. We operate our public web platform without advertising trackers, session recording tools, tracking pixels, or third-party behavioral profiling scripts.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">2. Infrastructure Data Processing</Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7 }}>
            When you visit our website, normal technical HTTP request logs (such as IP address, user-agent string, requested path, and timestamp) are processed by hosting and Content Delivery Network (CDN) infrastructure providers (such as Cloudflare Pages) solely for network security, DDoS protection, and static file delivery. RobTech does not use this technical data for user tracking or profiling.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">3. Cookies & Browser Storage</Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7 }}>
            We do NOT use non-essential tracking cookies or advertising cookies. Our application uses your browser's local storage (localStorage) exclusively to remember your preferred theme (Light/Dark/System) and language selection (English/Bangla).
          </Typography>
        </section>

        <section>
          <Typography variant="h3">4. Contact Information Handling</Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7 }}>
            When you submit a message through our Contact page, the information provided (such as your name, email address, and message) is used strictly to respond to your inquiry and support request. Submitted form data is not stored in your browser's local storage or URL parameters.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">5. APK Downloads & External Release Hosting</Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7 }}>
            Official APK download links and release tags direct users to external release assets hosted on GitHub Releases (github.com). When you download an APK or navigate to an external release page, the hosting platform processes standard network requests in accordance with its own privacy policy.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">6. Third-Party Services & Links</Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7 }}>
            Our website may provide links to official code repositories or documentation resources. RobTech does not control external websites and encourages users to review third-party privacy notices.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">7. Policy Revisions</Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7 }}>
            We may update this Privacy Policy periodically as our software ecosystem evolves. Revisions will be published directly to this page.
          </Typography>
        </section>

        <section>
          <Typography variant="h3">8. Contact Us</Typography>
          <Typography variant="body" muted style={{ lineHeight: 1.7 }}>
            If you have questions regarding this policy or data privacy, please reach out via our official Contact page or Security page.
          </Typography>
        </section>
      </Card>
    </PageContainer>
  );
};
