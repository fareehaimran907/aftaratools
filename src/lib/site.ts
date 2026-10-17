export const CANONICAL_SITE_URL = "https://aftaratools.online";

/**
 * Returns the normalized canonical base URL for the site.
 * Guarantees that 'www.' is stripped, ensuring canonical and hreflang tags
 * always match the primary non-www domain (https://aftaratools.online).
 */
export function getBaseUrl(): string {
  let url = process.env.NEXT_PUBLIC_SITE_URL?.trim() || CANONICAL_SITE_URL;
  // Strip protocol if present
  url = url.replace(/^https?:\/\//i, "");
  // Strip www. if present to enforce non-www canonical domain
  url = url.replace(/^www\./i, "");
  // Strip trailing slashes
  url = url.replace(/\/+$/, "");

  if (!url) {
    return CANONICAL_SITE_URL;
  }

  if (url.startsWith("localhost") || url.startsWith("127.0.0.1")) {
    return `http://${url}`;
  }

  return `https://${url}`;
}
