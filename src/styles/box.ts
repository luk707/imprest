import { CSSObject } from "@emotion/core";

import { responsiveStyles, ResponsiveParamater, omit } from "../util";
import { Theme } from "./theme";

export interface SpacingParamaters {
  pt: ResponsiveParamater<number>;
  pb: ResponsiveParamater<number>;
  pl: ResponsiveParamater<number>;
  pr: ResponsiveParamater<number>;
  px: ResponsiveParamater<number>;
  py: ResponsiveParamater<number>;
  mt: ResponsiveParamater<number>;
  mb: ResponsiveParamater<number>;
  ml: ResponsiveParamater<number>;
  mr: ResponsiveParamater<number>;
  mx: ResponsiveParamater<number>;
  my: ResponsiveParamater<number>;
}

export type BoxStyleProps = Partial<SpacingParamaters>;

export function boxStyles(props: BoxStyleProps & { theme: Theme }): CSSObject {
  return responsiveStyles(props.theme, omit(props, "theme"), responsive => ({
    paddingTop:
      typeof responsive.py === "undefined" ? responsive.pt : responsive.py,
    paddingBottom:
      typeof responsive.py === "undefined" ? responsive.pb : responsive.py,
    paddingLeft:
      typeof responsive.px === "undefined" ? responsive.pl : responsive.px,
    paddingRight:
      typeof responsive.px === "undefined" ? responsive.pr : responsive.px,
    marginTop:
      typeof responsive.my === "undefined" ? responsive.mt : responsive.my,
    marginBottom:
      typeof responsive.my === "undefined" ? responsive.mb : responsive.my,
    marginLeft:
      typeof responsive.mx === "undefined" ? responsive.ml : responsive.mx,
    marginRight:
      typeof responsive.mx === "undefined" ? responsive.mr : responsive.mx
  }));
}
