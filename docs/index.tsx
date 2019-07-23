import React from "react";
import { render } from "react-dom";

import { Button } from "../src";

render(
  <Button
    onClick={() => {
      alert("Hello world!");
    }}
  >
    Click me!
  </Button>,
  document.getElementById("root")
);
