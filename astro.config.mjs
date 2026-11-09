import { defineConfig } from 'astro/config';

// GitHub Pages settings. See README.md ("Deploy") for which case you are in.
//
// Case A: repo is named <your-username>.github.io  ->  keep `base` out.
// Case B: repo has any other name (e.g. "portfolio")  ->  set base: '/portfolio'.
export default defineConfig({
  site: 'https://khanhvo8683.github.io',
  // base: '/portfolio',
});
