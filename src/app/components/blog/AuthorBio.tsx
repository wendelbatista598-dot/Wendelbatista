import wendelPhoto from "figma:asset/99752162f0ee89e3d6e467e295e6705e9967e3ec.png";

export function AuthorBio() {
  return (
    <div className="bg-white rounded-lg border border-[#E5E7EB]/50 p-4 md:p-6 shadow-[0_2px_8px_rgb(0,0,0,0.02)]">
      <div className="flex flex-row gap-4 items-start">
        {/* Foto */}
        <div className="shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-[0_2px_8px_rgb(0,0,0,0.06)]">
            <img
              src={wendelPhoto}
              alt="Wendel Batista"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-medium text-[#0F172A] mb-2 font-[Playfair_Display]">
            Wendel Batista
          </h3>
          <p className="text-[#132A4A]/70 leading-relaxed font-[Playfair_Display] text-[13px] md:text-[14px]">
            Antropólogo, especialista em Gestão Financeira, possui MBA em Banking e mestrado em Administração Pública em curso. Atua no setor financeiro com foco em soluções aplicadas.
          </p>
        </div>
      </div>
    </div>
  );
}
