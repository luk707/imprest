import { createComponment } from "../util";
import { pageContentStyles } from "../styles";

export const PageContent = createComponment("div")(({ theme }) =>
  pageContentStyles(theme)
);
