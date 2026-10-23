export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Wallander Group",
  "url": "https://wallandergroup.com",
  "logo": "https://wallandergroup.com/favicon.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "One Beacon Street, Floor 15",
    "addressLocality": "Boston",
    "addressRegion": "MA",
    "postalCode": "02108",
    "addressCountry": "US"
  },
  "founder": [
    {
      "@type": "Person",
      "name": "Douglas Walsh",
      "sameAs": "https://www.linkedin.com/in/douglas-walsh/"
    },
    {
      "@type": "Person",
      "name": "Troy Renauld",
      "sameAs": "https://www.linkedin.com/in/troyr1/"
    }
  ]
};

export const ARTICLE_SELLING_ISNT_QUITTING_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Selling Isn’t Quitting",
  "description": "Why partnering with the right permanent home protects your life’s work.",
  "url": "https://wallandergroup.com/thoughts/selling-isnt-quitting",
  "datePublished": "2026-09-01",
  "author": {
    "@type": "Organization",
    "name": "Wallander Group",
    "url": "https://wallandergroup.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Wallander Group",
    "logo": {
      "@type": "ImageObject",
      "url": "https://wallandergroup.com/favicon.svg"
    }
  }
};

export const PAGE_METADATA = {
  '/': {
    title: 'Wallander Group | Permanent Home for Niche Manufacturers',
    description: 'Wallander Group is a decentralized holding company assembling a collective of exceptional niche manufacturers. We acquire, protect, and hold mission-critical product companies forever.',
    canonical: 'https://wallandergroup.com/',
    schema: ORGANIZATION_SCHEMA
  },
  '/jan-wallander': {
    title: 'Jan Wallander & Decentralization Philosophy | Wallander Group',
    description: 'Learn about Jan Wallander’s pioneering philosophy of radical decentralization, trust in frontline operators, and long-term stewardship that guides Wallander Group.',
    canonical: 'https://wallandergroup.com/jan-wallander'
  },
  '/thoughts': {
    title: 'Thoughts & Perspectives | Wallander Group',
    description: 'Perspectives on long-term ownership, decentralization, manufacturing stewardship, and owner transitions from Wallander Group.',
    canonical: 'https://wallandergroup.com/thoughts'
  },
  '/thoughts/selling-isnt-quitting': {
    title: 'Selling Isn’t Quitting | Wallander Group',
    description: 'Why partnering with the right permanent home protects your life’s work. How thoughtful founders preserve their culture and team without flipping.',
    canonical: 'https://wallandergroup.com/thoughts/selling-isnt-quitting',
    schema: ARTICLE_SELLING_ISNT_QUITTING_SCHEMA
  },
  '/partners': {
    title: 'Partner Portal | Wallander Group',
    description: 'Access-controlled portal for Wallander Group partners and investors.',
    canonical: 'https://wallandergroup.com/partners',
    noindex: true
  }
};
