import React, { ReactNode } from "react";
import { LightTheme, BaseProvider } from "baseui";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return <BaseProvider theme={LightTheme}>{children}</BaseProvider>;
};
