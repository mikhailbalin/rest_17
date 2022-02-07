import React, { ReactNode } from "react";
import { LightTheme, BaseProvider, LocaleProvider } from "baseui";
import { localeOverrideRu } from "../locale/localeOverrideRu";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { title, description } = useSiteMetadata();

  return (
    <BaseProvider theme={LightTheme}>
      <LocaleProvider locale={localeOverrideRu}>
        <Helmet>
          <html lang="ru" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta charSet="utf-8" />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
        </Helmet>
        {children}
      </LocaleProvider>
    </BaseProvider>
  );
};
