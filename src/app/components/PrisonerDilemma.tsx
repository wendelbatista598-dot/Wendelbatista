import { useState } from "react";

type Choice = "silent" | "betray" | null;

export function PrisonerDilemma() {
  const [userChoice, setUserChoice] = useState<Choice>(null);
  const [showResult, setShowResult] = useState(false);

  const handleChoice = (choice: Choice) => {
    setUserChoice(choice);
    setShowResult(true);
  };

  const resetChoice = () => {
    setUserChoice(null);
    setShowResult(false);
  };

  return (
    <div className="my-16 md:my-20 not-prose">
      <div className="relative border border-[#E5E7EB] rounded-2xl bg-[#FAFBFC] px-8 md:px-12 py-10 md:py-14 shadow-[0_2px_20px_rgba(15,23,42,0.04)]">
        
        {!showResult ? (
          // Estado inicial: pergunta e opções
          <div className="space-y-8">
            {/* Label */}
            <div className="flex items-center justify-center">
              
            </div>

            {/* Pergunta principal */}
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight leading-tight text-center text-[#2563eb]">
              Sem poder combinar comigo, o que você faria?
            </h3>

            {/* Texto de apoio */}
            <p className="text-center text-[#132A4A]/70 font-light text-base md:text-lg max-w-md mx-auto">
              Escolha uma das opções para ver o desfecho.
            </p>

            {/* Botões de escolha */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button
                onClick={() => handleChoice("silent")}
                className="group relative w-full sm:w-auto px-8 py-4 border border-[#E5E7EB] bg-white rounded-xl
                  hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300
                  font-medium text-[#132A4A] hover:text-[#2563EB]"
              >
                Ficar em silêncio
              </button>
              
              <button
                onClick={() => handleChoice("betray")}
                className="group relative w-full sm:w-auto px-8 py-4 border border-[#E5E7EB] bg-white rounded-xl
                  hover:border-[#2563EB] hover:bg-[#2563EB]/5 transition-all duration-300
                  font-medium text-[#132A4A] hover:text-[#2563EB]"
              >
                Trair
              </button>
            </div>
          </div>
        ) : (
          // Estado de resultado
          <div className="space-y-8 animate-[fadeIn_0.5s_ease-in-out]">
            {/* Label de resultado */}
            <div className="flex items-center justify-center">
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#2563EB]/80 border-b border-[#2563EB]/30 pb-1">
                Desfecho
              </span>
            </div>

            {/* Resultado principal */}
            <div className="text-center space-y-6">
              <h4 className="font-serif text-3xl md:text-4xl font-medium tracking-tight leading-tight text-[#8f1d2c]">
                {userChoice === "betray" 
                  ? "Você receberia 5 anos de pena."
                  : "Sua pena seria de 20 anos."}
              </h4>

              <p className="text-[#132A4A]/70 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
  {userChoice === "betray"
    ? "Eu também traí. Para mim, essa era a melhor escolha: se eu ficasse em silêncio enquanto você me traía, minha pena seria de 20 anos. Traindo também, reduzi minha pena para 5."
    : "Eu traí e não fui preso. Para mim, essa era a melhor escolha: se eu ficasse em silência, pegaria um ano de prisão."}
</p>
            </div>

            {/* Botão de refazer */}
            <div className="flex justify-center pt-4">
              <button
                onClick={resetChoice}
                className="text-sm font-medium text-[#132A4A]/60 hover:text-[#2563EB] transition-colors
                  border-b border-transparent hover:border-[#2563EB]/50 pb-1"
              >
                Refazer escolha
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
