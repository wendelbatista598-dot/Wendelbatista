const ACADEMIC_HISTORY = [
  {
    degree: "Mestrado em Administração Pública",
    school: "IDP - Cursando",
    year: "2026",
  },
  {
    degree: "MBA em Banking",
    school: "IBMEC",
    year: "2025",
  },
  {
    degree: "Especialização em Gestão Financeira",
    school: "FGV",
    year: "2024",
  },
  {
    degree: "Antropologia",
    school: "Universidade de Brasília",
    year: "2022",
  },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left Column: Manifesto */}
        <div
          className="relative pl-8 md:pl-12 border-l-[1.5px] border-[#E5E7EB]"
        >
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-12">Manifesto</h2>
           
           <div className="space-y-6 text-base md:text-lg font-light text-[#132A4A]/90 leading-relaxed font-sans text-justify">
             <p>
               Economia e política são diferentes manifestações da organização da vida coletiva. Interesso-me por esses campos porque eles revelam como uma sociedade imagina o próprio futuro.
             </p>
             <p>
               <span className="text-[#2563EB] font-bold">
                 Foi perseguindo esse interesse que construí minha trajetória profissional.
               </span>
             </p>
             <p>
               O Brasil é um território feito de misturas. Uma nação formada pelo encontro de culturas.<br />
               Talvez venha daí algo de tropical na minha forma de ver o mundo: uma atenção à complexidade e uma vontade de enxergar a realidade para além da abstração teórica.
             </p>
             <p>
               As finanças, nesse sentido, são uma lente para compreender relações sociais e estruturas de poder. No fundo, meu interesse está nesse encontro entre pessoas e instituições.
             </p>
           </div>
        </div>

        {/* Right Column: Academic Formation */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0F172A] mb-12 text-left">
            Formação <span className="text-[#2563EB]">Acadêmica</span>
          </h2>

          <div className="space-y-12 relative">
             {/* Timeline Line */}
             <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-[#E5E7EB] hidden lg:block" />

             {ACADEMIC_HISTORY.map((item, i) => (
               <div
                 key={i}
                 className="relative lg:pl-10 flex flex-col items-start text-left group"
               >
                 {/* Dot */}
                 <div className="absolute left-[4px] top-2.5 w-[7px] h-[7px] rounded-full bg-[#E5E7EB] group-hover:bg-[#2563EB] transition-colors hidden lg:block ring-4 ring-[#F8FAFC]" />
                 
                 <span className="text-sm font-medium text-[#2563EB] tracking-widest mb-2 font-mono uppercase">
                   {item.year}
                 </span>
                 <h3 className="text-xl font-bold font-serif text-[#0F172A]">
                   {item.degree}
                 </h3>
                 <p className="text-[#132A4A]/80 mt-1.5 font-light">
                   {item.school}
                 </p>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
