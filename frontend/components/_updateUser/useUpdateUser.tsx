import { useRouter } from "next/router";
import * as React from "react";
import {
  useDeleteUser,
  useGetUser,
  useUpdateUser as useUpdateUserHook,
} from "../../queries";
import { User } from "../../types/types";
import { queryCache } from "../_application/queryCache";

export default function useUpdateUser(id: string) {
  const [user, setUser] = React.useState<User>({
    name: "",
    age: 1,
    address: "",
    email: "",
  });

  const router = useRouter();
  const { data } = useGetUser(id);
  const { mutate: deleteUser } = useDeleteUser();
  const { mutate: updateUser } = useUpdateUserHook();

  React.useEffect(() => {
    if (data !== undefined) {
      setUser(data);
    }
  }, [setUser, data]);

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

  const onSubmit = React.useCallback(() => {
    updateUser(user, {
      onSuccess: (data) => {
        queryCache.updateFragment<User>(data._id, ["users"], data);
        queryCache.cache.invalidateQueries(["users"]);
      },
    });
  }, [user, updateUser]);

  const onDeleteClick = React.useCallback(() => {
    deleteUser(id, {
      onSuccess: () => {
        queryCache.removeFragment(id, ["users"]);

        router.replace("/");
      },
    });
  }, [id, deleteUser, router]);

  return {
    user,
    handleChange,
    onSubmit,
    onDeleteClick,
  };
}
