import { useEffect, useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  CATEGORIES,
  TYPE_LABELS,
  type Owner,
  type Transaction,
  type TransactionType,
} from "../../lib/finances/types";

interface TransactionFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (transaction: Transaction) => void;
  initialTransaction?: Transaction | null;
  defaultMonth: number;
  defaultYear: number;
}

const OWNERS: Owner[] = ["Pessoa 1", "Pessoa 2", "Casal"];

function todayInMonth(month: number, year: number) {
  const today = new Date();
  const day = today.getMonth() === month && today.getFullYear() === year ? today.getDate() : 1;
  return new Date(year, month, day).toISOString().slice(0, 10);
}

export function TransactionForm({
  open,
  onOpenChange,
  onSave,
  initialTransaction,
  defaultMonth,
  defaultYear,
}: TransactionFormProps) {
  const [type, setType] = useState<TransactionType>("expense");
  const [date, setDate] = useState(todayInMonth(defaultMonth, defaultYear));
  const [category, setCategory] = useState(CATEGORIES.expense[0]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [owner, setOwner] = useState<Owner>("Casal");

  useEffect(() => {
    if (initialTransaction) {
      setType(initialTransaction.type);
      setDate(initialTransaction.date);
      setCategory(initialTransaction.category);
      setDescription(initialTransaction.description);
      setAmount(String(initialTransaction.amount));
      setOwner(initialTransaction.owner);
    } else {
      setType("expense");
      setDate(todayInMonth(defaultMonth, defaultYear));
      setCategory(CATEGORIES.expense[0]);
      setDescription("");
      setAmount("");
      setOwner("Casal");
    }
  }, [initialTransaction, open, defaultMonth, defaultYear]);

  function handleTypeChange(nextType: TransactionType) {
    setType(nextType);
    setCategory(CATEGORIES[nextType][0]);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const numericAmount = Number(amount.replace(",", "."));
    if (!date || !category || !description.trim() || !numericAmount || numericAmount <= 0) {
      return;
    }

    onSave({
      id: initialTransaction?.id ?? crypto.randomUUID(),
      type,
      date,
      category,
      description: description.trim(),
      amount: numericAmount,
      owner,
    });
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initialTransaction ? "Editar lançamento" : "Novo lançamento"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Tipo</Label>
            <Select value={type} onValueChange={(value) => handleTypeChange(value as TransactionType)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(TYPE_LABELS).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label>Data</Label>
              <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Valor (R$)</Label>
              <Input
                type="text"
                inputMode="decimal"
                placeholder="0,00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Categoria</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES[type].map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Responsável</Label>
            <Select value={owner} onValueChange={(value) => setOwner(value as Owner)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {OWNERS.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Descrição</Label>
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Aluguel, supermercado, aporte CDB..."
              required
            />
          </div>

          <DialogFooter>
            <Button type="submit">{initialTransaction ? "Salvar alterações" : "Adicionar"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
