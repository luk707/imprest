import { css } from "@emotion/core";

import { Theme } from "./theme";

export function globalStyles(theme: Theme) {
  return css`
    html,
    body {
      margin: 0;
      background-color: ${theme.pageBackgroundColor};
    }
  `;
}
