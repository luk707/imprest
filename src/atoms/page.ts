import { createComponment } from "../util";
import { pageStyles } from "../styles";

export const Page = createComponment("div")(({ theme }) => pageStyles(theme));
