import siteData from '../lib/site-data.json';


interface Post {
  title: string;
  description: string;
  image: {
    src: string;
  };
  author: string;
  date: string;
}

interface JsonLDGeneratorParams {
  type: string;
  post?: Post;
  url: string;
}

function slugify(text?: string): string {
  if (!text) {
    return '';
  }
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

export default function jsonLDGenerator({
  type,
  post,
  url,
}: JsonLDGeneratorParams): string {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post?.title}",
        "description": "${post?.description}",
        "image": "${post?.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post?.author}",
          "url": "/author/${slugify(post?.author)}"
        },
        "datePublished": "${post?.date}"
      }
    </script>`;
  } else {
    return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "description": "${siteData.description}",
      "image": {
        "@type": "ImageObject",
        "url": "${siteData.image.src}",
        "description": "${siteData.image.alt}"
      }
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}",
      }
    </script>`;
  }
}

