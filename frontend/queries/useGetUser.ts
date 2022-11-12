import { useQuery } from "@tanstack/react-query";
import { client } from "../components/_application/Application";
import { User } from "../types/types";
import httpCommon from "../util/http-common";

const getUser = async (id: string) => {
  const response = await httpCommon.get(`/user/${id}`);
  if (response.status === 200) {
    return response.data.user as User;
  } else {
    throw new Error(response.data.message);
  }
};

export const useGetUser = (id: string) => {
  return useQuery<User, Error>(["users", id], () => getUser(id), {
    initialData: () => {
      // This basically checks if the date in cache is fetched within 60 seconds to lastUpdated cache the return that other wise fetch it back from the api.
      const state = client.getQueryState(["users"]);
      if (state && Date.now() - state.dataUpdatedAt <= 60 * 1000) {
        const data = state.data as Array<User>;
        return data.find((d) => d._id === id);
      }
    },
    staleTime: 0,
  });
};
