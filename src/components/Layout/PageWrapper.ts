import { themedStyled } from "../../theme";

export const PageWrapper = themedStyled("div", ({ $theme }) => ({
  display: "flex",
  flexDirection: "column",

  [$theme.mediaQuery["3md"]]: {
    flexDirection: "row",
  },
}));
