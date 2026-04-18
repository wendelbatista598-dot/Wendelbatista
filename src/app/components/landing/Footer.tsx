import { Linkedin, Mail, Send, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-20 relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent animate-pulse opacity-50" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        
        {/* Brand */}
        <Link to="/" className="text-center md:text-left hover:opacity-80 transition-opacity cursor-pointer">
           <h2 className="text-2xl font-serif font-bold mb-3">Wendel Batista</h2>
           <p className="text-[#E5E7EB]/70 text-sm font-light tracking-wide">Estratégia, Antropologia &amp; Tecnologia.</p>
        </Link>

        {/* Newsletter Signup (Mock) */}
        <div className="w-full max-w-md">
           <p className="text-sm text-[#E5E7EB]/70 mb-4 text-center md:text-left font-light tracking-wide">Assine minha newsletter mensal</p>
           <form 
             className="flex gap-2"
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
                className="flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#60A5FA] transition-colors text-white placeholder:text-[#E5E7EB]/40 font-light"
                required
              />
              <button type="submit" className="px-6 py-3.5 bg-[#2563EB] hover:bg-[#60A5FA] rounded-xl transition-colors flex items-center justify-center">
                 <Send className="w-4 h-4" strokeWidth={1.5} />
              </button>
           </form>
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
           <a 
             href="mailto:wendel@batista.pw" 
             className="text-[#E5E7EB]/70 hover:text-[#60A5FA] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
             title="E-mail"
           >
             <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#60A5FA] group-hover:bg-[#60A5FA]/10 transition-all">
                <Mail className="w-4 h-4" strokeWidth={2} />
             </div>
           </a>
           <a 
             href="https://wa.me/5577998348691" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-[#E5E7EB]/70 hover:text-[#60A5FA] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
             title="WhatsApp"
           >
             <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#60A5FA] group-hover:bg-[#60A5FA]/10 transition-all">
                <MessageCircle className="w-4 h-4" strokeWidth={2} />
             </div>
           </a>
           <a 
             href="https://www.linkedin.com/in/wendelcruz/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-[#E5E7EB]/70 hover:text-[#60A5FA] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
             title="LinkedIn"
           >
             <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#60A5FA] group-hover:bg-[#60A5FA]/10 transition-all">
                <Linkedin className="w-4 h-4" strokeWidth={2} />
             </div>
           </a>
        </div>

      </div>

      <div className="text-center text-[#E5E7EB]/50 text-xs mt-20 font-mono tracking-wider">
        &copy; {new Date().getFullYear()} Wendel Batista. Todos os direitos reservados.
      </div>
    </footer>
  );
}