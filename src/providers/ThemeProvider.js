import theme from "components/theme/default";
import React from "react";
import {
  createGlobalStyle,
  ThemeProvider as ThemeProviderContainer,
} from "styled-components";

export const Globalstyle = createGlobalStyle`　
html,body {
    font-family: "Noto Sans CJK KR", "Noto Sans", "RobotoDraft", "Roboto","Apple SD Gothic Neo", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    user-select: none;
}

body {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}`;

const ThemeProvider = ({ children }) => {
  return (
    <ThemeProviderContainer theme={theme}>
      <Globalstyle />
      {children}
    </ThemeProviderContainer>
  );
};

export default ThemeProvider;
