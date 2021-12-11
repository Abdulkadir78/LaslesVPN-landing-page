import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin-inline:  0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Rubik', sans-serif;
        -webkit-tap-highlight-color: transparent;
        color: ${({ theme }) => theme.colors.text}
    }

    img {
        max-width: 100%;
    }

    p {
      line-height: 30px;
    }
`;

export default GlobalStyles;
