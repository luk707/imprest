import { CSSObject } from "@emotion/core";

import { Theme } from "../theme";

export function focusShadowStyles(theme: Theme, otherShadow: string = ""): CSSObject {
  const {
    focusShadowColor,
    focusShadowSize
  } = theme;
  
  return {
    boxShadow: `0 0 0 0 ${focusShadowColor}${otherShadow ? `, ${otherShadow}` : ""}`,
    ":focus": {
      boxShadow: `0 0 0 ${focusShadowSize}px ${focusShadowColor}${otherShadow ? `, ${otherShadow}` : ""}`
    }
  };
}
