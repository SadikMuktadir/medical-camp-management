import { useContext } from "react";
import JoinCamp from "../Available/JoinCamp";
import { AuthContext } from "../Auth/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useData from "../../Hooks/useData";

const DetailPage = ({ data }) => {
  const [,refetch] = useData();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    campName,
    image,
    specialService,
    campFees,
    scheduleDateTime,
    venueLocation,
    targetAudience,
    healthcareProfessional,
  } = data;
  const handleAdd = () => {
    if (user && user.email) {
      const itemCollection = {
        newId: _id,
        email:user.email,
        campName,
        image,
        specialService,
        campFees,
        scheduleDateTime,
        venueLocation,
        targetAudience,
        healthcareProfessional,
      };
      axiosSecure
        .post("http://localhost:5000/camp", itemCollection)
        .then((res) => {
          console.log(res.data);
          refetch();
        });
    }
  };
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{campName}</h1>
            <p className="">{specialService}</p>
            <p className="">{venueLocation}</p>
            <p className="">{scheduleDateTime}</p>
            <p className="">{healthcareProfessional}</p>
            <p className="">{targetAudience}</p>
            <p className="">${campFees}</p>
            <div>
              <button
                className="btn btn-outline btn-primary"
                onClick={() => {
                  handleAdd();
                  document.getElementById("my_modal_2").showModal();
                }}
              >
                Join Now
              </button>

              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-[30px] text-center">
                    Registration For Join!!!
                  </h3>
                  <JoinCamp campFees={campFees}></JoinCamp>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
