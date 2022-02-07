import { graphql, useStaticQuery } from "gatsby";
import { SiteMetadataQuery } from "./generated/useSiteMetadata.types";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery<SiteMetadataQuery>(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  return {
    title: site?.siteMetadata?.title || "",
    description: site?.siteMetadata?.title || "",
    siteUrl: site?.siteMetadata?.siteUrl || "",
  };
};
