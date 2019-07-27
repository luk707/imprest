import { createComponment } from "../util";
import { cardStyles, BoxStyleProps } from "../styles";

export const Card = createComponment("div")<BoxStyleProps>(cardStyles);
