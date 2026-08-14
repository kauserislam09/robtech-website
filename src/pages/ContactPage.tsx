import React, { useState } from 'react';
import { PageContainer } from '../layouts/PageContainer';
import {
  PageHeader,
  Card,
  Input,
  Textarea,
  Button,
  Alert,
} from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { Mail, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t, language } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.contact') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!name.trim()) {
      setNameError(language === 'bn' ? 'অনুগ্রহ করে আপনার নাম প্রদান করুন।' : 'Please provide your name.');
      valid = false;
    } else {
      setNameError('');
    }

    if (!email.trim() || !email.includes('@')) {
      setEmailError(language === 'bn' ? 'অনুগ্রহ করে একটি সঠিক ইমেইল প্রদান করুন।' : 'Please provide a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!message.trim()) {
      setMessageError(language === 'bn' ? 'অনুগ্রহ করে আপনার বার্তা টাইপ করুন।' : 'Please enter your message.');
      valid = false;
    } else {
      setMessageError('');
    }

    if (!valid) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 1200);
  };

  return (
    <PageContainer size="md">
      <SEO
        title={t('contactPage.title')}
        description={t('contactPage.description')}
      />

      <PageHeader
        title={t('contactPage.title')}
        description={t('contactPage.description')}
        breadcrumbs={breadcrumbs}
      />

      {isSubmitted ? (
        <Alert variant="success" title="Message Submitted">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <CheckCircle2 size={20} aria-hidden="true" />
            <span>{t('common.sentSuccess')}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            style={{ marginTop: 'var(--space-3)' }}
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </Button>
        </Alert>
      ) : (
        <Card variant="standard" padding="lg">
          <form onSubmit={handleSubmit} noValidate>
            <Input
              label="Full Name (পূর্ণ নাম)"
              placeholder="John Doe"
              required={true}
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={nameError}
            />

            <Input
              label="Email Address (ইমেইল ঠিকানা)"
              type="email"
              placeholder="name@example.com"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={emailError}
            />

            <Input
              label="Subject (বিষয়)"
              placeholder="App feedback, support, or general inquiry"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <Textarea
              label="Message (বার্তা)"
              placeholder="Write your message here..."
              required={true}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
            />

            <div style={{ marginTop: 'var(--space-4)' }}>
              <Button type="submit" variant="primary" size="lg" loading={isSubmitting} fullWidth={true}>
                <Mail size={18} style={{ marginRight: 4 }} aria-hidden="true" />
                {t('common.submit')}
              </Button>
            </div>
          </form>
        </Card>
      )}
    </PageContainer>
  );
};
