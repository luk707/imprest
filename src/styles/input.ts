import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";
import { boxStyles } from "./box";

export function inputStyles(theme: Theme): CSSObject {
  const {
    spacings,
    inputBackgroundColor,
    inputBorderRadius,
    inputHorizontalPadding,
    inputVerticalPadding
  } = theme;
  return {
    backgroundColor: inputBackgroundColor,
    borderRadius: inputBorderRadius,
    ...boxStyles({
      theme,
      px: spacings[buttonHorizontalPadding],
      py: spacings[buttonVerticalPadding]
    })
  };
}
