import React from "react";
import { render } from "react-dom";
import { readFileSync } from "fs";

import { ThemeContext, Global } from "@emotion/core";
import {
  Button,
  Card,
  Input,
  PageTemplate,
  lightTheme,
  Spacing,
  globalStyles,
  CodeBlock
} from "../src";

import ButtonExample from "./button-example";
import CardExample from "./card-example";
import InputExample from "./input-example";

const cleanSrc = (src: string) =>
  src.replace(/\.\.\/src/, "imprest").replace(/\n$/, "");

const buttonExampleSource = cleanSrc(
  readFileSync(__dirname + "/button-example.tsx", "utf-8").toString()
);

const cardExampleSource = cleanSrc(
  readFileSync(__dirname + "/card-example.tsx", "utf-8").toString()
);

const inputExampleSource = cleanSrc(
  readFileSync(__dirname + "/input-example.tsx", "utf-8").toString()
);

render(
  <ThemeContext.Provider value={lightTheme}>
    <Global styles={globalStyles(lightTheme)} />
    <PageTemplate>
      <section>
        <h1>Button</h1>
        <ButtonExample />
        <CodeBlock showLineNumbers language="jsx" code={buttonExampleSource} />
      </section>
      <section>
        <h1>Card</h1>
        <CardExample />
        <CodeBlock showLineNumbers language="jsx" code={cardExampleSource} />
      </section>
      <section>
        <h1>Input</h1>
        <InputExample />
        <CodeBlock showLineNumbers language="jsx" code={inputExampleSource} />
      </section>
    </PageTemplate>
  </ThemeContext.Provider>,
  document.getElementById("root")
);
