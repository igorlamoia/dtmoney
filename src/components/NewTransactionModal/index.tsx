import React, { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { ButtonType, ButtonTypeContainer, Container } from "./styles";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
	const [title, setTitle] = useState("");
	const [value, setValue] = useState(0);
	const [type, setType] = useState<"income" | "outcome">("income");
	const [category, setCategory] = useState("");
	const { createTransaction } = useTransactions();

	const handleNewTransaction = async (event: FormEvent) => {
		event.preventDefault();
		await createTransaction({ title, amount: value, type, category });
		setTitle("");
		setValue(0);
		setType("income");
		setCategory("");
		onRequestClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<Container onSubmit={handleNewTransaction}>
				<h2>Cadastrar transação</h2>

				<button onClick={onRequestClose} type="button" className="react-modal-close">
					<img src={closeImg} alt="Fechar modal" />
				</button>
				<input name="title" placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
				<input
					name="value"
					type="number"
					placeholder="Valor"
					value={value}
					onChange={(event) => setValue(Number(event.target.value))}
				/>
				<ButtonTypeContainer>
					<ButtonType type="button" isActive={type === "income"} activeType="income" onClick={() => setType("income")}>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</ButtonType>
					<ButtonType
						type="button"
						isActive={type === "outcome"}
						activeType="outcome"
						onClick={() => setType("outcome")}
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</ButtonType>
				</ButtonTypeContainer>
				<input
					name="category"
					placeholder="Categoria"
					value={category}
					onChange={(event) => setCategory(event.target.value)}
				/>
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
};

export default NewTransactionModal;
