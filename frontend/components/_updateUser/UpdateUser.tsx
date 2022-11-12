import * as React from "react";
import styles from "../_createUser/CreateUser.module.css";
import useUpdateUser from "./useUpdateUser";

interface Props {
  id: string;
}

export const UpdateUser: React.FC<Props> = React.memo(({ id }) => {
  const { user, handleChange, onSubmit, onDeleteClick } = useUpdateUser(id);

  return (
    <div style={{ marginTop: "24px" }}>
      <div className={styles.textStyle}>Update a user</div>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={user.name}
        className={styles.fields}
        placeholder="name"
      />

      <input
        type="number"
        name="age"
        id="age"
        onChange={handleChange}
        value={user.age}
        className={styles.fields}
        placeholder="age"
      />

      <input
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        value={user.email}
        className={styles.fields}
        placeholder="email"
      />

      <input
        type="text"
        name="address"
        id="address"
        onChange={handleChange}
        value={user.address}
        className={styles.fields}
        placeholder="address"
      />

      <button
        type="button"
        id="submit"
        name="submit"
        className={styles.createButton}
        onClick={onSubmit}
      >
        Save User
      </button>

      <button
        type="button"
        id="submit"
        name="submit"
        className={styles.createButton}
        onClick={onDeleteClick}
      >
        Delete User
      </button>
    </div>
  );
});
