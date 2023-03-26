import { createGlobalStyle } from "styled-components";
import { theme } from "./colors";

export const GlobalStyle = createGlobalStyle`
    *{
        position: relative;
        box-sizing: border-box;
    }
    body{
        background-color: ${theme.background};
        color: ${theme.text};
    }
    a{
        text-decoration: none;
        color: ${theme.text};
    }
    a:hover{

    }
`;
