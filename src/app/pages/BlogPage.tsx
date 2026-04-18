import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Background } from "../components/landing/Background";
import { Footer } from "../components/landing/Footer";
import { BlogHeader } from "../components/blog/BlogHeader";
import { SEO } from "../components/blog/SEO";
import { getBlogListPosts } from "../data/blogPosts";

export function BlogPage() {
  // Obtém posts com ordenação automática por data
  const posts = getBlogListPosts();

  const featuredPost = posts.find(p => p.featured);
  const otherPosts = posts.filter(p => !p.featured);

  return (
    <div className="relative min-h-screen font-sans bg-[#F8FAFC] text-[#132A4A] overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
      <SEO
        title="Blog"
        description="Espaço provisório quanto o blog principal está em manutenção. Textos sobre economia, cultura e política. Assine a newsletter para receber atualizações."
        type="website"
      />
      <BlogHeader />
      <Background />
      
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-40">
          <div className="container mx-auto px-6 md:px-12 max-w-5xl">
            
            {/* Back to Home */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-[#132A4A]/60 hover:text-[#2563EB] transition-colors mb-12 group"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Voltar para home</span>
            </Link>

            {/* Title */}
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="h-[2px] w-16 bg-[#0F172A]" />
                <span className="text-sm uppercase tracking-[0.2em] font-medium text-[#132A4A]/60">
                  Blog
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#0F172A] font-medium tracking-tight leading-none">
                Blog
              </h1>

              <p className="text-xl md:text-2xl text-[#132A4A]/80 font-light leading-relaxed max-w-3xl"><span className="font-bold">Espaço</span> <span className="font-bold">provisório</span> enquanto o blog principal está em manutenção. Textos sobre economia, cultura e política. Assine a newsletter para receber atualizações.</p>
            </div>

          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="relative py-12 md:py-8 lg:py-10">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              
              <div className="mb-8">
                <span className="text-sm uppercase tracking-[0.2em] font-medium text-[#2563EB]">
                  Em Destaque
                </span>
              </div>

              <Link 
                to={`/blog/${featuredPost.slug}`}
                className="group block"
              >
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  
                  {/* Image */}
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#E5E7EB]">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-6">
                    
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm">
                      <span className="px-4 py-2 bg-[#2563EB]/10 text-[#2563EB] rounded-full font-medium tracking-wide">
                        Negócios
                      </span>
                      <span className="text-[#132A4A]/60 font-light">
                        {featuredPost.date}
                      </span>
                      <span className="text-[#132A4A]/40">·</span>
                      <span className="text-[#132A4A]/60 font-light">
                        {featuredPost.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-3xl lg:text-4xl text-[#0F172A] leading-tight tracking-tight group-hover:text-[#2563EB] transition-colors duration-300">
                      {featuredPost.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-[#132A4A]/80 leading-relaxed font-light">
                      {featuredPost.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-3 pt-2">
                      <span className="text-[#2563EB] font-medium group-hover:translate-x-2 transition-transform duration-300">
                        Ler texto
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#2563EB] group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                </div>
              </Link>

            </div>
          </section>
        )}

        {/* Other Posts */}
        {otherPosts.length > 0 && (
          <section className="relative py-12 md:py-20">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
              
              <div className="mb-12 pb-8 border-b border-[#E5E7EB]">
                <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] font-medium tracking-tight">
                  Todos os textos
                </h2>
              </div>

              <div className="space-y-12">
                {otherPosts.map((post) => (
                  <Link 
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group block pb-12 border-b border-[#E5E7EB] last:border-0 hover:border-[#2563EB]/30 transition-colors"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      
                      {/* Image */}
                      <div className="md:w-1/3 relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#E5E7EB] shrink-0">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
                      <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                        
                        {/* Meta */}
                        <div className="flex items-center gap-3 text-sm">
                          <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full font-medium text-xs tracking-wide">
                            {post.category}
                          </span>
                          <span className="text-[#132A4A]/60 font-light">
                            {post.date}
                          </span>
                          <span className="text-[#132A4A]/40">·</span>
                          <span className="text-[#132A4A]/60 font-light">
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] leading-tight tracking-tight group-hover:text-[#2563EB] transition-colors">
                          {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base text-[#132A4A]/80 leading-relaxed font-light">
                          {post.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 pt-2">
                          <span className="text-[#2563EB] font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                            Ler mais
                          </span>
                          <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>

                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
}