import { useEffect } from 'react';

const DEFAULT_TITLE = 'Wallander Group | Permanent Home for Niche Manufacturers';
const DEFAULT_DESC = 'Wallander Group is a decentralized holding company assembling a collective of exceptional niche manufacturers. We acquire, protect, and hold mission-critical product companies forever.';
const DEFAULT_CANONICAL = 'https://wallandergroup.com/';
const DEFAULT_IMAGE = 'https://wallandergroup.com/images/doug-walsh.jpg';

export const updateMetaTag = (attr, val, content) => {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[${attr}="${val}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, val);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export const updateCanonical = (href) => {
  if (typeof document === 'undefined') return;
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

export const updateJsonLd = (schemaObj) => {
  if (typeof document === 'undefined') return;
  const SCRIPT_ID = 'structured-data-jsonld';
  let script = document.getElementById(SCRIPT_ID);
  if (!schemaObj) {
    if (script) script.remove();
    return;
  }
  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaObj, null, 2);
};

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical = DEFAULT_CANONICAL,
  image = DEFAULT_IMAGE,
  noindex = false,
  schema = null,
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta description
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'title', title);

    // 3. Canonical link
    updateCanonical(canonical);

    // 4. OpenGraph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', canonical);
    updateMetaTag('property', 'og:image', image);

    // 5. Twitter tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:url', canonical);
    updateMetaTag('name', 'twitter:image', image);

    // 6. Robots / indexing
    if (noindex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      const robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) robotsTag.remove();
    }

    // 7. Schema.org JSON-LD
    updateJsonLd(schema);
  }, [title, description, canonical, image, noindex, schema]);

  return null;
};

export default SEO;
