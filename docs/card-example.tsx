import React from "react";

import { Card, lightTheme, Spacing } from "../src";

export default function MyComponent() {
  return (
    <Card
      py={lightTheme.spacings[Spacing.md]}
      px={lightTheme.spacings[Spacing.md]}
    >
      Hello world!
    </Card>
  );
}
