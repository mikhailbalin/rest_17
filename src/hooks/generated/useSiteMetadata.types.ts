import * as Types from "../../generated/types";

export type SiteMetadataQueryVariables = Types.Exact<{ [key: string]: never }>;

export type SiteMetadataQuery = { __typename?: "Query" } & {
  site?: Types.Maybe<
    { __typename?: "Site" } & {
      siteMetadata?: Types.Maybe<
        { __typename?: "SiteSiteMetadata" } & Pick<
          Types.SiteSiteMetadata,
          "title" | "description"
        >
      >;
    }
  >;
};
