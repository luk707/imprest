import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";
import { cardStyles } from "./card";
import { boxStyles } from "./box";

export function codeBlockPreStyles(theme: Theme): CSSObject {
  return {
    overflowX: "auto",
    ...cardStyles({ theme, py: theme.spacings[theme.codeBlockSpacing] })
  };
}

export const codeBlockLineContainerStyles: CSSObject = {
  minWidth: "100%",
  display: "inline-block"
};

export function codeBlockLineStyles(theme: Theme): CSSObject {
  return {
    ...boxStyles({ theme, px: theme.spacings[theme.codeBlockSpacing] })
  };
}
