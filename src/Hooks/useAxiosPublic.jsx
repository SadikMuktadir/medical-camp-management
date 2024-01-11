import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: "https://myapp-ten-hazel.vercel.app/",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
