import { User } from "../types/types";
import { Users } from "../types/types";
import httpCommon from "../util/http-common";
import { useQuery } from "@tanstack/react-query";

const getUsers = async () => {
  const response = await httpCommon.get<Users>("/users");
  if (response.status === 200) {
    return response.data.users as Array<User>;
  } else {
    throw new Error("Something went wrong. Please try again later.");
  }
};

export const useGetUsers = () => {
  return useQuery<Array<User>, Error>({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};
