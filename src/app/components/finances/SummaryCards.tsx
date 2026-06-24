import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type { Transaction } from "../../lib/finances/types";

interface SummaryCardsProps {
  transactions: Transaction[];
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function SummaryCards({ transactions }: SummaryCardsProps) {
  const income = transactions.filter((t) => t.type === "income").reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions.filter((t) => t.type === "expense").reduce((sum, t) => sum + t.amount, 0);
  const investment = transactions.filter((t) => t.type === "investment").reduce((sum, t) => sum + t.amount, 0);
  const balance = income - expense - investment;

  const cards = [
    { label: "Receitas", value: income, className: "text-emerald-600" },
    { label: "Despesas", value: expense, className: "text-red-600" },
    { label: "Investimentos", value: investment, className: "text-blue-600" },
    { label: "Saldo", value: balance, className: balance >= 0 ? "text-emerald-600" : "text-red-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardHeader>
            <CardTitle className="text-muted-foreground text-sm">{card.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-2xl font-semibold ${card.className}`}>
              {formatCurrency(card.value)}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
