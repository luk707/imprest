import emotionStyled, { CreateStyledComponentBase } from "@emotion/styled";

import { Theme } from "../styles";

export function createComponment<
  Tag extends keyof JSX.IntrinsicElements,
  StyleProps extends {}
>(
  tag: Tag
): CreateStyledComponentBase<JSX.IntrinsicElements[Tag], StyleProps, Theme> {
  return emotionStyled(tag);
}
