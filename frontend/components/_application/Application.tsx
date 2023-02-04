import { QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { queryCache } from "./queryCache";

export const Application: React.FC<React.PropsWithChildren<{}>> = React.memo(
  ({ children }) => {
    const client = queryCache.cache;
    return (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
  }
);
