import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";
import { boxStyles } from "./box";
import { Spacing } from "./spacing";

export function buttonPrimaryStyles(theme: Theme): CSSObject {
  const {
    buttonPrimaryBorderRadius,
    buttonPrimaryBackgroundColor,
    buttonPrimaryShadow,
    buttonPrimaryTextShadow,
    buttonPrimaryTextColor,
    spacings,
    buttonHorizontalPadding,
    buttonVerticalPadding
  } = theme;

  return {
    border: "none",
    borderRadius: buttonPrimaryBorderRadius,
    cursor: "pointer",
    backgroundColor: buttonPrimaryBackgroundColor,
    boxShadow: buttonPrimaryShadow,
    textShadow: buttonPrimaryTextShadow,
    color: buttonPrimaryTextColor,
    ...boxStyles({
      theme,
      px: spacings[buttonHorizontalPadding],
      py: spacings[buttonVerticalPadding]
    })
  };
}
