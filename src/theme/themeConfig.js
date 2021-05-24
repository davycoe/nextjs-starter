import { createGlobalStyle } from "styled-components";

const theme = {
  colors: {
    primary: "grey",
  },
};

const GlobalStyles = createGlobalStyle`
    html{
      font-size: 6.25%;
      box-sizing: border-box;
    }
    body {
      font-size: 1600%;
    }
`;

export { GlobalStyles, theme };
