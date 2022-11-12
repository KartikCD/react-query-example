import * as React from "react";
import { WithError } from "../WithError";
import { WithLoading } from "../WithLoading";
import useListUsers from "./useListUsers";
import styles from "./ListUsers.module.css";
import { User } from "../../types/types";
import { UserItem } from "./_item/UserItem";

export const ListUsers = React.memo(() => {
  const { data, isLoading, isError, error, onClick } = useListUsers();

  const listUsers = React.useMemo(() => {
    return data?.map((d) => {
      const user = d as User;
      return <UserItem onClick={onClick} user={user} />;
    });
  }, [onClick, data]);

  return (
    <div className={styles.container}>
      <div className={styles.textStyle}>List of Users</div>
      <WithLoading isLoading={isLoading}>
        <WithError isError={isError} error={error as Error}>
          <div className={styles.buttonsContainer}>{listUsers}</div>
        </WithError>
      </WithLoading>
    </div>
  );
});
