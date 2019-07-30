import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";
import { boxStyles } from "./box";
import { focusShadowStyles } from "./focus-shadow";

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
    textShadow: buttonPrimaryTextShadow,
    color: buttonPrimaryTextColor,
    ...focusShadowStyles(theme, buttonPrimaryShadow),
    ...boxStyles({
      theme,
      px: spacings[buttonHorizontalPadding],
      py: spacings[buttonVerticalPadding]
    })
  };
}
