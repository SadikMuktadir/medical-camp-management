import { MdDeleteForever } from "react-icons/md";
import useData from "../../../../Hooks/useData";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const RegisterCamp = () => {
  const [item, refetch] = useData();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
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
        axiosSecure.delete(`/camp/${id}`).then((res) => {
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
        <p className="text-center text-[40px]">Register Camps</p>
      </div>
      <div>
        <div className="mb-[50px]">
          <div className="flex justify-between items-center px-[100px] py-[50px]">
            <h1 className="text-[20px] md:text-[32px]">
              Total Users: {item.length}
            </h1>
          </div>
          <div className="">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>IMAGE</th>
                    <th>CAMP NAME</th>
                    <th>FEES</th>
                    <th>DATE</th>
                    <th>VENUE</th>
                    <th>PAYMENT STATUS</th>
                    <th>CONFIRMATION</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  {item.map((user, index) => (
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
                      <td>{user.campName}</td>
                      <td>${user.campFees}</td>
                      <td>{user.scheduleDateTime}</td>
                      <td>{user.venueLocation}</td>
                      <td>{user.venueLocation}</td>
                      <td>{user.venueLocation}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="btn btn-outline btn-error"
                        >
                          <MdDeleteForever className="text-[20px]" />
                        </button>
                      </td>
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

export default RegisterCamp;