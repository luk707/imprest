import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";

export function focusShadowStyles(
  theme: Theme,
  otherShadow: string = ""
): CSSObject {
  const {
    focusShadowColor,
    focusShadowSize,
    focusShadowTransitionDuration
  } = theme;

  return {
    transition: `box-shadow ${focusShadowTransitionDuration} ease-in`,
    boxShadow: `0 0 0 0px ${focusShadowColor}${
      otherShadow ? `, ${otherShadow}` : ""
    }`,
    ":focus, :active": {
      outline: "none",
      boxShadow: `0 0 0 ${focusShadowSize} ${focusShadowColor}${
        otherShadow ? `, ${otherShadow}` : ""
      }`
    }
  };
}
