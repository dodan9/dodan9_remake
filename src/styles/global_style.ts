import { createGlobalStyle } from "styled-components";
import { theme } from "./colors";
import NeoDunggeunmoWoff2 from "./fonts/NeoDunggeunmoPro-Regular.woff2";
import NeoDunggeunmoWoff from "./fonts/NeoDunggeunmoPro-Regular.woff";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "NeoDunggeunmo";
    src: local('NeoDunggeunmo'), url(${NeoDunggeunmoWoff2}) format("woff2"),
        url(${NeoDunggeunmoWoff}) format("woff");
    }
    *{
        position: relative;
        box-sizing: border-box;
        font-family: 'NeoDunggeunmo';
        letter-spacing: 1px;
    }
    body{
        background-color: ${theme.background};
        color: ${theme.text};
        margin: 0;
    }
    a{
        text-decoration: none;
        color: ${theme.text};
    }
    a:hover{

    }
`;
