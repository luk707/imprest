import React from "react";
import { render } from "react-dom";

import { ThemeContext } from "@emotion/core";
import { Button, Card, lightTheme, Spacing } from "../src";

render(
  <ThemeContext.Provider value={lightTheme}>
    <h1>Button</h1>
    <Button
      onClick={() => {
        alert("Hello world!");
      }}
    >
      Click me!
    </Button>
    <h1>Card</h1>
    <Card
      py={lightTheme.spacings[Spacing.md]}
      px={lightTheme.spacings[Spacing.md]}
    >
      Hello world!
    </Card>
  </ThemeContext.Provider>,
  document.getElementById("root")
);
