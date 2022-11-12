import * as React from "react";
import { useGetUsers } from "../queries";
import { WithError } from "./WithError";
import { WithLoading } from "./WithLoading";
export const GetUsersCount = React.memo(() => {
  const { data, isLoading, isError, error } = useGetUsers();

  return (
    <WithLoading isLoading={isLoading}>
      <WithError isError={isError} error={error as Error}>
        <div
          style={{ fontSize: "28px", fontStyle: "bold", marginBottom: "16px" }}
        >
          Total Users: {data?.length}
        </div>
      </WithError>
    </WithLoading>
  );
});
