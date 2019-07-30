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

const guideSource = `import React from "react";
import ReactDOM from "react-dom";

import { Button, lightTheme } from "imprest";
import { ThemeContext } from "@emotion/core";

ReactDOM.render(
  <ThemeContext.Provider value={lightTheme}>
    <Button>Hello world!</Button>
  </ThemeContext.Provider>,
  document.getElementById("root")
);`;

render(
  <ThemeContext.Provider value={lightTheme}>
    <Global styles={globalStyles(lightTheme)} />
    <PageTemplate>
      <section>
        <h1>Imprest</h1>
      </section>
      <section>
        <h2>Getting started</h2>
        <p>To install Imprest run the following command:</p>
        <CodeBlock
          language="bash"
          code={`yarn add imprest react react-dom @emotion/core @emotion/styled`}
        />
        <p>
          To use Imprest's components, you must wrap your application with a
          theme context provider and specifying any valid imprest theme:
        </p>
        <CodeBlock showLineNumbers language="jsx" code={guideSource} />
      </section>
      <section>
        <h2>Button</h2>
        <ButtonExample />
        <CodeBlock showLineNumbers language="jsx" code={buttonExampleSource} />
      </section>
      <section>
        <h2>Card</h2>
        <CardExample />
        <CodeBlock showLineNumbers language="jsx" code={cardExampleSource} />
      </section>
      <section>
        <h2>Input</h2>
        <InputExample />
        <CodeBlock showLineNumbers language="jsx" code={inputExampleSource} />
      </section>
    </PageTemplate>
  </ThemeContext.Provider>,
  document.getElementById("root")
);
