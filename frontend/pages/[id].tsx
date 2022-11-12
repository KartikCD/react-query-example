import { useRouter } from "next/router";
import * as React from "react";
import { UpdateUser } from "../components/_updateUser/UpdateUser";
import { UserDetail as UserDetailComponent } from "../components/_userDetail/UserDetail";

const UserDetail = React.memo(() => {
  const router = useRouter();
  const id = router.query["id"] as string;
  return (
    <div style={{ padding: "0 2rem" }}>
      <UserDetailComponent id={id} />
      <hr />
      <UpdateUser id={id} />
    </div>
  );
});

export default UserDetail;
