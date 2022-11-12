import * as React from "react";
import { GetUsersCount } from "../components/GetUsersCount";
import { ListUsers } from "../components/_listUsers/ListUsers";
import styles from "../styles/Home.module.css";
import { CreateUser } from "../components/_createUser/CreateUser";

export default function Home() {
  return (
    <div className={styles.container}>
      <GetUsersCount />
      <ListUsers />
      <hr />
      <div style={{ marginTop: "24px" }}>
        <CreateUser />
      </div>
    </div>
  );
}
