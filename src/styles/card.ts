import { CSSObject } from "@emotion/core";

import { Theme } from "./theme";
import { boxStyles, BoxStyleProps } from "./box";

export function cardStyles(props: BoxStyleProps & { theme: Theme }): CSSObject {
  const { cardBackgroundColor, cardShadow, cardBorderRadius } = props.theme;
  return {
    backgroundColor: cardBackgroundColor,
    boxShadow: cardShadow,
    borderRadius: cardBorderRadius,
    ...boxStyles(props)
  };
}
