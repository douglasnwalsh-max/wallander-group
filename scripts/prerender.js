import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { build } from 'vite';
import { PAGE_METADATA } from '../src/data/seoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const ssrDir = path.resolve(rootDir, 'dist-ssr');

async function prerender() {
  console.log('🚀 Starting Pre-rendering / Static Site Generation (SSG)...');

  // 1. Build SSR bundle using Vite JS API (pure node, platform independent)
  console.log('📦 Building temporary SSR bundle...');
  await build({
    root: rootDir,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist-ssr',
      emptyOutDir: true
    },
    logLevel: 'warn'
  });

  // 2. Load the SSR bundle
  const ssrBundlePath = path.resolve(ssrDir, 'entry-server.js');
  const { render } = await import(pathToFileURL(ssrBundlePath).href);

  // 3. Read client template HTML
  const templatePath = path.resolve(distDir, 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Define routes to pre-render
  const routesToRender = [
    '/',
    '/jan-wallander',
    '/thoughts',
    '/thoughts/selling-isnt-quitting',
    '/shared-thoughts',
    '/shared-thoughts/selling-isnt-quitting',
    '/partners'
  ];

  for (const route of routesToRender) {
    console.log(`🔨 Pre-rendering route: ${route}`);
    const appHtml = render(route);

    // Look up metadata
    const metaKey = route.startsWith('/shared-thoughts') 
      ? route.replace('/shared-thoughts', '/thoughts') 
      : route;
    const meta = PAGE_METADATA[metaKey] || PAGE_METADATA['/'];

    let pageHtml = template;

    // 1. Replace <div id="root"></div> with rendered HTML
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // 2. Replace <title>
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${meta.title}</title>`
    );

    // 3. Replace <meta name="title" ...>
    pageHtml = pageHtml.replace(
      /<meta name="title" content=".*?" \/>/,
      `<meta name="title" content="${meta.title}" />`
    );

    // 4. Replace <meta name="description" ...>
    pageHtml = pageHtml.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${meta.description}" />`
    );

    // 5. Replace <link rel="canonical" ...>
    pageHtml = pageHtml.replace(
      /<link rel="canonical" href=".*?" \/>/,
      `<link rel="canonical" href="${meta.canonical}" />`
    );

    // 6. Replace OpenGraph tags
    pageHtml = pageHtml.replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="${meta.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:description" content=".*?" \/>/,
      `<meta property="og:description" content="${meta.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${meta.canonical}" />`
    );

    // 7. Replace Twitter tags
    pageHtml = pageHtml.replace(
      /<meta name="twitter:title" content=".*?" \/>/,
      `<meta name="twitter:title" content="${meta.title}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta name="twitter:description" content=".*?" \/>/,
      `<meta name="twitter:description" content="${meta.description}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta name="twitter:url" content=".*?" \/>/,
      `<meta name="twitter:url" content="${meta.canonical}" />`
    );

    // 8. Handle robots meta tag (noindex if requested)
    if (meta.noindex) {
      if (pageHtml.includes('<meta name="robots"')) {
        pageHtml = pageHtml.replace(
          /<meta name="robots" content=".*?" \/>/,
          '<meta name="robots" content="noindex, nofollow" />'
        );
      } else {
        pageHtml = pageHtml.replace(
          '</head>',
          '  <meta name="robots" content="noindex, nofollow" />\n  </head>'
        );
      }
    }

    // 9. Handle JSON-LD structured data
    if (meta.schema) {
      const scriptTag = `  <script type="application/ld+json" id="structured-data-jsonld">\n${JSON.stringify(meta.schema, null, 2)}\n  </script>\n  `;
      pageHtml = pageHtml.replace('</head>', `${scriptTag}</head>`);
    }

    // Determine target output file
    let targetFilePath;
    if (route === '/') {
      targetFilePath = path.resolve(distDir, 'index.html');
    } else {
      const routeDir = path.resolve(distDir, route.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      targetFilePath = path.resolve(routeDir, 'index.html');
    }

    fs.writeFileSync(targetFilePath, pageHtml, 'utf-8');
    console.log(`✅ Wrote: ${path.relative(rootDir, targetFilePath)} (${(pageHtml.length / 1024).toFixed(1)} KB)`);
  }

  // Clean up SSR folder
  console.log('🧹 Cleaning up temporary SSR artifacts...');
  fs.rmSync(ssrDir, { recursive: true, force: true });
  console.log('✨ Static site pre-rendering complete!');
}

prerender().catch(err => {
  console.error('❌ Pre-rendering failed:', err);
  process.exit(1);
});
