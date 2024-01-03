
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useItem = () => {
  const axiosSecure = useAxiosSecure();
  const { data: data = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/item");
      return res.data;
    },
  });

  return [data,refetch];
};

export default useItem;
