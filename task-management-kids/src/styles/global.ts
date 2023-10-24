import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  #root{
    width: 100vw;
    height: 100%;
  }

  body {
    background-image: ${({ theme }) => theme.COLORS.GRADIENT_BACKGROUND};
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    color: ${( { theme }) => theme.COLORS.GRAY_700};

    height: 100%;
    width: 100vw;

    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;

  }

  body, input, button, textarea{
      font-family: 'Poppins', sans-serif;
      font-size: 16px;

      outline: none;
      font-style: normal;
      font-weight: 600;
  }

  input,button,textarea{
    border: none;
  }

  a{
      text-decoration: none;
      color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover , a:hover{
      filter: brightness(0.9);
  }

  body::-webkit-scrollbar{
    width: 12px;
    background: transparent;
  }

  body::-webkit-scrollbar-thumb{
    background: ${({theme}) => theme.COLORS.TURQUOSE_400};
    border-radius: 8px;
  }

  .loader{
    position: absolute;
    /* width: 100%; */
    height: 100vh;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0, 0.8);
    color: #31DB9D;
    z-index: 6;
  }
`;
