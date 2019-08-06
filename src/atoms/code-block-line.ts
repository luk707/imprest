import { transparentize } from "polished";

import { createComponment } from "../util";
import { codeBlockLineStyles } from "../styles";

interface CodeBlockLineStyleProps {
  highlighted?: boolean;
  showLineNumbers?: boolean;
  number: number;
  lineNumberCharactersRequired: number;
}

export const CodeBlockLine = createComponment("div")<CodeBlockLineStyleProps>(
  ({ theme }) => codeBlockLineStyles(theme),
  // TODO: Move these styles to styles directory, this should not be a concern of the component.
  ({ highlighted }) => {
    if (highlighted) {
      return {
        backgroundColor: transparentize(0.95, "#FFF")
      };
    }
    return null;
  },
  ({ number, lineNumberCharactersRequired, showLineNumbers }) => {
    if (showLineNumbers) {
      return {
        ":before": {
          color: transparentize(0.7, "#FFF"),
          content: `"${" ".repeat(
            lineNumberCharactersRequired - Math.floor(Math.log10(number) + 1)
          )}${number} "`
        }
      };
    }
    return null;
  }
);
