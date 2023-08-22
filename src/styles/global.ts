import styled, { createGlobalStyle } from "styled-components";
import { theme } from "styles/colors";
import NeoDunggeunmoWoff2 from "./fonts/NeoDunggeunmoPro-Regular.woff2";
import NeoDunggeunmoWoff from "./fonts/NeoDunggeunmoPro-Regular.woff";

export const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: "NeoDunggeunmo";
    src: url(${NeoDunggeunmoWoff2}) format("woff2"),
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
    ul{
        padding:0;
        margin:0;
        list-style: none;
    }
`;

export const Modal = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
