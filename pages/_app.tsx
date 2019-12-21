import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider
} from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import GlobalStyles from "../globalStyles";
import { theme } from "../theme";

const Commons = ({ Component }) => {
  return (
    <StylesProvider injectFirst>
      <StyledThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <GlobalStyles />
          <Component />
        </MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default Commons;
