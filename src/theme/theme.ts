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
