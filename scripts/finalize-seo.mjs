import { readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join, relative, sep } from 'node:path';

const [siteUrl] = process.argv.slice(2);

if (!siteUrl) {
  throw new Error('Usage: node scripts/finalize-seo.mjs <site-url>');
}

const outputDirectory = new URL('../dist/', import.meta.url).pathname;

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? findHtmlFiles(path) : [path];
    }),
  );

  return files.flat().filter((path) => extname(path) === '.html');
}

function pathnameFor(file) {
  const outputPath = relative(outputDirectory, file).split(sep).join('/');

  if (outputPath === 'index.html') return '/';
  if (outputPath.endsWith('/index.html')) return `/${outputPath.slice(0, -'index.html'.length)}`;
  return `/${outputPath}`;
}

for (const file of await findHtmlFiles(outputDirectory)) {
  let html = await readFile(file, 'utf8');
  const pathname = pathnameFor(file);
  const canonicalUrl = new URL(pathname, siteUrl).toString();

  if (!/<link\s+[^>]*rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace('</head>', `<link rel="canonical" href="${canonicalUrl}"></head>`);
  }

  if ((pathname === '/404.html' || pathname === '/404/') && !/<meta\s+[^>]*name=["']robots["'][^>]*>/i.test(html)) {
    html = html.replace('</head>', '<meta name="robots" content="noindex, follow"></head>');
  }

  await writeFile(file, html);
}
