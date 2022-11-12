import { useMutation } from "@tanstack/react-query";
import { User } from "../types/types";
import httpCommon from "../util/http-common";

const updateUser = async (user: User) => {
  const response = await httpCommon.put(`/user/${user._id}`, user);
  if (response.status === 200) {
    return response.data.user as User;
  }
  throw new Error(response.data.message);
};

export const useUpdateUser = () => {
  return useMutation(updateUser);
};
