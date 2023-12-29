import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
const JoinCamp = ({ campFees }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const address = form.address.value;
    const fees = form.fees.value;
    if (user && user.email) {
      const collection = {
        name:user.name,
        age: parseInt(age),
        phone: parseInt(phone),
        gender,
        address,
        fees: parseInt(fees),
        email: user.email,
      };
      axiosSecure.post("http://localhost:5000/info", collection).then((res) => {
        if(res.data.insertedId){
          swal("Good job!", "You are join the camp!", "success");
          navigate("/myCamp");
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card shrink-0 max-w-sm shadow-2xl w-[500px]">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  name="age"
                  type="number"
                  placeholder="Age"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select className="input input-bordered" name="gender">
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Camp Fees $</span>
                </label>
                <input
                  defaultValue={campFees}
                  name="fees"
                  type="number"
                  placeholder="Camp Fees"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#8D5CF6] p-3 rounded-[10px]">
                  <input type="button" value="Register" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCamp;
