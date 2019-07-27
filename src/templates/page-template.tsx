import React, { FunctionComponent } from "react";

import { Page, PageContent } from "../atoms";

export const PageTemplate: FunctionComponent = ({ children }) => (
  <Page>
    <PageContent>{children}</PageContent>
  </Page>
);
