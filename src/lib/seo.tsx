const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://afterwords.gr";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Afterwords",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: [
      "https://www.instagram.com/afterwordstranslations/",
      "https://www.linkedin.com/company/afterwordstranslations/",
      "https://www.facebook.com/AfterWordstranslations",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Greek", "German", "French", "Spanish", "Italian", "Swedish", "Portuguese", "Finnish"],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Afterwords",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/bg.jpg`,
    description:
      "Professional translation, interpreting, and subtitling services based in Athens, Greece. Specializing in certified translations, pharmaceutical, maritime, and academic translation.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Athens",
      addressCountry: "GR",
    },
    sameAs: [
      "https://www.instagram.com/afterwordstranslations/",
      "https://www.linkedin.com/company/afterwordstranslations/",
      "https://www.facebook.com/AfterWordstranslations",
    ],
  };
}

export function serviceJsonLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Afterwords",
      url: BASE_URL,
    },
  };
}

export function blogPostingJsonLd(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url: `${BASE_URL}/blog/${post.slug}`,
    image: post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/bg.jpg`,
    author: {
      "@type": "Person",
      name: post.authorName || "Afterwords Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Afterwords",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
