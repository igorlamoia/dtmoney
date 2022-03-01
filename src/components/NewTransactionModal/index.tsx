import React, { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { ButtonType, ButtonTypeContainer, Container } from "./styles";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
	const [selectedType, setSelectedType] = useState<"income" | "outcome">("income");

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<Container>
				<h2>Cadastrar transação</h2>

				<button onClick={onRequestClose} type="button" className="react-modal-close">
					<img src={closeImg} alt="Fechar modal" />
				</button>
				<input name="title" placeholder="Título" />
				<input name="value" type="number" placeholder="Valor" />
				<ButtonTypeContainer>
					<ButtonType
						type="button"
						isActive={selectedType === "income"}
						activeType="income"
						onClick={() => setSelectedType("income")}
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</ButtonType>
					<ButtonType
						type="button"
						isActive={selectedType === "outcome"}
						activeType="outcome"
						onClick={() => setSelectedType("outcome")}
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</ButtonType>
				</ButtonTypeContainer>
				<input name="category" placeholder="Categoria" />
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
};

export default NewTransactionModal;
