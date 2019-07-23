import { createComponment } from "../util";
import { buttonPrimaryStyles } from "../styles";

export const Button = createComponment("button")(({ theme }) =>
  buttonPrimaryStyles(theme)
);
