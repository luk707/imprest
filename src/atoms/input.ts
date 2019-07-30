import { createComponment } from "../util";
import { inputStyles } from "../styles";

export const Input = createComponment("input")(({ theme }) =>
  inputStyles(theme)
);
