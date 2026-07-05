# devrocket.io

Source code for [devrocket.io](https://devrocket.io/) - Product Engineering Studio. Built with Astro.

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to see the site.

## Building

```bash
npm run build
```

This generates a static site in the `dist/` directory.

## Preview

```bash
npm run preview
```

This serves the built site locally for testing.

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

The deployment workflow:
1. Builds the site using Astro
2. Uploads the `dist/` directory as a GitHub Pages artifact
3. Deploys to GitHub Pages

The custom domain (devrocket.io) is configured via the `CNAME` file in the `public/` directory.

## Project Structure

- `src/pages/` - Astro pages
- `src/components/` - Reusable Astro components
- `src/layouts/` - Base layout templates
- `src/data/` - Data files (testimonials, capabilities, case studies)
- `src/styles/` - Global styles
- `public/` - Static assets (images, fonts, CNAME, robots.txt)
