import { blogPosts } from "../data/blogPosts";

// Função helper para converter data brasileira para ISO 8601
function parsePortugueseDate(dateStr: string): string {
  try {
    const months: { [key: string]: number } = {
      'Janeiro': 0, 'Fevereiro': 1, 'Março': 2, 'Abril': 3,
      'Maio': 4, 'Junho': 5, 'Julho': 6, 'Agosto': 7,
      'Setembro': 8, 'Outubro': 9, 'Novembro': 10, 'Dezembro': 11
    };

    // Remove vírgula se existir e divide: "8 de Abril, 2026" ou "8 de Abril 2026"
    const cleanStr = dateStr.replace(',', '');
    const parts = cleanStr.split(' ');

    const day = parseInt(parts[0]);
    const month = months[parts[2]];
    const year = parseInt(parts[3]);

    if (isNaN(day) || month === undefined || isNaN(year)) {
      console.error('Data inválida:', dateStr);
      return new Date().toISOString(); // Fallback para data atual
    }

    const date = new Date(year, month, day);
    if (isNaN(date.getTime())) {
      console.error('Data inválida após conversão:', dateStr);
      return new Date().toISOString();
    }

    return date.toISOString();
  } catch (error) {
    console.error('Erro ao parsear data:', dateStr, error);
    return new Date().toISOString(); // Fallback para data atual
  }
}

export function generateSitemap(): string {
  const baseUrl = "https://wendelbatista.com"; // Substitua pelo seu domínio real

  const urls = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: "1.0"
    },
    {
      loc: `${baseUrl}/blog`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: "0.9"
    },
    ...blogPosts.map(post => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: parsePortugueseDate(post.date),
      changefreq: "monthly",
      priority: "0.8"
    }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Função para gerar robots.txt
export function generateRobotsTxt(): string {
  const baseUrl = "https://wendelbatista.com"; // Substitua pelo seu domínio real

  return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;
}
