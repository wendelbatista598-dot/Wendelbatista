import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

interface MonthSelectorProps {
  month: number; // 0-11
  year: number;
  onChange: (month: number, year: number) => void;
}

const MONTH_NAMES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

export function MonthSelector({ month, year, onChange }: MonthSelectorProps) {
  function goToPrevious() {
    if (month === 0) onChange(11, year - 1);
    else onChange(month - 1, year);
  }

  function goToNext() {
    if (month === 11) onChange(0, year + 1);
    else onChange(month + 1, year);
  }

  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" size="icon" onClick={goToPrevious} aria-label="Mês anterior">
        <ChevronLeft className="size-4" />
      </Button>
      <span className="min-w-[10rem] text-center font-medium">
        {MONTH_NAMES[month]} {year}
      </span>
      <Button variant="outline" size="icon" onClick={goToNext} aria-label="Próximo mês">
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
