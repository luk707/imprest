import React from "react";

import { CodeBlock } from "../src";

const code = `def Fibonacci(n): 
  if n<0: 
    print("Incorrect input") 
  # First Fibonacci number is 0 
  elif n == 1: 
    return 0
  # Second Fibonacci number is 1 
  elif n == 2: 
    return 1
  else: 
    return Fibonacci(n-1) + Fibonacci(n-2)`;

export default function MyComponent() {
  return (
    <CodeBlock
      language="python"
      showLineNumbers
      code={code}
      highlight="3,5-6,8-11"
    />
  );
}
