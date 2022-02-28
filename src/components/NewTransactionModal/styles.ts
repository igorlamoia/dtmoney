import styled from "styled-components";

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
