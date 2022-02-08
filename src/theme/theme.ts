import {
  createTheme,
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron,
} from "baseui";
import { Theme, ThemePrimitives } from "baseui/theme";
import { DeepPartial } from "utility-types";
import { getResponsiveTheme, ResponsiveTheme } from "./getResponsiveTheme";

const primitives: Partial<ThemePrimitives> = {
  primaryFontFamily: "Jost",
  primaryA: "#0e0e0f",
};

const overrides: DeepPartial<Theme> = {
  typography: {
    DisplayXSmall: {
      fontFamily: "El Messiri",
    },
    DisplaySmall: {
      fontFamily: "El Messiri",
    },
    DisplayMedium: {
      fontFamily: "El Messiri",
    },
    DisplayLarge: {
      fontFamily: "El Messiri",
    },
    HeadingXXLarge: {
      fontFamily: "El Messiri",
      fontSize: "28px",
      lineHeight: "32px",
      fontWeight: 400,
    },
    HeadingXLarge: {
      fontFamily: "El Messiri",
      fontSize: "32px",
      lineHeight: "40px",
      fontWeight: 400,
    },
    HeadingLarge: {
      fontFamily: "El Messiri",
      fontSize: "28px",
      lineHeight: "36px",
      fontWeight: 400,
    },
    HeadingMedium: {
      fontFamily: "Jost",
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: 500,
    },
    HeadingSmall: {
      fontFamily: "Jost",
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 500,
    },
    HeadingXSmall: {
      fontFamily: "Jost",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: 500,
    },
    ParagraphMedium: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    ParagraphSmall: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
};

const theme = createTheme(primitives, overrides);

type CustomTheme = Theme & ResponsiveTheme;

export const customTheme: CustomTheme = {
  ...theme,
  ...getResponsiveTheme({
    ...theme.breakpoints,
    "2sm": 480,
    "2md": 768,
    "3md": 992,
  }),
};

export const themedStyled = createThemedStyled<CustomTheme>();
export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const useThemedStyletron = createThemedUseStyletron<CustomTheme>();
