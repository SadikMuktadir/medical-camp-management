import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Controller, useForm } from "react-hook-form";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const Feedback = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const axiosPublic = useAxiosPublic();
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const details = form.details.value;
    const rating = form.rating.value;
    const reviewInfo = {
      name,
      details,
      rating:parseInt(rating),
    };
    axiosPublic.post("/review", reviewInfo).then((res) => {
      console.log(res.data);
      if (res.data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    });
  };
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      rating: 0,
    },
  });

  return (
    <div className="mx-[250px]">
      <div className="mt-[50px]">
        <p className="text-center text-[40px]">Submit Your Feedback</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-info w-[500px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              name="details"
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-info h-[200px] w-[500px]"
            />
          </div>
          {/* <div>
            <div>
              <div className="flex flex-col">
                <div className="mt-2" id="rating_label">
                  Rating
                </div>
                <div className="">
                  <Controller
                    control={control}
                    name="rating"
                    rules={{
                      validate: (rating) => rating > 0,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Rating
                        style={{ maxWidth: 250 }}
                        value={value}
                        isRequired
                        onChange={onChange}
                        visibleLabelId="rating_label"
                        onBlur={onBlur}
                      />
                    )}
                  />
                </div>
              </div>
              {errors.rating && <div>Rating is required.</div>}
            </div>
          </div> */}
          <div className="flex flex-col">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <select className="input input-bordered input-info" name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="">
            <button>
              <input
                className="mt-5 btn btn-outline text-[#8D5CF6]"
                type="submit"
                value="Submit"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
