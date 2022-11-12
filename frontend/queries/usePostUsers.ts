import { User } from "../types/types";
import httpCommon from "../util/http-common";
import { useMutation } from "@tanstack/react-query";
import { client } from "../components/_application/Application";

const postUser = async (user: User) => {
  const response = await httpCommon.post("/user", user);
  if (response.status === 201) {
    return response.data.user as User;
  }
  throw new Error(response.data.message);
};

export const usePostUser = () => {
  return useMutation(postUser);
};
