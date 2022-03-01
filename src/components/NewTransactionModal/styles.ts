import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
	h2 {
		font-size: 1.5rem;
		color: var(--text-title);
		margin-bottom: 2rem;
	}

	padding: 2rem 2rem;

	line-height: 3rem;

	input {
		width: 100%;
		height: 4rem;
		border-radius: 0.25rem;
		border: #d7d7d7 1px solid;
		padding: 0 1.5rem;
		background: #e7e9ee;
		font-weight: 400;
		font-size: 1rem;
		&::placeholder {
			color: var(--text-body);
		}
		& + input {
			margin-top: 1rem;
		}
	}

	button[type="submit"] {
		margin-top: 1.5rem;
		width: 100%;
		height: 4rem;
		background: var(--green);
		color: #fff;
		border-radius: 0.25rem;

		font-weight: 600;
		font-size: 1rem;
		padding: 0 1.5rem;
		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const ButtonTypeContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.5rem;
	margin: 1rem 0;
`;

interface ButtonTypeProps {
	isActive: boolean;
	activeType: "income" | "outcome";
}

const colors = {
	income: "#33cc95",
	outcome: "#e52e4d",
};

export const ButtonType = styled.button<ButtonTypeProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.7rem;

	height: 4rem;
	padding: 1rem 2rem;

	border: 1px solid #d7d7d7;
	border-radius: 0.25rem;
	background: ${({ isActive, activeType }) => (isActive ? transparentize(0.9, colors[activeType]) : "transparent")};

	transition: border-color 0.2s;

	&:hover {
		border-color: ${darken(0.1, "#d7d7d7")};
	}

	img {
		width: 20px;
		height: 20px;
	}

	span {
		color: var(--text-title);
		font-size: 1rem;
	}
`;
