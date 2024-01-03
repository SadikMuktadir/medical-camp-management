import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      });
      return res.data;
    },
  });
  const handleAdmin = (user) => {
    axiosSecure.patch(`/users/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: `${user.name} is Admin Now`,
          icon: "success",
        });
      }
    });
  };

  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="mt-[50px]">
        <p className="text-center text-[40px]">All Users</p>
      </div>
      <div>
        <div className="mb-[50px]">
          <div className="flex justify-between items-center px-[100px] py-[50px]">
            <h1 className="text-[20px] md:text-[32px]">
              Total Users: {users.length}
            </h1>
          </div>
          <div className="lg:px-[100px]">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th className="flex justify-center">ROLE</th>
                    <th>DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={user.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td className="flex justify-center">
                        {user.role === "admin" ? (
                          <button className="btn btn-outline btn-success">
                            Admin
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAdmin(user)}
                            className="btn btn-outline btn-warning"
                          >
                            <FaUser className="text-[30px]" />
                          </button>
                        )}
                      </td>
                      <th>
                        <button
                          onClick={() => handleDelete(user)}
                          className="btn btn-outline btn-error"
                        >
                          <MdDeleteForever className="text-[30px]" />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
