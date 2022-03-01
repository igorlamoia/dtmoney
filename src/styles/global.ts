import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root {
   --background: #f0f2f5;
   --red: #e52e4d;
   --green: #33cc95; 
   --blue: #5429cc;
   --blue-light: #6933ff;
   --text-title: #363f5f;
   --text-body: #969cb3;
   --shape: #ffffff;
 }

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border:none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720) {
      font-size: 87.5%; // 14px
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;
    
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  
  .react-modal-content {
    position: relative;
    width: 100%;
    max-width: 578px;

    padding: 3rem;
	  border-radius: 0.25rem;

    background: var(--background);
  }

  .react-modal-close {
		position: absolute;
		top: 1.5rem;
		right: 1.5rem;
    border: 0;
		transition: filter 0.2s;
    background: transparent;

		&:hover {
			filter: brightness(0.8);
		}
  }
`;
