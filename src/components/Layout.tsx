import React, { ReactNode } from "react";
import { LightTheme, BaseProvider, LocaleProvider } from "baseui";
import { localeOverrideRu } from "../locale/localeOverrideRu";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <BaseProvider theme={LightTheme}>
      <LocaleProvider locale={localeOverrideRu}>{children}</LocaleProvider>
    </BaseProvider>
  );
};
