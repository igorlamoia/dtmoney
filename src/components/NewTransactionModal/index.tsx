import React from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";

import { Container } from "./styles";

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({ isOpen, onRequestClose }) => {
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
				<input name="category" placeholder="Categoria" />
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
};

export default NewTransactionModal;
