// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useItem = () => {
  // const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { data: data = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosSecure.get("/item");
      return res.data;
    },
  });
  // useEffect(() => {
  //   fetch("http://localhost:5000/item")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return [data,refetch];
};

export default useItem;
