import { Breakpoint } from "./breakpoint";
import { Spacing } from "./spacing";

export interface Theme {
  colorPrimary: string;
  colorLight: string;
  colorDark: string;

  fontFamily: string;

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

  pageBackgroundColor: string;
  pageContentBackgroundColor: string;
  pageContentHorizontalSpacing: Spacing;

  inputBackgroundColor: string;
  inputBorderRadius: string;
  inputVerticalPadding: Spacing;
  inputHorizontalPadding: Spacing;
  inputBorder: string;
  inputShadow?: string;

  focusShadowColor: string;
  focusShadowSize: string;
  focusShadowTransitionDuration: string;
}
