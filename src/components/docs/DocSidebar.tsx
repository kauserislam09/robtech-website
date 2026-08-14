import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { DOC_ARTICLES } from '../../data/docs';
import { BookOpen, Download, RefreshCw, AlertTriangle, HelpCircle, Smartphone, Code, Menu, X } from 'lucide-react';
import './DocSidebar.css';

interface DocSidebarProps {
  activeSlug?: string;
}

export const DocSidebar: React.FC<DocSidebarProps> = ({ activeSlug }) => {
  const { language } = useTranslation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const coreGuides = DOC_ARTICLES.filter((a) => a.category !== 'apps' && a.category !== 'developer');
  const appGuides = DOC_ARTICLES.filter((a) => a.category === 'apps');
  const devGuide = DOC_ARTICLES.find((a) => a.category === 'developer');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'getting-started': return <BookOpen size={18} aria-hidden="true" />;
      case 'installation': return <Download size={18} aria-hidden="true" />;
      case 'updates': return <RefreshCw size={18} aria-hidden="true" />;
      case 'troubleshooting': return <AlertTriangle size={18} aria-hidden="true" />;
      case 'faq': return <HelpCircle size={18} aria-hidden="true" />;
      default: return <BookOpen size={18} aria-hidden="true" />;
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="doc-sidebar-mobile-toggle">
        <button
          type="button"
          className="doc-mobile-menu-btn"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="doc-sidebar-nav"
        >
          {isMobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span>{isMobileOpen ? 'Close Menu' : 'Documentation Menu'}</span>
        </button>
      </div>

      {/* Nav Container */}
      <aside
        id="doc-sidebar-nav"
        className={`doc-sidebar ${isMobileOpen ? 'doc-sidebar--mobile-open' : ''}`}
      >
        <div className="doc-sidebar__group">
          <span className="doc-sidebar__group-title">Core Guides</span>
          <ul className="doc-sidebar__list">
            {coreGuides.map((guide) => (
              <li key={guide.id}>
                <NavLink
                  to={guide.slug === 'getting-started' ? '/docs' : `/docs/${guide.slug}`}
                  className={({ isActive }) =>
                    `doc-sidebar__link ${isActive || activeSlug === guide.slug ? 'is-active' : ''}`
                  }
                  onClick={() => setIsMobileOpen(false)}
                >
                  {getCategoryIcon(guide.category)}
                  <span>{guide.title[language] || guide.title.en}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="doc-sidebar__group">
          <span className="doc-sidebar__group-title">App Manuals</span>
          <ul className="doc-sidebar__list">
            {appGuides.map((guide) => (
              <li key={guide.id}>
                <NavLink
                  to={`/docs/apps/${guide.slug}`}
                  className={({ isActive }) =>
                    `doc-sidebar__link ${isActive || activeSlug === guide.slug ? 'is-active' : ''}`
                  }
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Smartphone size={18} aria-hidden="true" />
                  <span>{guide.title[language] || guide.title.en}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {devGuide && (
          <div className="doc-sidebar__group">
            <span className="doc-sidebar__group-title">Maintainers</span>
            <ul className="doc-sidebar__list">
              <li>
                <NavLink
                  to={`/docs/${devGuide.slug}`}
                  className={({ isActive }) =>
                    `doc-sidebar__link ${isActive || activeSlug === devGuide.slug ? 'is-active' : ''}`
                  }
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Code size={18} aria-hidden="true" />
                  <span>{devGuide.title[language] || devGuide.title.en}</span>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </aside>
    </>
  );
};
