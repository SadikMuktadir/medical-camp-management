const JoinCamp = ({ campFees }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const age = form.age.value;
    const phone = form.phone.value;
    const gender = form.gender.value;
    const address = form.address.value;
    const fees = form.fees.value;
    console.log(name,age,phone,address,fees,gender)
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card shrink-0 max-w-sm shadow-2xl w-[500px]">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
