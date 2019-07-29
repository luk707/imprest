import { createComponent } from "../utils";
import { inputStyles } from "../styles";

export const Input = createComponent("input")(({ theme }) => inputStyles(theme));