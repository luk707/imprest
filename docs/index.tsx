import React from "react";
import { render } from "react-dom";

import { ThemeContext, Global } from "@emotion/core";
import {
  Button,
  Card,
  PageTemplate,
  lightTheme,
  Spacing,
  globalStyles
} from "../src";

render(
  <ThemeContext.Provider value={lightTheme}>
    <Global styles={globalStyles(lightTheme)} />
    <PageTemplate>
      <section>
        <h1>Button</h1>
        <Button
          onClick={() => {
            alert("Hello world!");
          }}
        >
          Click me!
        </Button>
      </section>
      <section>
        <h1>Card</h1>
        <Card
          py={lightTheme.spacings[Spacing.md]}
          px={lightTheme.spacings[Spacing.md]}
        >
          Hello world!
        </Card>
      </section>
    </PageTemplate>
  </ThemeContext.Provider>,
  document.getElementById("root")
);
