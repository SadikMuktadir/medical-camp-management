const Stats = () => {
  return (
    <div className="my-[100px]">
      <div className="text-center">
        <p className="text-4 text-[#8D5CF6]">Camp Specialist.....</p>
        <h1 className="text-[25px] lg:text-[50px]">Our Specialist</h1>
      </div>
      <div className="py-[50px] flex justify-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title font-bold">Doctors</div>
            <div className="stat-value text-primary">100+</div>
            <div className="stat-desc font-semibold">80% Specialist</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title font-bold">Recover Patient</div>
            <div className="stat-value text-secondary">100K+</div>
            <div className="stat-desc font-semibold">90% Tablets are free</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              {/* <div className="avatar online">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div> */}
            </div>
            <div className="stat-value font-bold">100%</div>
            <div className="stat-title">Camp done</div>
            <div className="stat-desc text-secondary font-semibold">
              1 camp upcoming
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
