import { css } from "@emotion/core";

import { Theme } from "./theme";

export function globalStyles(theme: Theme) {
  return css`
    html,
    body {
      font-family: ${theme.fontFamily};
      margin: 0;
      background-color: ${theme.pageBackgroundColor};
    }
  `;
}
