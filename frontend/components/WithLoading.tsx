import * as React from "react";

interface Props {
  isLoading: boolean;
}

export const WithLoading: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({ isLoading, children }) => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <>{children}</>;
  }
);
