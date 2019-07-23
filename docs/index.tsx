import React from "react";
import { render } from "react-dom";

import { ThemeContext } from "@emotion/core";
import { Button, darkTheme } from "../src";

render(
  <ThemeContext.Provider value={darkTheme}>
    <Button
      onClick={() => {
        alert("Hello world!");
      }}
    >
      Click me!
    </Button>
  </ThemeContext.Provider>,
  document.getElementById("root")
);
