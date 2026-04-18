import React from "react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Guia de Bloco BH",
    role: "Idealizador",
    type: "Produto Digital",
    description: "Plataforma digital inteligente para descobrir blocos de carnaval com busca avançada, geolocalização e personalização de roteiros.",
    link: "https://blocobh.com/",
    highlight: true,
  },
  {
    title: "Desenvolvimento Institucional do CIC/UnB",
    role: "Coordenador",
    type: "Desenvolvimento Tecnológico",
    description: "Promoção do desenvolvimento institucional do Departamento de Ciência da Computação da UnB. Foco no fortalecimento de políticas acadêmicas, difusão científica e relações interinstitucionais.",
  },
  {
    title: "CCOp Mv — Exército Brasileiro",
    role: "Participante",
    type: "Desenvolvimento Tecnológico",
    description: "Estudos empíricos em Engenharia de Sistemas de Sistemas voltados para o Centro de Coordenação de Operações Móvel (CCOp Mv) do Exército Brasileiro.",
  },
  {
    title: "Políticas Públicas no Distrito de Ibiraba",
    role: "Coordenador",
    type: "Pesquisa Acadêmica",
    description: "Investigação dos arranjos socioeconômicos na comunidade brejeira para gerar subsídios técnicos visando a criação de políticas públicas de desenvolvimento e proteção social.",
  },
  {
    title: "Novas Configurações Comunitárias",
    role: "Pesquisador",
    type: "Pesquisa Acadêmica",
    description: "Mapeamento das novas concepções identitárias e de reprodução social no brejo do Catu, investigando a articulação da comunidade entre preservação cultural e novas práticas.",
  },
];

const HONORS = [
  {
    title: "Certificação CPA-20",
    institution: "ANBIMA",
    description: "Certificação Profissional ANBIMA - Série 20, atestando qualificação para atuar na distribuição de produtos de investimento e gestão de recursos.",
  },
  {
    title: "Servidor Homenageado",
    institution: "Universidade de Brasília (UnB)",
    description: "Homenageado pelas turmas formandas dos cursos de Engenharia de Computação, Ciência da Computação e Licenciatura em Computação.",
  },
  {
    title: "Medalhista de Prata — Xadrez em Grupo",
    institution: "Jogos Integrados do IFBA",
    description: "2º Lugar no torneio de xadrez por equipes do Instituto Federal da Bahia.",
  },
];

export function Timeline() {
  return (
    <section className="py-32 relative z-10 bg-white border-y border-[#E5E7EB]/70">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Projects Section */}
        <div className="grid lg:grid-cols-[1.2fr_2.5fr] gap-12 lg:gap-20 mb-32 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0F172A] leading-tight">
              Projetos de <br className="hidden lg:block" />
              <span className="text-[#2563EB]">Destaque</span>
            </h2>
            <p className="mt-6 text-[#132A4A]/70 font-light leading-relaxed max-w-sm">
              Iniciativas unindo teoria acadêmica e aplicação prática para o desenvolvimento tecnológico e social.
            </p>
          </div>

          {/* Scrolling Right Column (List) */}
          <div className="flex flex-col border-t border-[#E5E7EB] mt-2 lg:mt-0">
            {PROJECTS.map((item, idx) => {
              const ContentWrapper = item.link ? "a" : "div";
              const wrapperProps = item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {};
              
              return (
                <ContentWrapper
                  key={idx}
                  {...wrapperProps}
                  className={`group py-10 md:py-12 border-b transition-colors -mx-6 px-6 lg:mx-0 lg:px-6 rounded-2xl lg:rounded-none block ${
                    item.highlight 
                      ? "bg-[#2563EB]/5 hover:bg-[#2563EB]/10 border-[#2563EB]/20 border-l-4 border-l-[#2563EB]" 
                      : "border-[#E5E7EB] hover:bg-[#F8FAFC]/50"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className={`text-2xl md:text-3xl font-serif font-bold transition-colors ${
                          item.highlight ? "text-[#2563EB]" : "text-[#0F172A] group-hover:text-[#2563EB]"
                        }`}>
                          {item.title}
                        </h3>
                        {item.link && (
                          <ArrowUpRight className={`w-6 h-6 transition-transform ${
                            item.highlight ? "text-[#2563EB] group-hover:translate-x-1 group-hover:-translate-y-1" : "text-[#132A4A]/30 group-hover:text-[#2563EB]"
                          }`} />
                        )}
                      </div>
                      
                      {/* Taxonomy Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        <span className={`text-[11px] font-bold px-3 py-1.5 border rounded-full uppercase tracking-widest ${
                          item.highlight ? "bg-white/60 border-[#2563EB]/30 text-[#2563EB]" : "bg-[#F8FAFC] border-[#E5E7EB] text-[#64748B]"
                        }`}>
                          {item.type}
                        </span>
                        <span className={`text-[11px] font-bold px-3 py-1.5 border rounded-full uppercase tracking-widest ${
                          item.highlight ? "bg-white/60 border-[#2563EB]/30 text-[#0F172A]" : "bg-[#F8FAFC] border-[#E5E7EB] text-[#0F172A]"
                        }`}>
                          Papel: <span className={item.highlight ? "text-[#2563EB]" : "text-[#64748B]"}>{item.role}</span>
                        </span>
                      </div>

                      <p className={`font-light leading-relaxed text-base md:text-lg max-w-3xl mb-4 ${
                        item.highlight ? "text-[#132A4A]" : "text-[#132A4A]/80"
                      }`}>
                        {item.description}
                      </p>
                      
                      {item.highlight && (
                        <div className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-[#2563EB] group-hover:text-[#1D4ED8] transition-colors">
                          <span className="border-b border-[#2563EB]/30 group-hover:border-[#1D4ED8] pb-0.5 transition-colors">Conhecer o projeto</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      )}
                    </div>
                  </div>
                </ContentWrapper>
              );
            })}
          </div>

        </div>

        {/* Honors Section */}
        <div className="grid lg:grid-cols-[1.2fr_2.5fr] gap-12 lg:gap-20 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0F172A] leading-tight">
              Certificações <span className="font-sans font-light italic text-[#2563EB]">&amp;</span> <br className="hidden lg:block" />
              Honrarias
            </h2>
          </div>

          {/* Scrolling Right Column (List) */}
          <div className="flex flex-col border-t border-[#E5E7EB] mt-2 lg:mt-0">
            {HONORS.map((item, idx) => (
              <div 
                key={idx} 
                className="group py-10 md:py-12 border-b border-[#E5E7EB] hover:bg-[#F8FAFC]/50 transition-colors -mx-6 px-6 lg:mx-0 lg:px-6 rounded-2xl lg:rounded-none"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-[#132A4A] mb-4">
                      {item.institution}
                    </p>
                    <p className="text-[#132A4A]/80 font-light leading-relaxed text-base md:text-lg max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}