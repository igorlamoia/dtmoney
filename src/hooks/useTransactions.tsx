import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProps {
	id: number;
	title: string;
	amount: number;
	type: "income" | "outcome";
	category: string;
	createdAt: string;
}

type NewTransaction = Omit<TransactionProps, "id" | "createdAt">;

interface TransactionsContextProps {
	transactions: TransactionProps[];
	createTransaction: (newTransaction: NewTransaction) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

export const TransactionsProvider: React.FC<ReactNode> = ({ children }) => {
	const [transactionsList, setTransactionsList] = useState<TransactionProps[]>([]);

	useEffect(() => {
		api.get("transactions").then((response) => setTransactionsList(response.data.transactions));
	}, []);

	const createTransaction = async (newTransaction: NewTransaction) => {
		const { data } = await api.post("transactions", { ...newTransaction, createdAt: new Date() });
		setTransactionsList([...transactionsList, data.transactions]);
	};

	return (
		<TransactionsContext.Provider value={{ transactions: transactionsList, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
};

export const useTransactions = () => {
	return useContext(TransactionsContext);
};
