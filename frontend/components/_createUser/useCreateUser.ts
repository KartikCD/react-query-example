import { client } from "./../_application/Application";
import * as React from "react";
import { usePostUser } from "../../queries";
import { User } from "../../types/types";

export default function useCreateUser() {
  const [user, setUser] = React.useState<User>({
    name: "",
    age: 1,
    address: "",
    email: "",
  });

  const { mutate: postAddUser } = usePostUser();

  const onSubmit = React.useCallback(() => {
    postAddUser(user, {
      onSuccess: (data) => {
        setUser({
          name: "",
          age: 1,
          address: "",
          email: "",
        });
        const users = client.getQueryData<Array<User>>(["users"]);
        let newUsers = [];
        if (users) {
          newUsers = [...users, data];
        } else {
          newUsers = [data];
        }
        client.setQueryData(["users"], newUsers);
      },
    });
  }, [user, postAddUser]);

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser((old) => ({
        ...old,
        [e.target.name]: e.target.value,
      }));

      if (e.target.name === "age") {
        setUser((old) => ({
          ...old,
          age: e.target.value as unknown as number,
        }));
      }
    },
    [setUser]
  );

  return {
    user,
    handleChange,
    onSubmit,
  };
}
