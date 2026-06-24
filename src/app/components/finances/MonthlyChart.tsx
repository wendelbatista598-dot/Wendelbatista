import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import type { Transaction } from "../../lib/finances/types";

interface MonthlyChartProps {
  transactions: Transaction[];
  month: number;
  year: number;
  monthsBack?: number;
}

const MONTH_SHORT = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez",
];

const chartConfig: ChartConfig = {
  income: { label: "Receitas", color: "var(--chart-2)" },
  expense: { label: "Despesas", color: "var(--chart-1)" },
  investment: { label: "Investimentos", color: "var(--chart-3)" },
};

export function MonthlyChart({ transactions, month, year, monthsBack = 6 }: MonthlyChartProps) {
  const data = Array.from({ length: monthsBack }, (_, index) => {
    const offset = monthsBack - 1 - index;
    const date = new Date(year, month - offset, 1);
    const targetMonth = date.getMonth();
    const targetYear = date.getFullYear();

    const monthTransactions = transactions.filter((t) => {
      const [tYear, tMonth] = t.date.split("-").map(Number);
      return tMonth - 1 === targetMonth && tYear === targetYear;
    });

    return {
      label: `${MONTH_SHORT[targetMonth]}/${String(targetYear).slice(2)}`,
      income: monthTransactions.filter((t) => t.type === "income").reduce((s, t) => s + t.amount, 0),
      expense: monthTransactions.filter((t) => t.type === "expense").reduce((s, t) => s + t.amount, 0),
      investment: monthTransactions.filter((t) => t.type === "investment").reduce((s, t) => s + t.amount, 0),
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolução dos últimos {monthsBack} meses</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-auto h-[300px] w-full">
          <BarChart data={data}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} width={40} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="income" fill="var(--color-income)" radius={4} />
            <Bar dataKey="expense" fill="var(--color-expense)" radius={4} />
            <Bar dataKey="investment" fill="var(--color-investment)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
