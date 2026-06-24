import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { MonthSelector } from "../components/finances/MonthSelector";
import { SummaryCards } from "../components/finances/SummaryCards";
import { TransactionForm } from "../components/finances/TransactionForm";
import { TransactionsTable } from "../components/finances/TransactionsTable";
import { MonthlyChart } from "../components/finances/MonthlyChart";
import { useTransactions } from "../lib/finances/storage";
import type { Transaction } from "../lib/finances/types";
import { SEO } from "../components/blog/SEO";

export function FinancesPage() {
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [formOpen, setFormOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const { transactions, addTransaction, updateTransaction, removeTransaction } = useTransactions();

  const monthTransactions = useMemo(
    () =>
      transactions.filter((t) => {
        const [tYear, tMonth] = t.date.split("-").map(Number);
        return tMonth - 1 === month && tYear === year;
      }),
    [transactions, month, year],
  );

  function handleAddClick() {
    setEditingTransaction(null);
    setFormOpen(true);
  }

  function handleEditClick(transaction: Transaction) {
    setEditingTransaction(transaction);
    setFormOpen(true);
  }

  function handleSave(transaction: Transaction) {
    if (editingTransaction) {
      updateTransaction(transaction);
    } else {
      addTransaction(transaction);
    }
  }

  function handleDelete(id: string) {
    if (confirm("Excluir este lançamento?")) {
      removeTransaction(id);
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#132A4A]">
      <SEO
        title="Finanças do Casal"
        description="Controle pessoal de finanças do casal."
        type="website"
      />

      <div className="container mx-auto flex flex-col gap-6 px-6 py-12 md:px-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-serif font-bold">Finanças do Casal</h1>
          <Button onClick={handleAddClick}>
            <Plus className="size-4" />
            Novo lançamento
          </Button>
        </div>

        <MonthSelector month={month} year={year} onChange={(m, y) => { setMonth(m); setYear(y); }} />

        <SummaryCards transactions={monthTransactions} />

        <MonthlyChart transactions={transactions} month={month} year={year} />

        <Card>
          <CardHeader>
            <CardTitle>Lançamentos do mês</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionsTable
              transactions={monthTransactions}
              onEdit={handleEditClick}
              onDelete={handleDelete}
            />
          </CardContent>
        </Card>
      </div>

      <TransactionForm
        open={formOpen}
        onOpenChange={setFormOpen}
        onSave={handleSave}
        initialTransaction={editingTransaction}
        defaultMonth={month}
        defaultYear={year}
      />
    </div>
  );
}
