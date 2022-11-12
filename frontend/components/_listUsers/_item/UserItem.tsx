import * as React from "react";
import { User } from "../../../types/types";
import styles from "./UserItem.module.css";

interface Props {
  user: User;
  onClick: (id: string) => void;
}

export const UserItem: React.FC<Props> = React.memo(({ user, onClick }) => {
  const onButtonClick = React.useCallback(() => {
    onClick(user?._id as string);
  }, [onClick, user]);

  return (
    <button
      className={styles.buttonStyle}
      id={user?._id}
      onClick={onButtonClick}
    >
      {user.name}
    </button>
  );
});
