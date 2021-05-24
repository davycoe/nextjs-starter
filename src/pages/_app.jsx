import "reset-css";
import { theme, GlobalStyles } from "../theme/themeConfig";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Component {...pageProps}></Component>
  </ThemeProvider>
);

export default MyApp;
