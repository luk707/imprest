import { transparentize } from "polished";

import { Theme } from "./theme";
import { Breakpoint } from "./breakpoint";
import { Spacing } from "./spacing";

const colorPrimary = "#550DD1";

const colorLight = "#FFFFFF";
const colorDark = "#000000";

export const lightTheme: Theme = {
  // Color constants

  colorPrimary,
  colorLight,
  colorDark,

  // Breakpoint constants

  breakpoints: {
    [Breakpoint.xs]: 414,
    [Breakpoint.sm]: 568,
    [Breakpoint.md]: 768,
    [Breakpoint.lg]: 1112,
    [Breakpoint.xl]: 1200
  },

  // Spacing constants

  spacings: {
    [Spacing.xs]: 3,
    [Spacing.sm]: 6,
    [Spacing.md]: 12,
    [Spacing.lg]: 24,
    [Spacing.xl]: 48
  },

  // Button constants

  buttonPrimaryBackgroundColor: colorPrimary,
  buttonPrimaryShadow: `0 2px 4px ${transparentize(
    0.9,
    colorDark
  )}, 0px 2px 8px ${transparentize(
    0.8,
    colorDark
  )}, inset 0px 1px 1px ${transparentize(0.8, colorLight)}`,
  buttonPrimaryTextColor: colorLight,
  buttonPrimaryTextShadow: `0px 1px 2px ${transparentize(
    0.8,
    colorLight
  )}, 0px -1px 2px ${transparentize(0.8, colorDark)}`,
  buttonPrimaryBorderRadius: "3px",
  buttonVerticalPadding: Spacing.sm,
  buttonHorizontalPadding: Spacing.lg
};
