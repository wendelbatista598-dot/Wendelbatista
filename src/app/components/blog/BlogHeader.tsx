import { Link } from "react-router";
import { BookOpen, Home } from "lucide-react";

export function BlogHeader() {
  return (
    <Link 
      to="/" 
      className="block relative z-20 w-full bg-[#2563EB] hover:bg-[#1d4ed8] transition-all duration-300 cursor-pointer group"
    >
      {/* Decorative top border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 py-4 md:py-5">
        <div className="flex items-center justify-center text-center">
          
          {/* Name */}
          <h1 
            className="text-white font-medium text-xl md:text-2xl tracking-tight"
            style={{ fontFamily: 'Playfair Display, Georgia, serif' }}
          >
            Wendel Batista
          </h1>

        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </Link>
  );
}