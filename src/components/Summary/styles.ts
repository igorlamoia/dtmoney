import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-top: -7.5rem;

	div {
		header {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		background: var(--shape);
		padding: 1.5rem 2rem;
		border-radius: 0.25rem;
		color: var(--text-title);

		&:last-child {
			background: var(--green);
			color: #fff;
		}

		strong {
			display: block;
			margin-top: 1rem;
			font-size: 2rem;
			font-weight: 500;
			line-height: 3rem;
		}
	}
`;