import { createTheme } from "baseui";
import { Theme, ThemePrimitives } from "baseui/theme";
import { DeepPartial } from "utility-types";

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

export const theme = createTheme(primitives, overrides);
