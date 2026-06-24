import { Pencil, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { TYPE_LABELS, type Transaction } from "../../lib/finances/types";

interface TransactionsTableProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (id: string) => void;
}

function formatCurrency(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

const TYPE_BADGE_VARIANT: Record<Transaction["type"], string> = {
  income: "bg-emerald-100 text-emerald-700",
  expense: "bg-red-100 text-red-700",
  investment: "bg-blue-100 text-blue-700",
};

export function TransactionsTable({ transactions, onEdit, onDelete }: TransactionsTableProps) {
  const sorted = [...transactions].sort((a, b) => a.date.localeCompare(b.date));

  if (sorted.length === 0) {
    return (
      <p className="text-muted-foreground py-8 text-center text-sm">
        Nenhum lançamento neste mês ainda.
      </p>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Data</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Responsável</TableHead>
          <TableHead className="text-right">Valor</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sorted.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{formatDate(transaction.date)}</TableCell>
            <TableCell>
              <Badge className={TYPE_BADGE_VARIANT[transaction.type]}>
                {TYPE_LABELS[transaction.type]}
              </Badge>
            </TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.owner}</TableCell>
            <TableCell className="text-right">{formatCurrency(transaction.amount)}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-1">
                <Button variant="ghost" size="icon" onClick={() => onEdit(transaction)} aria-label="Editar">
                  <Pencil className="size-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => onDelete(transaction.id)} aria-label="Excluir">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
