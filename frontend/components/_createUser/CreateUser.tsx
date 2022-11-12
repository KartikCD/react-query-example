import * as React from "react";
import useCreateUser from "./useCreateUser";
import styles from "./CreateUser.module.css";

export const CreateUser = React.memo(() => {
  const { handleChange, user, onSubmit } = useCreateUser();

  return (
    <div>
      <div className={styles.textStyle}>Create a post</div>
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
        Create User
      </button>
    </div>
  );
});
