import { createComponment } from "../util";
import { BoxStyleProps, boxStyles } from "../styles";

export const Box = createComponment("div")<BoxStyleProps>(boxStyles);
