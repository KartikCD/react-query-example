import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

export const client = new QueryClient();

export const Application: React.FC<React.PropsWithChildren<{}>> = React.memo(
  ({ children }) => {
    return (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
  }
);
