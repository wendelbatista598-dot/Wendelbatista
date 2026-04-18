import { ArrowDownRight, ArrowRight, Linkedin, MessageCircle, Mail } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { FlipWords } from "../ui/flip-words";
import { Link } from "react-router";
import wendelPhoto from "figma:asset/99752162f0ee89e3d6e467e295e6705e9967e3ec.png";

const ANIMATED_WORDS = [
  "finanças",
  "gestão",
  "estratégia",
  "instituições",
  "incentivos",
  "comportamento",
  "mercado",
  "inovação"
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16 lg:gap-24">
          
          {/* Left Column: Text Content (Integrated, no card) */}
          <div className="flex-1 w-full flex flex-col justify-between py-2 lg:py-8">
            
            <div className="flex flex-col items-start">
              {/* Header / Name */}
              <h1 className="font-serif flex flex-row flex-wrap lg:flex-col mb-4 lg:mb-6 w-full gap-x-3 sm:gap-x-4 lg:gap-y-0 relative">
                <span className="text-[3.5rem] sm:text-[5.5rem] lg:text-[8.5rem] xl:text-[10rem] leading-[1] lg:leading-[0.85] text-[#2563EB] tracking-tighter">
                  Wendel
                </span>
                <span className="text-[3.5rem] sm:text-[5.5rem] lg:text-[5rem] xl:text-[6rem] leading-[1] lg:leading-[0.85] font-medium text-slate-500 tracking-tighter lg:ml-40 xl:ml-64 lg:-mt-2">
                  Batista
                </span>
              </h1>

              {/* Main Title / Role */}
              <h2 className="font-serif flex items-center gap-3 lg:gap-6 mb-8 lg:mb-12 w-full">
                <div className="h-[2px] w-8 lg:w-12 bg-[#0F172A] shrink-0" />
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-none font-medium text-[#0F172A] tracking-tight">
                    Finanças
                  </span>
                  <span 
                    className="text-3xl sm:text-4xl lg:text-[3.5rem] xl:text-[4rem] italic text-[#0F172A] font-light leading-none transform translate-y-0.5"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    &amp;
                  </span>
                  <span className="text-3xl sm:text-4xl lg:text-[3rem] xl:text-[3.5rem] leading-none font-bold text-[#0F172A] tracking-tight">
                    Gestão
                  </span>
                </div>
              </h2>

              {/* Animated Signature Sentence */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#0F172A] mb-6 leading-relaxed font-light">
                Pensar 
                <FlipWords 
                  words={ANIMATED_WORDS} 
                  className="text-[#2563EB] font-medium" 
                /> 
                é pensar pessoas.
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-[#132A4A]/80 max-w-lg font-light leading-relaxed mb-10">
                Análise estratégica do sistema financeiro a partir de incentivos, instituições e comportamento econômico.
              </p>
            </div>

            <div className="flex flex-col items-start">
              {/* Buttons */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <a 
                  href="#manifesto"
                  className="flex-1 sm:flex-none group px-4 py-3 sm:px-8 sm:py-4 bg-[#0F172A] text-white rounded-full transition-all hover:bg-[#2563EB] shadow-[0_8px_20px_rgb(15,23,42,0.12)] hover:shadow-[0_12px_25px_rgb(37,99,235,0.25)] hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3 text-[13px] sm:text-sm lg:text-base font-medium whitespace-nowrap"
                >
                  Manifesto
                  <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
                
                <Link 
                  to="/blog"
                  className="flex-1 sm:flex-none group px-4 py-3 sm:px-8 sm:py-4 bg-[#2563EB] border border-[#2563EB] text-white rounded-full hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all flex items-center justify-center gap-2 sm:gap-3 text-[13px] sm:text-sm lg:text-base font-medium whitespace-nowrap shadow-[0_8px_20px_rgb(37,99,235,0.2)] hover:shadow-[0_12px_25px_rgb(37,99,235,0.3)] hover:-translate-y-1"
                >
                  Ler Blog
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-10 pt-8 border-t border-[#E5E7EB] w-full max-w-lg">
              <a 
                href="mailto:wendel@batista.pw" 
                className="flex items-center gap-3 text-[#132A4A]/80 hover:text-[#2563EB] transition-colors font-medium text-sm lg:text-base group"
              >
                <div className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center group-hover:border-[#2563EB] group-hover:bg-[#2563EB]/5 transition-all shadow-[0_4px_10px_rgb(0,0,0,0.03)] group-hover:shadow-[0_4px_15px_rgb(37,99,235,0.15)]">
                  <Mail className="w-4 h-4" />
                </div>
                E-mail
              </a>
              <a 
                href="https://wa.me/5577998348691" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-[#132A4A]/80 hover:text-[#2563EB] transition-colors font-medium text-sm lg:text-base group"
              >
                <div className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center group-hover:border-[#2563EB] group-hover:bg-[#2563EB]/5 transition-all shadow-[0_4px_10px_rgb(0,0,0,0.03)] group-hover:shadow-[0_4px_15px_rgb(37,99,235,0.15)]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                WhatsApp
              </a>
              <a 
                href="https://www.linkedin.com/in/wendelcruz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-[#132A4A]/80 hover:text-[#2563EB] transition-colors font-medium text-sm lg:text-base group"
              >
                <div className="w-10 h-10 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center group-hover:border-[#2563EB] group-hover:bg-[#2563EB]/5 transition-all shadow-[0_4px_10px_rgb(0,0,0,0.03)] group-hover:shadow-[0_4px_15px_rgb(37,99,235,0.15)]">
                  <Linkedin className="w-4 h-4" />
                </div>
                LinkedIn
              </a>
            </div>
            </div>
          </div>

          {/* Right Column: Integrated Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-8 lg:mt-0">
             {/* Offset Decorative Backgrounds (Replaces the "Card" feel with a premium framing) */}
             <div className="absolute inset-0 bg-[#2563EB]/5 rounded-[2.5rem] lg:rounded-[4rem] transform translate-x-4 translate-y-4 lg:translate-x-8 lg:translate-y-8 -z-10 transition-transform duration-700 hover:translate-x-6 hover:translate-y-6" />
             <div className="absolute inset-0 border border-[#E5E7EB] rounded-[2.5rem] lg:rounded-[4rem] transform translate-x-2 translate-y-2 lg:translate-x-4 lg:translate-y-4 -z-10" />

             {/* Main Image Container */}
             <div className="relative aspect-[4/5] w-full rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-[0_20px_60px_rgb(15,23,42,0.08)] group bg-[#F8FAFC]">
                <img 
                  src={wendelPhoto} 
                  alt="Wendel Batista" 
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover object-top transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                {/* Overlay for premium contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 via-transparent to-transparent pointer-events-none opacity-60" />
                <div className="absolute inset-0 bg-[#0F172A]/5 pointer-events-none mix-blend-multiply" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}