import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import swal from "sweetalert";

const AddACamp = () => {
  const image_hosting_key = "dd333f2cc5522a05be1e5c3a210debdc";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const campItem = {
        campName: data.campName,
        category: data.category,
        campFees: data.campFees,
        venueLocation: data.venueLocation,
        targetAudience: data.targetAudience,
        scheduleDateTime: data.scheduleDateTime,
        specialService: data.specialService,
        healthcareProfessional: data.healthcareProfessional,
        image: res.data.data.display_url,
      };
      const campRes = await axiosSecure.post("/item", campItem);
      if (campRes.data.insertedId) {
        reset();
        swal("Good job!", "Camp Added!", "success");
      }
    }
  };
  return (
    <div>
      <div className="mt-[50px]">
        <p className="text-center text-[40px]">Add A Camp</p>
      </div>
      <div className="flex justify-center ">
        <div className="card shrink-0 max-w-sm shadow-2xl w-[500px]">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Camp Name</span>
              </label>
              <input
                type="text"
                placeholder="Camp Name"
                className="input input-bordered"
                required
                {...register("campName")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                placeholder="Image"
                className="input input-bordered"
                required
                {...register("image")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Camp Fees</span>
              </label>
              <input
                type="number"
                placeholder="Camp Fees"
                className="input input-bordered"
                required
                {...register("campFees", {
                  valueAsNumber: true,
                  validate: (value) => value > 0,
                })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Scheduled Date and Time</span>
              </label>
              <input
                type="date"
                placeholder="Scheduled Date and Time"
                className="input input-bordered"
                required
                {...register("scheduleDateTime")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Venue Location</span>
              </label>
              <input
                type="text"
                placeholder="Venue Location"
                className="input input-bordered"
                required
                {...register("venueLocation")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Target Audience</span>
              </label>
              <input
                type="text"
                placeholder="Target Audience"
                className="input input-bordered"
                required
                {...register("targetAudience")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Special Service</span>
              </label>
              <input
                type="text"
                placeholder="Special Service"
                className="input input-bordered"
                required
                {...register("specialService")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Healthcare Professional</span>
              </label>
              <input
                type="text"
                placeholder="Healthcare Professional"
                className="input input-bordered"
                required
                {...register("healthcareProfessional")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Healthcare Professional</span>
              </label>
              <select {...register("category")}>
                <option value="general">General</option>
                <option value="pediatric">Pediatric</option>
                <option value="cardiovascular">Cardiovascular</option>
                <option value="womenHealth">Women Health</option>
                <option value="diabetes">Diabetes</option>
                <option value="popular">Popular</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#8D5CF6] text-white p-3 rounded-[10px]">
                <input type="button" value="Add A Camp" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddACamp;
