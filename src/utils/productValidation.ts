import type { Product } from '../types/product';

/**
 * Validates product data integrity at runtime to detect duplicates or missing required fields.
 */
export function validateProductData(products: Product[]): boolean {
  const ids = new Set<string>();
  const slugs = new Set<string>();
  let isValid = true;

  for (const prod of products) {
    // Check ID
    if (!prod.id) {
      console.error('[Product Validation Error]: Product missing ID', prod);
      isValid = false;
    } else if (ids.has(prod.id)) {
      console.error(`[Product Validation Error]: Duplicate product ID "${prod.id}"`);
      isValid = false;
    } else {
      ids.add(prod.id);
    }

    // Check Slug
    if (!prod.slug) {
      console.error('[Product Validation Error]: Product missing slug', prod);
      isValid = false;
    } else if (slugs.has(prod.slug)) {
      console.error(`[Product Validation Error]: Duplicate product slug "${prod.slug}"`);
      isValid = false;
    } else {
      slugs.add(prod.slug);
    }

    // Check Name
    if (!prod.name) {
      console.error('[Product Validation Error]: Product missing name', prod);
      isValid = false;
    }

    // Check Status
    const validStatuses = ['stable', 'active', 'beta', 'development', 'archived'];
    if (!validStatuses.includes(prod.status)) {
      console.error(`[Product Validation Error]: Product "${prod.id}" has invalid status "${prod.status}"`);
      isValid = false;
    }

    // Check Platforms
    if (!prod.platforms || prod.platforms.length === 0) {
      console.error(`[Product Validation Error]: Product "${prod.id}" has no platforms defined`);
      isValid = false;
    }
  }

  return isValid;
}
