import { ArrowRight, Clock, Calendar, Tag, User } from "lucide-react";
import { Link, useParams } from "react-router";
import { Background } from "../components/landing/Background";
import { Footer } from "../components/landing/Footer";
import { PrisonerDilemma } from "../components/PrisonerDilemma";
import { NewsletterInline } from "../components/blog/NewsletterInline";
import { BlogHeader } from "../components/blog/BlogHeader";
import { SEO } from "../components/blog/SEO";
import { AuthorBio } from "../components/blog/AuthorBio";
import { getPostBySlug } from "../data/blogPosts";

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

export function ArticlePage() {
  const { slug } = useParams();

  const article = getPostBySlug(slug as string);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <Link to="/blog" className="text-[#2563EB] hover:underline">
            Voltar para o blog
          </Link>
        </div>
      </div>
    );
  }

  // Verifica se é o artigo do dilema do prisioneiro (com estrutura especial)
  const isDilemmaArticle = slug === "guerra-empresa-nao-quer-todas-criam";
  const hasNewsletterInMiddle = article.contentBeforeNewsletter && article.contentAfterNewsletter;

  // URL do artigo
  const baseUrl = "https://wendelbatista.com"; // Substitua pelo seu domínio real
  const articleUrl = `${baseUrl}/blog/${slug}`;

  // Data em formato ISO
  const publishedDate = parsePortugueseDate(article.date);

  return (
    <div className="relative min-h-screen font-sans bg-[#F8FAFC] text-[#132A4A] overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
      <SEO
        title={article.title}
        description={article.subtitle}
        image={article.coverImage}
        url={articleUrl}
        type="article"
        publishedTime={publishedDate}
        tags={[article.category, "economia", "gestão", "negócios", "finanças"]}
      />
      <BlogHeader />
      <Background />
      
      <main className="relative z-10">
        
        {/* Article Header */}
        <article className="relative" itemScope itemType="https://schema.org/BlogPosting">
          
          {/* Navigation */}
          <div className="container mx-auto px-6 md:px-12 max-w-4xl pt-12 md:pt-20">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-[#132A4A]/60 hover:text-[#2563EB] transition-colors group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Voltar para o blog</span>
            </Link>
          </div>

          {/* Header Content */}
          <header className="container mx-auto px-6 md:px-12 max-w-4xl py-12 md:py-20">

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full font-medium text-sm tracking-wide">
                <Tag className="w-4 h-4" />
                {article.category}
              </span>
              <address className="inline-flex items-center gap-2 text-[#132A4A]/60 font-light text-sm not-italic">
                <User className="w-4 h-4" />
                <span rel="author">Wendel Batista</span>
              </address>
              <time
                dateTime={publishedDate}
                className="inline-flex items-center gap-2 text-[#132A4A]/60 font-light text-sm"
              >
                <Calendar className="w-4 h-4" />
                {article.date}
              </time>
              <span className="inline-flex items-center gap-2 text-[#132A4A]/60 font-light text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0F172A] font-medium tracking-tight leading-tight mb-6" itemProp="headline">
              {article.title}
            </h1>

            {/* Subtitle */}
            {article.subtitle && (
              <p className="text-xl md:text-2xl text-[#132A4A]/80 font-light leading-relaxed mb-12" role="doc-subtitle" itemProp="description">
                {article.subtitle}
              </p>
            )}

            {/* Hidden metadata for schema.org */}
            <meta itemProp="datePublished" content={publishedDate} />
            <meta itemProp="dateModified" content={publishedDate} />
            <meta itemProp="author" content="Wendel Batista" />
            <meta itemProp="publisher" content="Wendel Batista" />
            <link itemProp="url" href={articleUrl} />
            <meta itemProp="articleSection" content={article.category} />
            <meta itemProp="inLanguage" content="pt-BR" />

            {/* Divider */}
            <div className="h-[2px] w-24 bg-[#2563EB] mb-12" aria-hidden="true" />

          </header>

          {/* Cover Image */}
          <figure className="container mx-auto px-6 md:px-12 max-w-5xl mb-16 md:mb-20">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#E5E7EB] shadow-[0_20px_60px_rgb(15,23,42,0.08)]">
              <img
                src={article.coverImage}
                alt={`Imagem de capa: ${article.title}`}
                className="w-full h-full object-cover"
                itemProp="image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent opacity-60" aria-hidden="true" />
            </div>
          </figure>

          {/* Article Content */}
          <section
            className="container mx-auto px-6 md:px-12 max-w-3xl pb-20 md:pb-32"
            itemProp="articleBody"
          >
            {isDilemmaArticle ? (
              <>
                <div 
                  className="article-content prose prose-lg md:prose-xl max-w-none font-serif
                    prose-headings:font-serif prose-headings:text-[#2563EB] prose-headings:font-medium prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-[#132A4A]/90 prose-p:font-normal
                    prose-strong:text-[#0F172A] prose-strong:font-medium
                    prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#132A4A]/80
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:text-[#132A4A]/90 prose-li:leading-relaxed"
                  style={{ fontFamily: 'Lora, Georgia, serif' }}
                  dangerouslySetInnerHTML={{ __html: article.contentBeforeDilemma || '' }}
                />
                <style>{`
                  .article-content p {
                    line-height: 2 !important;
                    margin-bottom: 2em !important;
                    font-size: 1.125rem !important;
                  }
                  .article-content a {
                    color: #2563EB !important;
                    text-decoration: underline !important;
                    font-weight: 500 !important;
                    transition: color 0.2s ease;
                  }
                  .article-content a:hover {
                    color: #1E40AF !important;
                    text-decoration: underline !important;
                  }
                  .article-content h2,
                  .article-content h3,
                  .article-content h4,
                  .article-content h5,
                  .article-content h6 {
                    color: #2563EB !important;
                  }
                  @media (min-width: 768px) {
                    .article-content p {
                      font-size: 1.1875rem !important;
                    }
                  }
                  .article-content .formula-highlight {
                    text-align: center;
                    margin: 2.5em 0;
                    padding: 1.5em;
                    background: #F1F5F9;
                    border-left: 4px solid #2563EB;
                    border-radius: 8px;
                  }
                  .article-content .formula-highlight p {
                    font-size: 1.2em !important;
                    font-weight: 600;
                    color: #0F172A;
                    margin: 0 !important;
                  }
                  .article-content .table-container {
                    margin: 2.5em 0;
                    overflow-x: auto;
                  }
                  .article-content .table-container table {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    border-collapse: collapse;
                    background: white;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    border-radius: 8px;
                    overflow: hidden;
                  }
                  .article-content .table-container thead {
                    background: #2563EB;
                    color: white;
                  }
                  .article-content .table-container th {
                    padding: 1em;
                    text-align: left;
                    font-weight: 600;
                  }
                  .article-content .table-container th:last-child {
                    text-align: right;
                  }
                  .article-content .table-container td {
                    padding: 1em;
                    border-bottom: 1px solid #E5E7EB;
                  }
                  .article-content .table-container td:last-child {
                    text-align: right;
                  }
                  .article-content .table-container tr.total-row {
                    background: #F8FAFC;
                    font-weight: 600;
                  }
                  .article-content .table-container tr.total-row:first-of-type td {
                    border-bottom: 2px solid #2563EB;
                  }
                  .article-content .table-container tbody tr:last-child td {
                    border-bottom: none;
                  }
                  .article-content .note-box {
                    margin: 2.5em 0;
                    padding: 1.25em 1.5em;
                    background: #FEF9E7;
                    border-left: 3px solid #F59E0B;
                    border-radius: 6px;
                    font-size: 0.9em;
                  }
                  .article-content .note-box p {
                    font-size: 0.95rem !important;
                    line-height: 1.7 !important;
                    margin: 0 !important;
                    color: #78350F;
                  }
                  .article-content .note-box strong {
                    color: #92400E;
                    font-weight: 600;
                  }
                  .article-content .calculation-steps {
                    margin: 2.5em 0;
                    padding: 1.5em;
                    background: #F8FAFC;
                    border-radius: 8px;
                    border: 1px solid #E5E7EB;
                  }
                  .article-content .calculation-step {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;
                    padding: 1em 0;
                    border-bottom: 1px dashed #E5E7EB;
                  }
                  .article-content .calculation-step:last-of-type {
                    border-bottom: none;
                  }
                  .article-content .step-label {
                    font-size: 0.85em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                  }
                  .article-content .step-formula {
                    font-size: 1em;
                    color: #0F172A;
                    font-family: 'Courier New', monospace;
                    line-height: 1.6;
                    word-break: break-word;
                  }
                  .article-content .calculation-result {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;
                    padding: 1.25em;
                    margin-top: 0.5em;
                    background: #EFF6FF;
                    border-radius: 6px;
                    border-left: 4px solid #2563EB;
                  }
                  .article-content .result-label {
                    font-size: 0.85em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                  }
                  .article-content .result-value {
                    font-size: 1.1em;
                    color: #0F172A;
                    font-family: 'Courier New', monospace;
                  }
                  .article-content .result-value strong {
                    color: #2563EB;
                    font-size: 1.2em;
                  }
                  .article-content .wacc-formula-container {
                    margin: 2.5em 0;
                    padding: 2em;
                    background: #F8FAFC;
                    border-radius: 12px;
                    border: 1px solid #E5E7EB;
                  }
                  .article-content .formula-main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1em;
                    padding: 1.5em;
                    background: white;
                    border-radius: 8px;
                    margin-bottom: 2em;
                  }
                  .article-content .formula-label {
                    font-size: 1.2em;
                    font-weight: 600;
                    color: #2563EB;
                  }
                  .article-content .formula-parts {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5em;
                  }
                  .article-content .formula-part {
                    display: flex;
                    align-items: center;
                    gap: 0.4em;
                    padding: 0.5em 0.8em;
                    background: #F1F5F9;
                    border-radius: 6px;
                  }
                  .article-content .fraction {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 1.1em;
                    font-weight: 600;
                  }
                  .article-content .numerator,
                  .article-content .denominator {
                    color: #0F172A;
                    padding: 0.1em 0.3em;
                  }
                  .article-content .divider {
                    width: 100%;
                    height: 2px;
                    background: #2563EB;
                    margin: 0.15em 0;
                  }
                  .article-content .multiply {
                    color: #64748B;
                    font-size: 1.2em;
                  }
                  .article-content .plus {
                    color: #2563EB;
                    font-size: 1.5em;
                    font-weight: 600;
                  }
                  .article-content .variable {
                    color: #2563EB;
                    font-weight: 600;
                    font-size: 1.1em;
                  }
                  .article-content .parenthesis {
                    color: #0F172A;
                    font-weight: 500;
                  }
                  .article-content .variables-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 1em;
                  }
                  .article-content .variable-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5em;
                    padding: 1em;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid #E5E7EB;
                    text-align: center;
                  }
                  .article-content .var-symbol {
                    font-size: 1.5em;
                    font-weight: 700;
                    color: #2563EB;
                    font-style: italic;
                  }
                  .article-content .var-description {
                    font-size: 0.85em;
                    color: #64748B;
                    line-height: 1.3;
                  }
                  .article-content .wacc-calculation-container {
                    margin: 2.5em 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5em;
                  }
                  .article-content .calc-step-card,
                  .article-content .calc-result-card {
                    padding: 1.5em;
                    background: white;
                    border-radius: 10px;
                    border: 1px solid #E5E7EB;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                  }
                  .article-content .calc-result-card {
                    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
                    border-color: #2563EB;
                  }
                  .article-content .step-header,
                  .article-content .result-header {
                    font-size: 0.9em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 1em;
                  }
                  .article-content .result-header {
                    color: #1E40AF;
                  }
                  .article-content .calc-formula {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.8em;
                  }
                  .article-content .calc-label {
                    font-size: 1.1em;
                    font-weight: 600;
                    color: #2563EB;
                  }
                  .article-content .calc-parts {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5em;
                  }
                  .article-content .calc-part {
                    display: flex;
                    align-items: center;
                    gap: 0.4em;
                    padding: 0.4em 0.7em;
                    background: #F8FAFC;
                    border-radius: 6px;
                  }
                  .article-content .calc-fraction {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    font-weight: 600;
                  }
                  .article-content .calc-num,
                  .article-content .calc-den {
                    color: #0F172A;
                    padding: 0.1em 0.3em;
                    font-size: 0.95em;
                  }
                  .article-content .calc-div {
                    width: 100%;
                    height: 2px;
                    background: #2563EB;
                    margin: 0.15em 0;
                  }
                  .article-content .calc-op {
                    color: #64748B;
                    font-size: 1.1em;
                  }
                  .article-content .calc-plus {
                    color: #2563EB;
                    font-size: 1.4em;
                    font-weight: 600;
                  }
                  .article-content .calc-equals {
                    color: #1E40AF;
                    font-size: 1.4em;
                    font-weight: 700;
                  }
                  .article-content .calc-val {
                    color: #0F172A;
                    font-weight: 600;
                  }
                  .article-content .calc-paren {
                    color: #0F172A;
                    font-weight: 500;
                  }
                  .article-content .calc-final {
                    color: #2563EB;
                    font-size: 1.5em;
                    font-weight: 700;
                    padding: 0.2em 0.5em;
                    background: white;
                    border-radius: 6px;
                  }
                `}</style>
                <PrisonerDilemma />
                <div 
                  className="article-content prose prose-lg md:prose-xl max-w-none font-serif
                    prose-headings:font-serif prose-headings:text-[#2563EB] prose-headings:font-medium prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-[#132A4A]/90 prose-p:font-normal
                    prose-strong:text-[#0F172A] prose-strong:font-medium
                    prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#132A4A]/80
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:text-[#132A4A]/90 prose-li:leading-relaxed"
                  style={{ fontFamily: 'Lora, Georgia, serif' }}
                  dangerouslySetInnerHTML={{ __html: article.contentMiddle || '' }}
                />
                
                <NewsletterInline />
                
                <div 
                  className="article-content prose prose-lg md:prose-xl max-w-none font-serif
                    prose-headings:font-serif prose-headings:text-[#2563EB] prose-headings:font-medium prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-[#132A4A]/90 prose-p:font-normal
                    prose-strong:text-[#0F172A] prose-strong:font-medium
                    prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#132A4A]/80
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:text-[#132A4A]/90 prose-li:leading-relaxed"
                  style={{ fontFamily: 'Lora, Georgia, serif' }}
                  dangerouslySetInnerHTML={{ __html: article.contentAfterDilemma || '' }}
                />
              </>
            ) : hasNewsletterInMiddle ? (
              <>
                <div 
                  className="article-content prose prose-lg md:prose-xl max-w-none font-serif
                    prose-headings:font-serif prose-headings:text-[#2563EB] prose-headings:font-medium prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-[#132A4A]/90 prose-p:font-normal
                    prose-strong:text-[#0F172A] prose-strong:font-medium
                    prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#132A4A]/80
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:text-[#132A4A]/90 prose-li:leading-relaxed"
                  style={{ fontFamily: 'Lora, Georgia, serif' }}
                  dangerouslySetInnerHTML={{ __html: article.contentBeforeNewsletter || '' }}
                />
                <style>{`
                  .article-content p {
                    line-height: 2 !important;
                    margin-bottom: 2em !important;
                    font-size: 1.125rem !important;
                  }
                  .article-content a {
                    color: #2563EB !important;
                    text-decoration: underline !important;
                    font-weight: 500 !important;
                    transition: color 0.2s ease;
                  }
                  .article-content a:hover {
                    color: #1E40AF !important;
                    text-decoration: underline !important;
                  }
                  .article-content h2,
                  .article-content h3,
                  .article-content h4,
                  .article-content h5,
                  .article-content h6 {
                    color: #2563EB !important;
                  }
                  @media (min-width: 768px) {
                    .article-content p {
                      font-size: 1.1875rem !important;
                    }
                  }
                  .article-content .formula-highlight {
                    text-align: center;
                    margin: 2.5em 0;
                    padding: 1.5em;
                    background: #F1F5F9;
                    border-left: 4px solid #2563EB;
                    border-radius: 8px;
                  }
                  .article-content .formula-highlight p {
                    font-size: 1.2em !important;
                    font-weight: 600;
                    color: #0F172A;
                    margin: 0 !important;
                  }
                  .article-content .table-container {
                    margin: 2.5em 0;
                    overflow-x: auto;
                  }
                  .article-content .table-container table {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    border-collapse: collapse;
                    background: white;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    border-radius: 8px;
                    overflow: hidden;
                  }
                  .article-content .table-container thead {
                    background: #2563EB;
                    color: white;
                  }
                  .article-content .table-container th {
                    padding: 1em;
                    text-align: left;
                    font-weight: 600;
                  }
                  .article-content .table-container th:last-child {
                    text-align: right;
                  }
                  .article-content .table-container td {
                    padding: 1em;
                    border-bottom: 1px solid #E5E7EB;
                  }
                  .article-content .table-container td:last-child {
                    text-align: right;
                  }
                  .article-content .table-container tr.total-row {
                    background: #F8FAFC;
                    font-weight: 600;
                  }
                  .article-content .table-container tr.total-row:first-of-type td {
                    border-bottom: 2px solid #2563EB;
                  }
                  .article-content .table-container tbody tr:last-child td {
                    border-bottom: none;
                  }
                  .article-content .note-box {
                    margin: 2.5em 0;
                    padding: 1.25em 1.5em;
                    background: #FEF9E7;
                    border-left: 3px solid #F59E0B;
                    border-radius: 6px;
                    font-size: 0.9em;
                  }
                  .article-content .note-box p {
                    font-size: 0.95rem !important;
                    line-height: 1.7 !important;
                    margin: 0 !important;
                    color: #78350F;
                  }
                  .article-content .note-box strong {
                    color: #92400E;
                    font-weight: 600;
                  }
                  .article-content .calculation-steps {
                    margin: 2.5em 0;
                    padding: 1.5em;
                    background: #F8FAFC;
                    border-radius: 8px;
                    border: 1px solid #E5E7EB;
                  }
                  .article-content .calculation-step {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;
                    padding: 1em 0;
                    border-bottom: 1px dashed #E5E7EB;
                  }
                  .article-content .calculation-step:last-of-type {
                    border-bottom: none;
                  }
                  .article-content .step-label {
                    font-size: 0.85em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                  }
                  .article-content .step-formula {
                    font-size: 1em;
                    color: #0F172A;
                    font-family: 'Courier New', monospace;
                    line-height: 1.6;
                    word-break: break-word;
                  }
                  .article-content .calculation-result {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;
                    padding: 1.25em;
                    margin-top: 0.5em;
                    background: #EFF6FF;
                    border-radius: 6px;
                    border-left: 4px solid #2563EB;
                  }
                  .article-content .result-label {
                    font-size: 0.85em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                  }
                  .article-content .result-value {
                    font-size: 1.1em;
                    color: #0F172A;
                    font-family: 'Courier New', monospace;
                  }
                  .article-content .result-value strong {
                    color: #2563EB;
                    font-size: 1.2em;
                  }
                  .article-content .wacc-formula-container {
                    margin: 2.5em 0;
                    padding: 2em;
                    background: #F8FAFC;
                    border-radius: 12px;
                    border: 1px solid #E5E7EB;
                  }
                  .article-content .formula-main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1em;
                    padding: 1.5em;
                    background: white;
                    border-radius: 8px;
                    margin-bottom: 2em;
                  }
                  .article-content .formula-label {
                    font-size: 1.2em;
                    font-weight: 600;
                    color: #2563EB;
                  }
                  .article-content .formula-parts {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5em;
                  }
                  .article-content .formula-part {
                    display: flex;
                    align-items: center;
                    gap: 0.4em;
                    padding: 0.5em 0.8em;
                    background: #F1F5F9;
                    border-radius: 6px;
                  }
                  .article-content .fraction {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 1.1em;
                    font-weight: 600;
                  }
                  .article-content .numerator,
                  .article-content .denominator {
                    color: #0F172A;
                    padding: 0.1em 0.3em;
                  }
                  .article-content .divider {
                    width: 100%;
                    height: 2px;
                    background: #2563EB;
                    margin: 0.15em 0;
                  }
                  .article-content .multiply {
                    color: #64748B;
                    font-size: 1.2em;
                  }
                  .article-content .plus {
                    color: #2563EB;
                    font-size: 1.5em;
                    font-weight: 600;
                  }
                  .article-content .variable {
                    color: #2563EB;
                    font-weight: 600;
                    font-size: 1.1em;
                  }
                  .article-content .parenthesis {
                    color: #0F172A;
                    font-weight: 500;
                  }
                  .article-content .variables-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 1em;
                  }
                  .article-content .variable-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5em;
                    padding: 1em;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid #E5E7EB;
                    text-align: center;
                  }
                  .article-content .var-symbol {
                    font-size: 1.5em;
                    font-weight: 700;
                    color: #2563EB;
                    font-style: italic;
                  }
                  .article-content .var-description {
                    font-size: 0.85em;
                    color: #64748B;
                    line-height: 1.3;
                  }
                  .article-content .wacc-calculation-container {
                    margin: 2.5em 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5em;
                  }
                  .article-content .calc-step-card,
                  .article-content .calc-result-card {
                    padding: 1.5em;
                    background: white;
                    border-radius: 10px;
                    border: 1px solid #E5E7EB;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                  }
                  .article-content .calc-result-card {
                    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
                    border-color: #2563EB;
                  }
                  .article-content .step-header,
                  .article-content .result-header {
                    font-size: 0.9em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 1em;
                  }
                  .article-content .result-header {
                    color: #1E40AF;
                  }
                  .article-content .calc-formula {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.8em;
                  }
                  .article-content .calc-label {
                    font-size: 1.1em;
                    font-weight: 600;
                    color: #2563EB;
                  }
                  .article-content .calc-parts {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5em;
                  }
                  .article-content .calc-part {
                    display: flex;
                    align-items: center;
                    gap: 0.4em;
                    padding: 0.4em 0.7em;
                    background: #F8FAFC;
                    border-radius: 6px;
                  }
                  .article-content .calc-fraction {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    font-weight: 600;
                  }
                  .article-content .calc-num,
                  .article-content .calc-den {
                    color: #0F172A;
                    padding: 0.1em 0.3em;
                    font-size: 0.95em;
                  }
                  .article-content .calc-div {
                    width: 100%;
                    height: 2px;
                    background: #2563EB;
                    margin: 0.15em 0;
                  }
                  .article-content .calc-op {
                    color: #64748B;
                    font-size: 1.1em;
                  }
                  .article-content .calc-plus {
                    color: #2563EB;
                    font-size: 1.4em;
                    font-weight: 600;
                  }
                  .article-content .calc-equals {
                    color: #1E40AF;
                    font-size: 1.4em;
                    font-weight: 700;
                  }
                  .article-content .calc-val {
                    color: #0F172A;
                    font-weight: 600;
                  }
                  .article-content .calc-paren {
                    color: #0F172A;
                    font-weight: 500;
                  }
                  .article-content .calc-final {
                    color: #2563EB;
                    font-size: 1.5em;
                    font-weight: 700;
                    padding: 0.2em 0.5em;
                    background: white;
                    border-radius: 6px;
                  }
                `}</style>
                <NewsletterInline />
                <div 
                  className="article-content prose prose-lg md:prose-xl max-w-none font-serif
                    prose-headings:font-serif prose-headings:text-[#2563EB] prose-headings:font-medium prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-[#132A4A]/90 prose-p:font-normal
                    prose-strong:text-[#0F172A] prose-strong:font-medium
                    prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#132A4A]/80
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:text-[#132A4A]/90 prose-li:leading-relaxed
                    [&_.text-negative]:text-red-600 [&_.text-negative]:font-medium"
                  style={{ fontFamily: 'Lora, Georgia, serif' }}
                  dangerouslySetInnerHTML={{ __html: article.contentAfterNewsletter || '' }}
                />
              </>
            ) : (
              <>
                <div 
                  className="article-content prose prose-lg md:prose-xl max-w-none font-serif
                    prose-headings:font-serif prose-headings:text-[#2563EB] prose-headings:font-medium prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-[#132A4A]/90 prose-p:font-normal
                    prose-strong:text-[#0F172A] prose-strong:font-medium
                    prose-a:text-[#2563EB] prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-blockquote:border-l-4 prose-blockquote:border-[#2563EB] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#132A4A]/80
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                    prose-li:text-[#132A4A]/90 prose-li:leading-relaxed"
                  style={{ fontFamily: 'Lora, Georgia, serif' }}
                  dangerouslySetInnerHTML={{ __html: article.content || '' }}
                />
                <style>{`
                  .article-content p {
                    line-height: 2 !important;
                    margin-bottom: 2em !important;
                    font-size: 1.125rem !important;
                  }
                  .article-content a {
                    color: #2563EB !important;
                    text-decoration: underline !important;
                    font-weight: 500 !important;
                    transition: color 0.2s ease;
                  }
                  .article-content a:hover {
                    color: #1E40AF !important;
                    text-decoration: underline !important;
                  }
                  .article-content h2,
                  .article-content h3,
                  .article-content h4,
                  .article-content h5,
                  .article-content h6 {
                    color: #2563EB !important;
                  }
                  @media (min-width: 768px) {
                    .article-content p {
                      font-size: 1.1875rem !important;
                    }
                  }
                  .article-content .formula-highlight {
                    text-align: center;
                    margin: 2.5em 0;
                    padding: 1.5em;
                    background: #F1F5F9;
                    border-left: 4px solid #2563EB;
                    border-radius: 8px;
                  }
                  .article-content .formula-highlight p {
                    font-size: 1.2em !important;
                    font-weight: 600;
                    color: #0F172A;
                    margin: 0 !important;
                  }
                  .article-content .table-container {
                    margin: 2.5em 0;
                    overflow-x: auto;
                  }
                  .article-content .table-container table {
                    width: 100%;
                    max-width: 600px;
                    margin: 0 auto;
                    border-collapse: collapse;
                    background: white;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                    border-radius: 8px;
                    overflow: hidden;
                  }
                  .article-content .table-container thead {
                    background: #2563EB;
                    color: white;
                  }
                  .article-content .table-container th {
                    padding: 1em;
                    text-align: left;
                    font-weight: 600;
                  }
                  .article-content .table-container th:last-child {
                    text-align: right;
                  }
                  .article-content .table-container td {
                    padding: 1em;
                    border-bottom: 1px solid #E5E7EB;
                  }
                  .article-content .table-container td:last-child {
                    text-align: right;
                  }
                  .article-content .table-container tr.total-row {
                    background: #F8FAFC;
                    font-weight: 600;
                  }
                  .article-content .table-container tr.total-row:first-of-type td {
                    border-bottom: 2px solid #2563EB;
                  }
                  .article-content .table-container tbody tr:last-child td {
                    border-bottom: none;
                  }
                  .article-content .note-box {
                    margin: 2.5em 0;
                    padding: 1.25em 1.5em;
                    background: #FEF9E7;
                    border-left: 3px solid #F59E0B;
                    border-radius: 6px;
                    font-size: 0.9em;
                  }
                  .article-content .note-box p {
                    font-size: 0.95rem !important;
                    line-height: 1.7 !important;
                    margin: 0 !important;
                    color: #78350F;
                  }
                  .article-content .note-box strong {
                    color: #92400E;
                    font-weight: 600;
                  }
                  .article-content .calculation-steps {
                    margin: 2.5em 0;
                    padding: 1.5em;
                    background: #F8FAFC;
                    border-radius: 8px;
                    border: 1px solid #E5E7EB;
                  }
                  .article-content .calculation-step {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;
                    padding: 1em 0;
                    border-bottom: 1px dashed #E5E7EB;
                  }
                  .article-content .calculation-step:last-of-type {
                    border-bottom: none;
                  }
                  .article-content .step-label {
                    font-size: 0.85em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                  }
                  .article-content .step-formula {
                    font-size: 1em;
                    color: #0F172A;
                    font-family: 'Courier New', monospace;
                    line-height: 1.6;
                    word-break: break-word;
                  }
                  .article-content .calculation-result {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5em;
                    padding: 1.25em;
                    margin-top: 0.5em;
                    background: #EFF6FF;
                    border-radius: 6px;
                    border-left: 4px solid #2563EB;
                  }
                  .article-content .result-label {
                    font-size: 0.85em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                  }
                  .article-content .result-value {
                    font-size: 1.1em;
                    color: #0F172A;
                    font-family: 'Courier New', monospace;
                  }
                  .article-content .result-value strong {
                    color: #2563EB;
                    font-size: 1.2em;
                  }
                  .article-content .wacc-formula-container {
                    margin: 2.5em 0;
                    padding: 2em;
                    background: #F8FAFC;
                    border-radius: 12px;
                    border: 1px solid #E5E7EB;
                  }
                  .article-content .formula-main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1em;
                    padding: 1.5em;
                    background: white;
                    border-radius: 8px;
                    margin-bottom: 2em;
                  }
                  .article-content .formula-label {
                    font-size: 1.2em;
                    font-weight: 600;
                    color: #2563EB;
                  }
                  .article-content .formula-parts {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5em;
                  }
                  .article-content .formula-part {
                    display: flex;
                    align-items: center;
                    gap: 0.4em;
                    padding: 0.5em 0.8em;
                    background: #F1F5F9;
                    border-radius: 6px;
                  }
                  .article-content .fraction {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    font-size: 1.1em;
                    font-weight: 600;
                  }
                  .article-content .numerator,
                  .article-content .denominator {
                    color: #0F172A;
                    padding: 0.1em 0.3em;
                  }
                  .article-content .divider {
                    width: 100%;
                    height: 2px;
                    background: #2563EB;
                    margin: 0.15em 0;
                  }
                  .article-content .multiply {
                    color: #64748B;
                    font-size: 1.2em;
                  }
                  .article-content .plus {
                    color: #2563EB;
                    font-size: 1.5em;
                    font-weight: 600;
                  }
                  .article-content .variable {
                    color: #2563EB;
                    font-weight: 600;
                    font-size: 1.1em;
                  }
                  .article-content .parenthesis {
                    color: #0F172A;
                    font-weight: 500;
                  }
                  .article-content .variables-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                    gap: 1em;
                  }
                  .article-content .variable-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5em;
                    padding: 1em;
                    background: white;
                    border-radius: 8px;
                    border: 1px solid #E5E7EB;
                    text-align: center;
                  }
                  .article-content .var-symbol {
                    font-size: 1.5em;
                    font-weight: 700;
                    color: #2563EB;
                    font-style: italic;
                  }
                  .article-content .var-description {
                    font-size: 0.85em;
                    color: #64748B;
                    line-height: 1.3;
                  }
                  .article-content .wacc-calculation-container {
                    margin: 2.5em 0;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5em;
                  }
                  .article-content .calc-step-card,
                  .article-content .calc-result-card {
                    padding: 1.5em;
                    background: white;
                    border-radius: 10px;
                    border: 1px solid #E5E7EB;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                  }
                  .article-content .calc-result-card {
                    background: linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%);
                    border-color: #2563EB;
                  }
                  .article-content .step-header,
                  .article-content .result-header {
                    font-size: 0.9em;
                    font-weight: 600;
                    color: #2563EB;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 1em;
                  }
                  .article-content .result-header {
                    color: #1E40AF;
                  }
                  .article-content .calc-formula {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.8em;
                  }
                  .article-content .calc-label {
                    font-size: 1.1em;
                    font-weight: 600;
                    color: #2563EB;
                  }
                  .article-content .calc-parts {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5em;
                  }
                  .article-content .calc-part {
                    display: flex;
                    align-items: center;
                    gap: 0.4em;
                    padding: 0.4em 0.7em;
                    background: #F8FAFC;
                    border-radius: 6px;
                  }
                  .article-content .calc-fraction {
                    display: inline-flex;
                    flex-direction: column;
                    align-items: center;
                    font-weight: 600;
                  }
                  .article-content .calc-num,
                  .article-content .calc-den {
                    color: #0F172A;
                    padding: 0.1em 0.3em;
                    font-size: 0.95em;
                  }
                  .article-content .calc-div {
                    width: 100%;
                    height: 2px;
                    background: #2563EB;
                    margin: 0.15em 0;
                  }
                  .article-content .calc-op {
                    color: #64748B;
                    font-size: 1.1em;
                  }
                  .article-content .calc-plus {
                    color: #2563EB;
                    font-size: 1.4em;
                    font-weight: 600;
                  }
                  .article-content .calc-equals {
                    color: #1E40AF;
                    font-size: 1.4em;
                    font-weight: 700;
                  }
                  .article-content .calc-val {
                    color: #0F172A;
                    font-weight: 600;
                  }
                  .article-content .calc-paren {
                    color: #0F172A;
                    font-weight: 500;
                  }
                  .article-content .calc-final {
                    color: #2563EB;
                    font-size: 1.5em;
                    font-weight: 700;
                    padding: 0.2em 0.5em;
                    background: white;
                    border-radius: 6px;
                  }
                `}</style>

                <NewsletterInline />
              </>
            )}
          </section>

          {/* Author Bio */}
          <div className="container mx-auto px-6 md:px-12 max-w-3xl pb-12 md:pb-16">
            <AuthorBio />
          </div>

          {/* Article Footer */}
          <div className="container mx-auto px-6 md:px-12 max-w-3xl pb-20 md:pb-32">
            <div className="pt-12 border-t border-[#E5E7EB]">
              <Link
                to="/blog"
                className="group inline-flex items-center gap-3 text-[#132A4A]/80 hover:text-[#2563EB] transition-colors font-medium text-lg"
              >
                <ArrowRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                <span>Ver todos os textos</span>
              </Link>
            </div>
          </div>

        </article>

      </main>

      <Footer />
    </div>
  );
}