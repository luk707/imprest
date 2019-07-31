import React, { FunctionComponent, useMemo } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

import { parseRangeSetString } from "../util";
import { CodeBlockLine, CodeBlockLineContainer, CodeBlockPre } from "../atoms";

interface CodeBlockProps {
  language: Language;
  code: string;
  highlight?: string;
  showLineNumbers?: boolean;
}

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({
  code,
  language,
  highlight,
  showLineNumbers
}) => {
  const highlightedLines = useMemo(
    () => parseRangeSetString(highlight || "") || new Set<number>(),
    [highlight]
  );
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <CodeBlockPre className={className} style={style}>
          <CodeBlockLineContainer>
            {tokens.map((line, i) => (
              <CodeBlockLine
                highlighted={highlightedLines.has(i + 1)}
                number={i + 1}
                showLineNumbers={showLineNumbers}
                lineNumberCharactersRequired={Math.floor(
                  Math.log10(tokens.length) + 1
                )}
                {...getLineProps({ line, key: i })}
              >
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </CodeBlockLine>
            ))}
          </CodeBlockLineContainer>
        </CodeBlockPre>
      )}
    </Highlight>
  );
};
