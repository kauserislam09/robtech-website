import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Sun, Moon, Monitor, Globe } from 'lucide-react';
import { BrandLogo, Button, IconButton } from '../ui';
import { useTranslation, AVAILABLE_LANGUAGES } from '../../hooks/useTranslation';
import { useTheme } from '../../hooks/useTheme';
import { ROUTES } from '../../utils/routes';
import './MobileNavDrawer.css';

export interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavDrawer: React.FC<MobileNavDrawerProps> = ({ isOpen, onClose }) => {
  const { t, language, setLanguage } = useTranslation();
  const { theme, setTheme } = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { path: ROUTES.HOME, labelKey: 'navigation.home' },
    { path: ROUTES.PRODUCTS, labelKey: 'navigation.products' },
    { path: ROUTES.APPS, labelKey: 'navigation.apps' },
    { path: ROUTES.UPDATES, labelKey: 'navigation.updates' },
    { path: ROUTES.DOCS, labelKey: 'navigation.docs' },
    { path: ROUTES.SUPPORT, labelKey: 'navigation.support' },
    { path: ROUTES.ABOUT, labelKey: 'navigation.about' },
  ];

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('body--locked');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    setTimeout(() => {
      drawerRef.current?.focus();
    }, 50);

    return () => {
      document.body.classList.remove('body--locked');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="drawer-overlay" onClick={onClose} aria-hidden="true">
      <div
        ref={drawerRef}
        className="drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <BrandLogo size="sm" showTagline={false} />
          <IconButton
            aria-label="Close navigation menu"
            variant="ghost"
            size="md"
            onClick={onClose}
          >
            <X size={22} aria-hidden="true" />
          </IconButton>
        </div>

        <nav className="drawer-nav" aria-label="Mobile main navigation">
          <ul className="drawer-nav__list">
            {navLinks.map((link) => (
              <li key={link.path} className="drawer-nav__item">
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `drawer-nav__link ${isActive ? 'drawer-nav__link--active' : ''}`
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="drawer-footer">
          {/* Language Switcher */}
          <div className="drawer-control-section">
            <span className="drawer-control-title">
              <Globe size={16} aria-hidden="true" />
              {t('language.select')}
            </span>
            <div className="drawer-btn-group">
              {AVAILABLE_LANGUAGES.map((lang) => (
                <Button
                  key={lang.code}
                  variant={language === lang.code ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage(lang.code)}
                >
                  {lang.nativeName}
                </Button>
              ))}
            </div>
          </div>

          {/* Theme Switcher */}
          <div className="drawer-control-section">
            <span className="drawer-control-title">Theme</span>
            <div className="drawer-btn-group">
              <Button
                variant={theme === 'light' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setTheme('light')}
              >
                <Sun size={16} style={{ marginRight: 4 }} />
                Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setTheme('dark')}
              >
                <Moon size={16} style={{ marginRight: 4 }} />
                Dark
              </Button>
              <Button
                variant={theme === 'system' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setTheme('system')}
              >
                <Monitor size={16} style={{ marginRight: 4 }} />
                System
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
