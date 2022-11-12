import * as React from "react";

interface Props {
  isError: boolean;
  error: Error;
}

export const WithError: React.FC<React.PropsWithChildren<Props>> = React.memo(
  ({ isError, error, children }) => {
    if (isError) {
      return <div>{error.message}</div>;
    }
    return <>{children}</>;
  }
);
