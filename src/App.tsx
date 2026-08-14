import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { PageLoading } from './components/ui';
import { ROUTES } from './utils/routes';
import './styles/globals.css';

// Lazy-loaded page components for route-level code splitting
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const AppsPage = lazy(() => import('./pages/AppsPage').then(m => ({ default: m.AppsPage })));
const AppDetailPage = lazy(() => import('./pages/AppDetailPage').then(m => ({ default: m.AppDetailPage })));
const UpdatesPage = lazy(() => import('./pages/UpdatesPage').then(m => ({ default: m.UpdatesPage })));
const ReleaseDetailPage = lazy(() => import('./pages/ReleaseDetailPage').then(m => ({ default: m.ReleaseDetailPage })));
const DocsPage = lazy(() => import('./pages/DocsPage').then(m => ({ default: m.DocsPage })));
const DocArticlePage = lazy(() => import('./pages/DocArticlePage').then(m => ({ default: m.DocArticlePage })));
const SupportPage = lazy(() => import('./pages/SupportPage').then(m => ({ default: m.SupportPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const SecurityPage = lazy(() => import('./pages/SecurityPage').then(m => ({ default: m.SecurityPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const DesignSystemPage = lazy(() => import('./pages/DesignSystemPage').then(m => ({ default: m.DesignSystemPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
                <Route path={ROUTES.PRODUCTS + '/:slug'} element={<AppDetailPage />} />
                <Route path={ROUTES.APPS} element={<AppsPage />} />
                <Route path={ROUTES.APPS + '/:slug'} element={<AppDetailPage />} />
                <Route path={ROUTES.UPDATES} element={<UpdatesPage />} />
                <Route path={ROUTES.UPDATES + '/:appId/:version'} element={<ReleaseDetailPage />} />
                <Route path={ROUTES.DOCS} element={<DocsPage />} />
                <Route path={ROUTES.DOCS + '/apps/:appSlug'} element={<DocArticlePage />} />
                <Route path={ROUTES.DOCS + '/:slug'} element={<DocArticlePage />} />
                <Route path={ROUTES.SUPPORT} element={<SupportPage />} />
                <Route path={ROUTES.ABOUT} element={<AboutPage />} />
                <Route path={ROUTES.PRIVACY} element={<PrivacyPage />} />
                <Route path={ROUTES.TERMS} element={<TermsPage />} />
                <Route path="/security" element={<SecurityPage />} />
                <Route path={ROUTES.CONTACT} element={<ContactPage />} />
                <Route path={ROUTES.DESIGN_SYSTEM} element={<DesignSystemPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
