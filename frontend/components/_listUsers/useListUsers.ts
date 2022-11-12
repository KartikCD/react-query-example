import { useRouter } from "next/router";
import * as React from "react";
import { useGetUsers } from "../../queries";

export default function useListUsers() {
  const router = useRouter();
  const { data, isLoading, isError, error } = useGetUsers();

  const onClick = React.useCallback(
    (id: string) => {
      router.push(`/${id}`);
    },
    [router]
  );

  return {
    data,
    isLoading,
    isError,
    error,
    onClick,
  };
}
