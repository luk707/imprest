export const atMost = (breakpoint: string | number) =>
  `@media (max-width: ${
    typeof breakpoint === "string" ? breakpoint : `${breakpoint}px`
  })`;
