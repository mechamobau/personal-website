import { createGlobalStyle } from "styled-components";
import { COLORS } from "@/utils/ui";

export default createGlobalStyle`
  * {
    padding:0;
    margin:0;
    box-sizing: border-box;
    vertical-align:baseline;
    list-style:none;
    border:0
  }
  html, body, #root, main {
    height: 100%;
  }
  html {
    font-size: 16px;
  }
  body {
    background-color: ${COLORS.gray[0]};
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    color: ${COLORS.white[0]}
  }
`;
