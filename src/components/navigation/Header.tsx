import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Sun, Moon, Monitor, Globe } from 'lucide-react';
import { BrandLogo, Container, IconButton, Button } from '../ui';
import { useTranslation, AVAILABLE_LANGUAGES } from '../../hooks/useTranslation';
import { useTheme } from '../../hooks/useTheme';
import { MobileNavDrawer } from './MobileNavDrawer';
import { ROUTES } from '../../utils/routes';
import './Header.css';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: ROUTES.HOME, labelKey: 'navigation.home' },
    { path: ROUTES.PRODUCTS, labelKey: 'navigation.products' },
    { path: ROUTES.APPS, labelKey: 'navigation.apps' },
    { path: ROUTES.UPDATES, labelKey: 'navigation.updates' },
    { path: ROUTES.DOCS, labelKey: 'navigation.docs' },
    { path: ROUTES.SUPPORT, labelKey: 'navigation.support' },
    { path: ROUTES.ABOUT, labelKey: 'navigation.about' },
  ];

  return (
    <header className="site-header">
      <Container size="lg" className="site-header__container">
        {/* Brand Logo Link */}
        <NavLink to={ROUTES.HOME} className="site-header__brand-link" aria-label="RobTech Home">
          <BrandLogo size="md" showTagline={true} />
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="desktop-nav__list">
            {navLinks.map((link) => (
              <li key={link.path} className="desktop-nav__item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `desktop-nav__link ${isActive ? 'desktop-nav__link--active' : ''}`
                  }
                >
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Controls (Language & Theme) */}
        <div className="header-actions">
          {/* Language Selector */}
          <div className="header-control-group" title={t('language.select')}>
            <Globe size={18} className="header-control-group__icon" aria-hidden="true" />
            <div className="header-btn-group">
              {AVAILABLE_LANGUAGES.map((lang) => (
                <Button
                  key={lang.code}
                  variant={language === lang.code ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage(lang.code)}
                  aria-label={`Switch language to ${lang.name}`}
                >
                  {lang.nativeName}
                </Button>
              ))}
            </div>
          </div>

          {/* Theme Selector */}
          <div className="header-control-group" title="Select Theme">
            <div className="header-btn-group">
              <IconButton
                aria-label="Light mode"
                variant={theme === 'light' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setTheme('light')}
              >
                <Sun size={18} />
              </IconButton>
              <IconButton
                aria-label="Dark mode"
                variant={theme === 'dark' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setTheme('dark')}
              >
                <Moon size={18} />
              </IconButton>
              <IconButton
                aria-label="System theme"
                variant={theme === 'system' ? 'secondary' : 'ghost'}
                size="sm"
                onClick={() => setTheme('system')}
              >
                <Monitor size={18} />
              </IconButton>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Trigger */}
        <IconButton
          className="mobile-menu-trigger"
          aria-label="Open Navigation Menu"
          aria-expanded={isMobileMenuOpen}
          variant="ghost"
          size="md"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={26} aria-hidden="true" />
        </IconButton>
      </Container>

      {/* Accessible Mobile Navigation Drawer */}
      <MobileNavDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};
