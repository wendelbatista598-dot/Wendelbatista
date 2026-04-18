import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { getLatestPost } from "../../data/blogPosts";

export function LatestPost() {
  // Obtém automaticamente o post mais recente
  const latestPost = getLatestPost();

  return (
    <section className="relative py-12 md:py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-[2px] w-8 bg-[#0F172A]" />
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#132A4A]/60">
              Blog
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0F172A] font-medium tracking-tight">
            Último texto
          </h2>
        </div>

        {/* Featured Post */}
        <Link 
          to={`/blog/${latestPost.slug}`}
          className="group block"
        >
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">
            
            {/* Image */}
            <div className="relative aspect-[4/3] md:aspect-[16/11] rounded-2xl overflow-hidden bg-[#E5E7EB]">
              <img
                src={latestPost.coverImage}
                alt={latestPost.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center space-y-4 md:space-y-5">
              
              {/* Meta */}
              <div className="flex items-center gap-3 text-sm">
                <span className="px-3 py-1.5 bg-[#2563EB]/10 text-[#2563EB] rounded-full font-medium tracking-wide text-xs">
                  {latestPost.category}
                </span>
                <span className="text-[#132A4A]/60 font-light text-xs">
                  {latestPost.date}
                </span>
                <span className="text-[#132A4A]/40">·</span>
                <span className="text-[#132A4A]/60 font-light text-xs">
                  {latestPost.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl lg:text-3xl text-[#0F172A] leading-tight tracking-tight group-hover:text-[#2563EB] transition-colors duration-300">
                {latestPost.title}
              </h3>

              {/* Description */}
              <p className="text-base lg:text-lg text-[#132A4A]/80 leading-relaxed font-light">
                {latestPost.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-[#2563EB] font-medium text-base group-hover:translate-x-2 transition-transform duration-300">
                  Ler texto completo
                </span>
                <ArrowRight className="w-4 h-4 text-[#2563EB] group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>

          </div>
        </Link>

        {/* Link to Blog Archive */}
        <div className="mt-10 md:mt-12 pt-8 border-t border-[#E5E7EB]">
          <Link 
            to="/blog"
            className="group inline-flex items-center gap-2 text-[#132A4A]/80 hover:text-[#2563EB] transition-colors font-medium text-sm"
          >
            <span>Ver todos os textos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}