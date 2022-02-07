import {
  createTheme,
  createThemedStyled,
  createThemedWithStyle,
  createThemedUseStyletron,
} from "baseui";
import { Theme, ThemePrimitives } from "baseui/theme";
import { DeepPartial } from "utility-types";

type CustomTheme = Theme & { customColor: string };

const primitives: Partial<ThemePrimitives> = {
  primaryFontFamily: "Jost",
};

const overrides: DeepPartial<Theme> = {
  typography: {
    DisplayLarge: {
      fontFamily: "El Messiri",
    },
  },
};

const theme = createTheme(primitives, overrides);

export const customTheme: CustomTheme = {
  ...theme,
  customColor: "pink",
  breakpoints: {
    ...theme.breakpoints,
  },
  mediaQuery: {
    ...theme.mediaQuery,
  },
};

export const themedStyled = createThemedStyled<CustomTheme>();
export const themedWithStyle = createThemedWithStyle<CustomTheme>();
export const themedUseStyletron = createThemedUseStyletron<CustomTheme>();

/**
 * 320
 * 480
 * 768
 * 992
 */
