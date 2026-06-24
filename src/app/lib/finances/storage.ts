import { useEffect, useState } from "react";
import type { Transaction } from "./types";

const STORAGE_KEY = "couple-finances-transactions";

function readTransactions(): Transaction[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Transaction[]) : [];
  } catch {
    return [];
  }
}

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => readTransactions());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(transaction: Transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  function updateTransaction(transaction: Transaction) {
    setTransactions((prev) =>
      prev.map((t) => (t.id === transaction.id ? transaction : t)),
    );
  }

  function removeTransaction(id: string) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  return { transactions, addTransaction, updateTransaction, removeTransaction };
}
