import React, { ReactNode } from "react";
import { LightTheme, BaseProvider } from "baseui";
import "modern-normalize/modern-normalize.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <BaseProvider theme={LightTheme}>{children}</BaseProvider>;
};
