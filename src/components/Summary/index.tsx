import React from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

const Summary: React.FC = () => {
	const { transactions } = useTransactions();

	const summary = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === "income") {
				acc.total += transaction.amount;
				acc.income += transaction.amount;
				return acc;
			}

			acc.total -= transaction.amount;
			acc.outcome += transaction.amount;
			return acc;
		},
		{
			total: 0,
			income: 0,
			outcome: 0,
		}
	);

	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>
					{Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.income)}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas" />
				</header>
				<strong>
					{Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.outcome)}
				</strong>
			</div>
			<div>
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total" />
				</header>
				<strong>
					{Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(summary.total)}
				</strong>
			</div>
		</Container>
	);
};

export { Summary };
