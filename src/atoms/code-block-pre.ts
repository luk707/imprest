import { createComponment } from "../util";
import { codeBlockPreStyles, monoTypographyStyles } from "../styles";

export const CodeBlockPre = createComponment("pre")(
  ({ theme }) => codeBlockPreStyles(theme),
  ({ theme }) => monoTypographyStyles(theme)
);
