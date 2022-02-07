import { Breakpoints, MediaQuery } from "baseui/theme";

interface CustomBreakpoints extends Breakpoints {
  "2sm": number;
  "2md": number;
  "3md": number;
}

interface CustomMediaQuery extends MediaQuery {
  "2sm": string;
  "2md": string;
  "3md": string;
}

export interface ResponsiveTheme {
  breakpoints: CustomBreakpoints;
  mediaQuery: CustomMediaQuery;
}

export const getResponsiveTheme = (
  breakpoints: CustomBreakpoints
): ResponsiveTheme => {
  return Object.keys(breakpoints).reduce<ResponsiveTheme>(
    (acc, key) => {
      acc.mediaQuery[
        key
      ] = `@media screen and (min-width: ${breakpoints[key]}px)`;
      return acc;
    },
    {
      breakpoints,
      mediaQuery: {} as CustomMediaQuery,
    }
  );
};
