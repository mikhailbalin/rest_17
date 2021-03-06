import React, { ReactNode } from "react";
import { BaseProvider, LocaleProvider } from "baseui";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import { localeOverrideRu } from "../../locale/localeOverrideRu";
import { Header } from "../Header";
import { customTheme } from "../../theme";
import { themedStyled } from "../../theme";

export const PageWrapper = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",

  [$theme.mediaQuery["3md"]]: {
    flexDirection: "row",
  },
}));

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();

  return (
    <BaseProvider theme={customTheme}>
      <LocaleProvider locale={localeOverrideRu}>
        <Helmet>
          <html lang="ru" />
          <title>{title}</title>
          <meta name="description" content={description} />

          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
        </Helmet>

        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </LocaleProvider>
    </BaseProvider>
  );
};
