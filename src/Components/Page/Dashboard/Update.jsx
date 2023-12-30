import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const { register, handleSubmit, reset } = useForm();
  const {
    campName,
    category,
    campFees,
    venueLocation,
    targetAudience,
    scheduleDateTime,
    specialService,
    healthcareProfessional,
  } = useLoaderData();
  const onSubmit = async (data) => {
    const campItem = {
      campName: data.campName,
      category: data.category,
      campFees: data.campFees,
      venueLocation: data.venueLocation,
      targetAudience: data.targetAudience,
      scheduleDateTime: data.scheduleDateTime,
      specialService: data.specialService,
      healthcareProfessional: data.healthcareProfessional,
    };
    const campRes = await axiosSecure.patch("/item", campItem);
    if (campRes.data.modifiedCount > 0) {
      reset();
      swal("Good job!", "You clicked the button!", "success");
    }
  };
  return (
    <div>
      <div className="mt-[50px]">
        <p className="text-center text-[40px]">Update A Camp</p>
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
                defaultValue={campName}
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
                defaultValue={campFees}
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
                defaultValue={scheduleDateTime}
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
                defaultValue={venueLocation}
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
                defaultValue={targetAudience}
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
                defaultValue={specialService}
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
                defaultValue={healthcareProfessional}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Healthcare Professional</span>
              </label>
              <select {...register("category")} defaultValue={category}>
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

export default Update;
