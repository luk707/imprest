import { Breakpoint } from "./breakpoint";
import { Spacing } from "./spacing";

export interface Theme {
  colorPrimary: string;
  colorLight: string;
  colorDark: string;

  breakpoints: {
    [Breakpoint.xs]: number;
    [Breakpoint.sm]: number;
    [Breakpoint.md]: number;
    [Breakpoint.lg]: number;
    [Breakpoint.xl]: number;
  };

  spacings: {
    [Spacing.xs]: number;
    [Spacing.sm]: number;
    [Spacing.md]: number;
    [Spacing.lg]: number;
    [Spacing.xl]: number;
  };

  buttonPrimaryBackgroundColor: string;
  buttonPrimaryShadow: string;
  buttonPrimaryTextColor: string;
  buttonPrimaryTextShadow: string;
  buttonPrimaryBorderRadius: string;
  buttonVerticalPadding: Spacing;
  buttonHorizontalPadding: Spacing;

  cardBackgroundColor: string;
  cardBorderRadius: string;
  cardShadow: string;
}
