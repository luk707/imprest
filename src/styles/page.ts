import { CSSObject } from "@emotion/core";

import { responsiveStyles, ResponsiveParamater, omit } from "../util";
import { Theme } from "./theme";
import { boxStyles } from "./box";
import { Breakpoint } from "./breakpoint";

export function pageStyles(theme: Theme): CSSObject {
  const totalSpacing = theme.spacings[theme.pageContentHorizontalSpacing] * 2;
  return {
    maxWidth: theme.breakpoints[Breakpoint.xl] - totalSpacing,
    margin: "auto",
    backgroundColor: theme.pageContentBackgroundColor
  };
}

export function pageContentStyles(theme: Theme): CSSObject {
  const totalSpacing = theme.spacings[theme.pageContentHorizontalSpacing] * 2;

  const foo = responsiveStyles(
    theme,
    {
      maxWidth: [
        // xs
        undefined,
        // sm,
        theme.breakpoints[Breakpoint.xs] - totalSpacing,
        // md
        theme.breakpoints[Breakpoint.sm] - totalSpacing,
        // lg
        theme.breakpoints[Breakpoint.md] - totalSpacing,
        // xl
        theme.breakpoints[Breakpoint.lg] - totalSpacing
      ]
    },
    v => v
  );

  console.log(foo);

  return {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    ...boxStyles({
      theme,
      px: theme.spacings[theme.pageContentHorizontalSpacing]
    }),
    ...foo
  };
}
