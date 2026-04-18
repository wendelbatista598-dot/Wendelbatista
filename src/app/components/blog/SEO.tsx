import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  tags?: string[];
}

export function SEO({
  title,
  description,
  image,
  url,
  type = "website",
  publishedTime,
  author = "Wendel Batista",
  tags = []
}: SEOProps) {
  const siteName = "Wendel Batista";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = "https://wendelbatista.com"; // Substitua pelo seu domínio real
  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "");

  // Detecta se está em produção (não é preview do Figma Make)
  const isProduction = typeof window !== "undefined" &&
    !window.location.hostname.includes("figma.site") &&
    !window.location.hostname.includes("localhost");

  // Structured Data (JSON-LD) para artigos
  const structuredData = type === "article" ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image || `${baseUrl}/og-image.png`,
    "datePublished": publishedTime,
    "dateModified": publishedTime,
    "author": {
      "@type": "Person",
      "name": author,
      "url": baseUrl
    },
    "publisher": {
      "@type": "Person",
      "name": "Wendel Batista",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "keywords": tags.join(", "),
    "articleSection": tags[0] || "Negócios",
    "inLanguage": "pt-BR"
  } : null;

  return (
    <Helmet prioritizeSeoTags>
      {/* CRITICAL: Force remove any noindex tags - must be first */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" data-react-helmet="true" />
      <meta name="googlebot" content="index, follow" data-react-helmet="true" />
      <meta name="bingbot" content="index, follow" data-react-helmet="true" />

      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {tags.length > 0 && <meta name="keywords" content={tags.join(", ")} />}
      <meta name="author" content={author} />
      <meta name="language" content="pt-BR" />

      {/* Canonical URL */}
      {currentUrl && <link rel="canonical" href={currentUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {currentUrl && <meta property="og:url" content={currentUrl} />}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && <meta property="article:author" content={author} />}
      {type === "article" && tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
