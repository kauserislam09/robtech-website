export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  APPS: '/apps',
  APP_DETAIL: '/apps/:slug',
  UPDATES: '/updates',
  DOCS: '/docs',
  SUPPORT: '/support',
  ABOUT: '/about',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  CONTACT: '/contact',
  DESIGN_SYSTEM: '/design-system',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
