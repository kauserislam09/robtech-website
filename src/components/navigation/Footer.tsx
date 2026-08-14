import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, BrandLogo, Select } from '../ui';
import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from '../../hooks/useTranslation';
import { ROUTES } from '../../utils/routes';
import type { ThemeMode } from '../../types/theme';
import type { Language } from '../../types/language';
import './Footer.css';

export const Footer: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useTranslation();

  const themeOptions = [
    { value: 'system', label: t('theme.system') },
    { value: 'light', label: t('theme.light') },
    { value: 'dark', label: t('theme.dark') },
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'bn', label: 'বাংলা' },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <Container size="lg">
        <div className="footer__grid">
          {/* Brand Info */}
          <div className="footer__brand-col">
            <BrandLogo size="md" className="footer__logo" />
            <Typography variant="body" muted className="footer__tagline">
              {t('brand.tagline')}
            </Typography>
            <Typography variant="caption" muted className="footer__desc">
              Building practical, reliable, and accessible technology products for everyday use.
            </Typography>
          </div>

          {/* Nav Column 1: Products & Apps */}
          <div className="footer__nav-col">
            <Typography variant="caption" className="footer__col-title">
              {t('navigation.products')}
            </Typography>
            <ul className="footer__link-list">
              <li><Link to={ROUTES.PRODUCTS}>{t('navigation.products')}</Link></li>
              <li><Link to={ROUTES.APPS}>{t('navigation.apps')}</Link></li>
              <li><Link to={ROUTES.UPDATES}>{t('navigation.updates')}</Link></li>
            </ul>
          </div>

          {/* Nav Column 2: Resources & Support */}
          <div className="footer__nav-col">
            <Typography variant="caption" className="footer__col-title">
              {t('navigation.support')}
            </Typography>
            <ul className="footer__link-list">
              <li><Link to={ROUTES.DOCS}>{t('navigation.docs')}</Link></li>
              <li><Link to={ROUTES.SUPPORT}>{t('navigation.support')}</Link></li>
              <li><Link to={ROUTES.CONTACT}>{t('navigation.contact')}</Link></li>
            </ul>
          </div>

          {/* Nav Column 3: Company & Legal */}
          <div className="footer__nav-col">
            <Typography variant="caption" className="footer__col-title">
              {t('navigation.about')}
            </Typography>
            <ul className="footer__link-list">
              <li><Link to={ROUTES.ABOUT}>{t('navigation.about')}</Link></li>
              <li><Link to={ROUTES.PRIVACY}>{t('navigation.privacy')}</Link></li>
              <li><Link to={ROUTES.TERMS}>{t('navigation.terms')}</Link></li>
              <li><Link to="/security">Security Policy</Link></li>
            </ul>
          </div>

          {/* Preferences Column */}
          <div className="footer__pref-col">
            <Typography variant="caption" className="footer__col-title">
              Preferences
            </Typography>
            <div className="footer__controls">
              <Select
                label={t('theme.title')}
                options={themeOptions}
                value={theme}
                onChange={(e) => setTheme(e.target.value as ThemeMode)}
                aria-label={t('theme.title')}
              />
              <Select
                label={t('language.title')}
                options={languageOptions}
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                aria-label={t('language.title')}
              />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <Typography variant="caption" muted className="footer__copyright">
            © {new Date().getFullYear()} RobTech Limited. {t('footer.copyright')}
          </Typography>
        </div>
      </Container>
    </footer>
  );
};
