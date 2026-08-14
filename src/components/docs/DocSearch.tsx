import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Input, Card, Typography, Badge, EmptyState } from '../ui';
import type { DocArticle } from '../../types/docs';
import { useTranslation } from '../../hooks/useTranslation';
import './DocSearch.css';

interface DocSearchProps {
  articles: DocArticle[];
}

export const DocSearch: React.FC<DocSearchProps> = ({ articles }) => {
  const { t, language } = useTranslation();
  const [query, setQuery] = useState('');

  const cleanQuery = query.trim().toLowerCase();

  const filteredArticles = cleanQuery
    ? articles.filter((article) => {
        const titleEn = article.title.en.toLowerCase();
        const titleBn = article.title.bn.toLowerCase();
        const descEn = (article.description?.en || '').toLowerCase();
        const descBn = (article.description?.bn || '').toLowerCase();
        const cat = article.category.toLowerCase();

        return (
          titleEn.includes(cleanQuery) ||
          titleBn.includes(cleanQuery) ||
          descEn.includes(cleanQuery) ||
          descBn.includes(cleanQuery) ||
          cat.includes(cleanQuery)
        );
      })
    : [];

  return (
    <div className="doc-search-wrap">
      <div className="doc-search-input-wrap">
        <Input
          placeholder={t('docs.searchPlaceholder', 'Search documentation, installation, FAQs...')}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search documentation"
          className="doc-search-input"
        />
        {query && (
          <button
            type="button"
            className="doc-search-clear-btn"
            onClick={() => setQuery('')}
            aria-label="Clear search query"
          >
            <X size={18} aria-hidden="true" />
          </button>
        )}
      </div>

      {cleanQuery !== '' && (
        <div className="doc-search-results">
          {filteredArticles.length > 0 ? (
            <div className="doc-search-results-list">
              <Typography variant="caption" muted className="search-result-count">
                Found {filteredArticles.length} matching guide{filteredArticles.length > 1 ? 's' : ''}:
              </Typography>
              {filteredArticles.map((art) => {
                const targetUrl = art.category === 'apps'
                  ? `/docs/apps/${art.slug}`
                  : art.slug === 'getting-started'
                  ? '/docs'
                  : `/docs/${art.slug}`;

                return (
                  <Link key={art.id} to={targetUrl} className="search-result-item-link" onClick={() => setQuery('')}>
                    <Card variant="interactive" padding="md" className="search-result-card">
                      <div className="search-result-header">
                        <Typography variant="h3">{art.title[language] || art.title.en}</Typography>
                        <Badge variant="neutral">{art.category}</Badge>
                      </div>
                      <Typography variant="body" muted className="search-result-desc">
                        {art.description[language] || art.description.en}
                      </Typography>
                    </Card>
                  </Link>
                );
              })}
            </div>
          ) : (
            <EmptyState
              title={t('search.noResultsTitle', 'No results found. Try another search.')}
              description={t('search.noResultsDesc', 'We could not find any guide matching your search term.')}
            />
          )}
        </div>
      )}
    </div>
  );
};
