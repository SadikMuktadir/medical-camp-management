import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateUser = () => {
  const { name, image } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const info = {
      name: data.name,
      image: data.image,
    };
    const campRes = await axiosSecure.patch("/users", info);
    if (campRes.data.modifiedCount > 0) {
      reset();
      swal("Good job!", "You clicked the button!", "success");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder=" Name"
            className="input input-bordered"
            {...register("name")}
            defaultValue={name}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            type="text"
            placeholder="Image"
            className="input input-bordered"
            {...register("image")}
            defaultValue={image}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#8D5CF6] text-white p-3 rounded-[10px]">
            <input type="button" value="Add A Camp" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
