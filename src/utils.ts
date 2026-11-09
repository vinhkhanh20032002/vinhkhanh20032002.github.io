// Prefix a path from /public with the site's base path (needed on GitHub Pages
// when the repo is not named <username>.github.io).
export const asset = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + '/' + path.replace(/^\//, '');

// Use as-is for full URLs, otherwise treat as a file in /public.
export const href = (value: string): string =>
  /^(https?:|mailto:)/.test(value) ? value : asset(value);
