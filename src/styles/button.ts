import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";

export function buttonPrimaryStyles(theme: Theme): CSSObject {
  return {
    border: "none",
    borderRadius: theme.buttonPrimaryBorderRadius,
    cursor: "pointer",
    padding: theme.buttonPadding,
    backgroundColor: theme.buttonPrimaryBackgroundColor,
    boxShadow: theme.buttonPrimaryShadow,
    textShadow: theme.buttonPrimaryTextShadow,
    color: theme.buttonPrimaryTextColor
  };
}
