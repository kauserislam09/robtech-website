import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer } from '../layouts/PageContainer';
import { Breadcrumb, PageHeader, Typography, Alert } from '../components/ui';
import { SEO } from '../components/common/SEO';
import { useTranslation } from '../hooks/useTranslation';
import { DOC_ARTICLES } from '../data/docs';
import { NotFoundPage } from './NotFoundPage';
import { DocSidebar } from '../components/docs/DocSidebar';
import { DocTableOfContents } from '../components/docs/DocTableOfContents';
import { DocCallout } from '../components/docs/DocCallout';
import { DocFeedback } from '../components/docs/DocFeedback';
import './DocArticlePage.css';

interface DocArticlePageProps {
  slugOverride?: string;
}

export const DocArticlePage: React.FC<DocArticlePageProps> = ({
  slugOverride,
}) => {
  const params = useParams<{ slug?: string; appSlug?: string }>();
  const { t, language } = useTranslation();

  const targetSlug = slugOverride || params.slug || params.appSlug || 'getting-started';

  const article = DOC_ARTICLES.find(
    (a) => a.slug === targetSlug || a.id === targetSlug
  );

  if (!article) {
    return <NotFoundPage />;
  }

  const breadcrumbs = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.docs'), href: '/docs' },
    { label: article.title[language] || article.title.en },
  ];

  const hasBanglaTranslation = !!article.title.bn && !!article.sections[0]?.title.bn;

  return (
    <PageContainer size="lg">
      <SEO
        title={`${article.title[language] || article.title.en} — RobTech Documentation`}
        description={article.description ? (article.description[language] || article.description.en) : 'RobTech Documentation'}
      />

      <Breadcrumb items={breadcrumbs} />

      <div className="doc-layout-grid">
        {/* Left Sidebar Nav */}
        <DocSidebar activeSlug={article.slug} />

        {/* Main Article Body */}
        <main className="doc-article-main">
          <PageHeader
            title={article.title[language] || article.title.en}
            description={article.description ? (article.description[language] || article.description.en) : undefined}
          />

          {/* Graceful Language Fallback Notice */}
          {language === 'bn' && !hasBanglaTranslation && (
            <Alert variant="warning" title="Language Notice">
              {t('docs.fallbackNotice', 'This article is currently available in English.')}
            </Alert>
          )}

          {/* Table of Contents for Multi-Section Guides */}
          {article.sections && article.sections.length > 1 && (
            <DocTableOfContents sections={article.sections} />
          )}

          {/* Article Sections */}
          <div className="doc-sections-stack">
            {article.sections.map((sec) => (
              <section key={sec.id} id={sec.id} className="doc-article-section">
                <Typography variant="h2" className="doc-section-title">
                  {sec.title[language] || sec.title.en}
                </Typography>

                {sec.type === 'callout' ? (
                  <DocCallout type={sec.calloutType}>
                    {sec.content ? (sec.content[language] || sec.content.en) : ''}
                  </DocCallout>
                ) : sec.type === 'steps' && sec.items ? (
                  <ol className="doc-steps-list">
                    {sec.items.map((item, idx) => (
                      <li key={idx} className="doc-step-item">
                        <span className="step-num">{idx + 1}</span>
                        <div className="step-text">{item[language] || item.en}</div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <Typography variant="body" muted className="doc-section-content">
                    {sec.content ? (sec.content[language] || sec.content.en) : ''}
                  </Typography>
                )}
              </section>
            ))}
          </div>

          {/* Was this helpful? feedback bar */}
          <DocFeedback />
        </main>
      </div>
    </PageContainer>
  );
};
