import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";
import { boxStyles } from "./box";
import { focusShadowStyles } from "./focus-shadow";

export function inputStyles(theme: Theme): CSSObject {
  const {
    spacings,
    inputBackgroundColor,
    inputBorderRadius,
    inputHorizontalPadding,
    inputVerticalPadding,
    inputBorder,
    inputShadow
  } = theme;
  return {
    backgroundColor: inputBackgroundColor,
    border: inputBorder,
    borderRadius: inputBorderRadius,
    ...focusShadowStyles(theme, inputShadow),
    ...boxStyles({
      theme,
      px: spacings[inputHorizontalPadding],
      py: spacings[inputVerticalPadding]
    })
  };
}
