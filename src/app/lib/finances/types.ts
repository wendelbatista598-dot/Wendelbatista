export type TransactionType = "income" | "expense" | "investment";

export type Owner = "Pessoa 1" | "Pessoa 2" | "Casal";

export interface Transaction {
  id: string;
  date: string; // YYYY-MM-DD
  type: TransactionType;
  category: string;
  description: string;
  amount: number;
  owner: Owner;
}

export const CATEGORIES: Record<TransactionType, string[]> = {
  income: ["Salário", "Renda extra", "Outras receitas"],
  expense: [
    "Moradia",
    "Contas (água/luz/internet)",
    "Alimentação",
    "Transporte",
    "Saúde",
    "Lazer",
    "Educação",
    "Outras despesas",
  ],
  investment: ["Reserva de emergência", "Renda fixa", "Renda variável", "Outros investimentos"],
};

export const TYPE_LABELS: Record<TransactionType, string> = {
  income: "Receita",
  expense: "Despesa",
  investment: "Investimento",
};
