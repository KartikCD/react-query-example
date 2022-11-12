import { useMutation } from "@tanstack/react-query";
import httpCommon from "../util/http-common";

const deleteUser = async (id: string) => {
  const response = await httpCommon.delete(`/user/${id}`);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error(response.data.message);
};

export const useDeleteUser = () => {
  return useMutation(deleteUser);
};
