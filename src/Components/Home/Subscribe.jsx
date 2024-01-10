import Swal from "sweetalert2";

const Subscribe = () => {
  const handleEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    if (email) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thanks for subscribe",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="bg-[#E8F4FA] px-5 lg:px-[200px] py-5 lg:py-[100px]">
      <div className="mb-10 text-center">
        <p className="text-[25px] lg:text-[40px] font-semibold">Join with Us</p>
      </div>
      <form onSubmit={handleEmail}>
        <div className="flex justify-center">
          <div className="mr-2">
            {/* <div className="mr-2 w-1/2 border">
                <input placeholder="Enter your email" type="email" />
                </div> */}
            {/* <label className="label">
                  <span className="label-text">Email</span>
                </label> */}
            <input
              name="email"
              type="email"
              placeholder="type your email"
              className="input input-bordered"
            />
          </div>
          <div>
            <button
              className="btn btn-outline text-[#8D5CF6]"
            >
              Subscribe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
