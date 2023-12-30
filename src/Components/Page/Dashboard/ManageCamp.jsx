import { FaEdit } from "react-icons/fa";
import useItem from "../../../Hooks/useItem";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const ManageCamp = () => {
    const axiosSecure = useAxiosSecure();
    const [data,refetch] = useItem();
    const handleDelete = (camp) => {
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
            axiosSecure.delete(`/item/${camp._id}`).then((res) => {
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
      <div className="mb-[50px]">
        <div className="flex justify-between items-center px-[100px] py-[50px]">
          <h1 className="text-[20px] md:text-[32px]">
            Total Menu: {data.length}{" "}
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
                  <th>PRICE</th>
                  <th className="flex justify-center">UPDATE</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((camp, index) => (
                  <tr key={camp._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={camp.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{camp.campName}</td>
                    <td>${camp.campFees}</td>
                    <td className="flex justify-center">
                      <Link to={`/dashboard/update/${camp._id}`}>
                        <button className="btn btn-outline btn-warning">
                          <FaEdit className="text-[30px]" />
                        </button>
                      </Link>
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(camp)}
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
  );
};

export default ManageCamp;
