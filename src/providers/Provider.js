import React from "react";
import { RecoilRoot } from "recoil";
import ThemeProvider from "./ThemeProvider";

const Provider = ({ children }) => {
  return (
    <RecoilRoot>
      <ThemeProvider>{children}</ThemeProvider>
    </RecoilRoot>
  );
};

export default Provider;
