import React from 'react';
import type { DocSection } from '../../types/docs';
import { useTranslation } from '../../hooks/useTranslation';
import './DocTableOfContents.css';

interface DocTableOfContentsProps {
  sections: DocSection[];
}

export const DocTableOfContents: React.FC<DocTableOfContentsProps> = ({ sections }) => {
  const { language } = useTranslation();

  if (!sections || sections.length === 0) return null;

  return (
    <nav className="doc-toc" aria-label="Table of Contents">
      <span className="doc-toc__title">On this page</span>
      <ul className="doc-toc__list">
        {sections.map((sec) => (
          <li key={sec.id}>
            <a href={`#${sec.id}`} className="doc-toc__link">
              {sec.title[language] || sec.title.en}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
