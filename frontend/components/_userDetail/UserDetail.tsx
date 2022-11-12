import * as React from "react";
import { useGetUser } from "../../queries";
import { WithError } from "../WithError";
import { WithLoading } from "../WithLoading";
import styles from "./UserDetail.module.css";

interface Props {
  id: string;
}

export const UserDetail: React.FC<Props> = React.memo(({ id }) => {
  const { data, isLoading, isError, error } = useGetUser(id);

  return (
    <div className={styles.container}>
      <WithLoading isLoading={isLoading}>
        <WithError isError={isError} error={error as Error}>
          <div className={styles.textStyle}>Detail of user</div>
          <div className={styles.detailTextStyle}>Id: {data?._id}</div>
          <div className={styles.detailTextStyle}>Name: {data?.name}</div>
          <div className={styles.detailTextStyle}>Age: {data?.age}</div>
          <div className={styles.detailTextStyle}>Email: {data?.email}</div>
          <div className={styles.detailTextStyle}>Address: {data?.address}</div>
        </WithError>
      </WithLoading>
    </div>
  );
});
