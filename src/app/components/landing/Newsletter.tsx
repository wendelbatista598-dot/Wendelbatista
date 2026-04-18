import { ArrowRight, Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 lg:py-28 relative z-10 bg-[#0F172A] text-white overflow-hidden">
      {/* Decorative background elements for tech feel */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2563EB]/10 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#2563EB]/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 w-full max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-8 lg:w-12 bg-[#3B82F6]" />
              <span className="font-serif text-sm lg:text-base text-[#94A3B8] tracking-[0.15em] uppercase font-bold flex items-center gap-2">
                <Mail className="w-4 h-4" /> Newsletter
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] text-white mb-6">
              Perspectivas sobre <br />
              <span className="text-[#60A5FA] italic font-light" style={{ fontFamily: '"Playfair Display", serif' }}>finanças, gestão</span>
              <br /> e inovação.
            </h2>
            
            <p className="text-lg text-[#94A3B8] font-light leading-relaxed mb-10 max-w-xl">
              Receba diretamente na sua caixa de entrada reflexões semanais, análises estratégicas do mercado e insights sobre o comportamento econômico.
            </p>
            
            <form 
              className="flex flex-col gap-3 w-full max-w-xl"
              action="https://assets.mailerlite.com/jsonp/2201741/forms/182242667691771631/subscribe"
              data-code=""
              method="post"
              target="_blank"
            >
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />
              <input 
                type="email" 
                name="fields[email]"
                placeholder="Seu melhor e-mail" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA] transition-all text-base"
                required
              />
              <button 
                type="submit"
                className="w-full sm:w-auto self-start group bg-[#2563EB] hover:bg-[#3B82F6] text-white rounded-full px-8 py-3.5 font-medium transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgb(37,99,235,0.2)] hover:shadow-[0_6px_20px_rgb(37,99,235,0.3)] hover:-translate-y-0.5 text-sm md:text-base whitespace-nowrap"
              >
                Inscrever-se
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
          
          {/* Asymmetric Visual Element */}
          <div className="hidden lg:flex flex-1 justify-end w-full">
            <div className="relative w-72 h-72 border border-white/10 rounded-full flex items-center justify-center">
              {/* Spinning/tech ring effect */}
              <div className="absolute inset-[-1px] border border-transparent border-t-[#60A5FA]/30 rounded-full animate-spin [animation-duration:10s]" />
              <div className="absolute inset-[-15px] border border-transparent border-b-[#2563EB]/20 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]" />
              
              <Mail className="w-24 h-24 text-[#60A5FA] opacity-80" strokeWidth={0.5} />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}