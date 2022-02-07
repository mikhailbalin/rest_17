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
          }
        }
      }
    `
  );

  return site.siteMetadata;
};
