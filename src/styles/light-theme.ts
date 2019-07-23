import { transparentize } from "polished";

import { Theme } from "./theme";

const colorPrimary = "#550DD1";

const colorLight = "#FFFFFF";
const colorDark = "#000000";

export const lightTheme: Theme = {
  // Color constants

  colorPrimary,
  colorLight,
  colorDark,

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
  buttonPadding: "9px 20px"
};
