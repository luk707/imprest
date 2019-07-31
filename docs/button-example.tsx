import React from "react";

import { Button } from "../src";

export default function MyComponent() {
  return (
    <Button
      onClick={() => {
        alert("Hello world!");
      }}
    >
      Click me!
    </Button>
  );
}
