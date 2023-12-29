import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Components/Auth/AuthProvider";
import { useContext } from "react";

const useData = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {refetch,data:item=[]} = useQuery({
        queryKey:["item",user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/camp?email=${user.email}`);
            return res.data;
        }
    })
    return [item,refetch]
};

export default useData;