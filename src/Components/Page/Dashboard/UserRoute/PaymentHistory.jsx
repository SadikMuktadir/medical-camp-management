import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../Auth/AuthProvider";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <div className="mt-[50px]">
        <p className="text-center text-[40px]">
          Payments History:{payments.length}
        </p>
      </div>
      <div>
        <div className="">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>EMAIL</th>
                  <th>DATE</th>
                  <th>TRANSACTION ID</th>
                  <th>FEES</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.email}</td>
                    <td>{user.date}</td>
                    <td>${user.transactionId}</td>
                    <td>${user.campFees}</td>
                    <td><button className="btn btn-outline text-[#8D5CF6]">Paid</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
