import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";

export function monoTypographyStyles(theme: Theme): CSSObject {
  return {
    fontFamily: theme.monoFontFamily
  };
}
