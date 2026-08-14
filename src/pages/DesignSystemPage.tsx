import React, { useState } from 'react';
import { PageContainer } from '../layouts/PageContainer';
import {
  PageHeader,
  Typography,
  Button,
  Card,
  Badge,
  Alert,
  Divider,
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  Modal,
  Spinner,
  Skeleton,
  EmptyState,
  ErrorState,
  Tooltip,
  Link as AccessibleLink,
} from '../components/ui';
import { useTranslation } from '../hooks/useTranslation';
import { useTheme } from '../hooks/useTheme';
import './DesignSystemPage.css';

export const DesignSystemPage: React.FC = () => {
  const { t, language } = useTranslation();
  const { theme, resolvedTheme } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formInput, setFormInput] = useState('');
  const [formError, setFormError] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);
  const [radioChoice, setRadioChoice] = useState('android');

  const breadcrumbs = [
    { label: 'System', href: '/' },
    { label: 'Design System & Style Guide' },
  ];

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formInput) {
      setFormError(language === 'bn' ? 'অনুগ্রহ করে এই ঘরটি পূরণ করুন।' : 'Please fill out this field.');
    } else {
      setFormError('');
      setBtnLoading(true);
      setTimeout(() => setBtnLoading(false), 1500);
    }
  };

  return (
    <PageContainer size="lg">
      <PageHeader
        title="RobTech Design System & Component Library"
        description="Comprehensive reference for tokens, typography, colors, senior-citizen accessibility, and interactive UI components."
        breadcrumbs={breadcrumbs}
        actions={
          <Badge variant="primary" preset="stable">
            WCAG 2.2 AA Verified
          </Badge>
        }
      />

      {/* Senior Citizen UX Audit Card */}
      <Alert variant="success" title="Senior Citizen UX & Accessibility Audit" className="ds-audit-banner">
        All components feature 44px+ minimum touch targets, generous 1.65 line heights for English & Bangla text, high-contrast WCAG 2.2 AA color ratios, and 3px visible focus rings.
      </Alert>

      {/* 1. Color System Tokens */}
      <section className="ds-section">
        <Typography variant="h2" className="ds-section__title">
          1. Color System & Theme Tokens
        </Typography>
        <Typography variant="body" muted>
          Active Mode: <strong>{theme}</strong> (Resolved OS Theme: <strong>{resolvedTheme}</strong>)
        </Typography>

        <div className="color-swatch-grid">
          <div className="color-swatch primary-swatch">
            <span>Primary</span>
            <code>--color-primary</code>
          </div>
          <div className="color-swatch surface-swatch">
            <span>Surface</span>
            <code>--color-surface</code>
          </div>
          <div className="color-swatch secondary-swatch">
            <span>Surface Secondary</span>
            <code>--color-surface-secondary</code>
          </div>
          <div className="color-swatch text-swatch">
            <span>Text Primary</span>
            <code>--color-text-primary</code>
          </div>
          <div className="color-swatch success-swatch">
            <span>Success</span>
            <code>--color-success</code>
          </div>
          <div className="color-swatch warning-swatch">
            <span>Warning</span>
            <code>--color-warning</code>
          </div>
          <div className="color-swatch error-swatch">
            <span>Error</span>
            <code>--color-error</code>
          </div>
        </div>
      </section>

      <Divider />

      {/* 2. Typography & Bangla Test */}
      <section className="ds-section">
        <Typography variant="h2" className="ds-section__title">
          2. Typography Scale (English & Bangla Verification)
        </Typography>

        <div className="typography-specimen-stack">
          <div className="specimen">
            <span className="specimen-tag">Display</span>
            <Typography variant="display">Technology Made Simple.</Typography>
            <Typography variant="display">প্রযুক্তিকে সহজ করে তুলি।</Typography>
          </div>

          <div className="specimen">
            <span className="specimen-tag">Heading 1 (H1)</span>
            <Typography variant="h1">RobTech Official Apps</Typography>
            <Typography variant="h1">রবটেক অফিসিয়াল অ্যাপসমূহ</Typography>
          </div>

          <div className="specimen">
            <span className="specimen-tag">Heading 2 (H2)</span>
            <Typography variant="h2">Smart Inventory Management</Typography>
            <Typography variant="h2">স্মার্ট ইনভেন্টরি সিস্টেম</Typography>
          </div>

          <div className="specimen">
            <span className="specimen-tag">Body Large (Senior Friendly 18px)</span>
            <Typography variant="body" style={{ fontSize: 'var(--font-size-body-lg)' }}>
              Designed with high contrast and large text for comfortable reading by senior citizens and everyday users.
            </Typography>
          </div>
        </div>
      </section>

      <Divider />

      {/* 3. Button & Link System */}
      <section className="ds-section">
        <Typography variant="h2" className="ds-section__title">
          3. Core Button & Link System (Min 44px Touch Height)
        </Typography>

        <div className="btn-specimen-row">
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary Action</Button>
          <Button variant="outline">Outline Action</Button>
          <Button variant="ghost">Ghost Action</Button>
          <Button variant="destructive">Destructive Action</Button>
          <Button variant="primary" loading={true}>Loading State</Button>
          <Button variant="primary" disabled={true}>Disabled State</Button>
        </div>

        <div style={{ marginTop: 'var(--space-4)', display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
          <AccessibleLink href="https://robtech.org">External RobTech Documentation</AccessibleLink>
          <AccessibleLink to="/">Internal Home Link</AccessibleLink>
        </div>
      </section>

      <Divider />

      {/* 4. Card & Badge System */}
      <section className="ds-section">
        <Typography variant="h2" className="ds-section__title">
          4. Card & Badge System
        </Typography>

        <div className="badge-specimen-row">
          <Badge preset="stable" />
          <Badge preset="beta" />
          <Badge preset="development" />
          <Badge preset="archived" />
          <Badge preset="android" />
          <Badge preset="web" />
          <Badge preset="new" />
          <Badge preset="updated" />
        </div>

        <div className="card-specimen-grid">
          <Card variant="standard" padding="md">
            <Typography variant="h3">Standard Card</Typography>
            <Typography variant="body" muted>
              Clean default card with standard border and subtle shadow.
            </Typography>
          </Card>

          <Card variant="featured" padding="md">
            <Typography variant="h3">Featured App Card</Typography>
            <Typography variant="body" muted>
              Highlighted card with primary border accent for featured products.
            </Typography>
            <Badge preset="stable" style={{ marginTop: 'var(--space-2)' }} />
          </Card>

          <Card variant="interactive" padding="md" onClick={() => alert('Card clicked!')}>
            <Typography variant="h3">Interactive Card</Typography>
            <Typography variant="body" muted>
              Hover & click state for app cards and navigation choices.
            </Typography>
          </Card>
        </div>
      </section>

      <Divider />

      {/* 5. Alerts & Semantics */}
      <section className="ds-section">
        <Typography variant="h2" className="ds-section__title">
          5. Alert System
        </Typography>

        <Alert variant="info" title="System Notice">
          RobTech update server is running on Cloudflare static infrastructure.
        </Alert>
        <Alert variant="success" title="Success">
          Application initialized successfully with zero console warnings.
        </Alert>
        <Alert variant="warning" title="Warning">
          Beta features should be tested before deploying to stable builds.
        </Alert>
        <Alert variant="error" title="Error">
          Failed to fetch manifest: Connection timeout.
        </Alert>
      </section>

      <Divider />

      {/* 6. Form System */}
      <section className="ds-section">
        <Typography variant="h2" className="ds-section__title">
          6. Accessible Form Controls
        </Typography>

        <form onSubmit={handleTestSubmit} className="form-specimen-box">
          <Input
            label="Full Name (পূর্ণ নাম)"
            placeholder="Enter your name..."
            required={true}
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)}
            error={formError}
            helperText="Labels and error messages support both English and Bangla."
          />

          <Select
            label="App Category (অ্যাপের ধরন)"
            options={[
              { value: 'productivity', label: 'Productivity' },
              { value: 'utilities', label: 'Utilities' },
              { value: 'media', label: 'Media & Audio' },
            ]}
          />

          <Textarea
            label="Feedback or Inquiry (মতামত বা প্রশ্ন)"
            placeholder="Type your message here..."
          />

          <div style={{ margin: 'var(--space-3) 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <Radio
              name="platform"
              value="android"
              checked={radioChoice === 'android'}
              onChange={() => setRadioChoice('android')}
              label="Android Platform"
            />
            <Radio
              name="platform"
              value="web"
              checked={radioChoice === 'web'}
              onChange={() => setRadioChoice('web')}
              label="Web Platform"
            />
          </div>

          <Checkbox
            label="I accept the Terms of Service and Privacy Policy."
          />

          <div style={{ marginTop: 'var(--space-4)' }}>
            <Button type="submit" variant="primary" loading={btnLoading}>
              Submit Form Test
            </Button>
          </div>
        </form>
      </section>

      <Divider />

      {/* 7. Dialog, Loading, Empty & Error States */}
      <section className="ds-section">
        <Typography variant="h2" className="ds-section__title">
          7. Modals, Loading, Empty & Error States
        </Typography>

        <div className="interactive-test-row">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
            Open Test Accessible Modal
          </Button>

          <Tooltip content="Helper context tooltip for auxiliary info">
            <Button variant="outline">Hover or Focus for Tooltip</Button>
          </Tooltip>
        </div>

        {/* Modal Specimen */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="RobTech Accessible Dialog"
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <Typography variant="body">
            This dialog handles focus trap, `Escape` key dismiss, background scroll lock, and screen reader ARIA roles (`role="dialog"`).
          </Typography>
        </Modal>

        {/* Skeleton & Spinner specimen */}
        <div style={{ marginTop: 'var(--space-6)' }}>
          <Typography variant="h3" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <Spinner size="sm" />
            Loading Skeletons & Spinners
          </Typography>
          <div className="skeleton-box">
            <Skeleton width="60%" height="24px" />
            <Skeleton width="100%" height="16px" />
            <Skeleton width="80%" height="16px" />
          </div>
        </div>

        {/* Empty & Error State specimen */}
        <div className="state-specimen-grid">
          <EmptyState
            title={t('empty.title', 'Nothing here yet.')}
            description="No release updates found in this category."
            onAction={() => alert('Go back clicked')}
          />
          <ErrorState
            title={t('error.title', 'Something went wrong.')}
            message="Unable to connect to updates endpoint."
            onRetry={() => alert('Retrying...')}
          />
        </div>
      </section>
    </PageContainer>
  );
};
