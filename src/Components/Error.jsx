import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center my-[100px]">
      <div>
        <img src="../../public/undraw_page_not_found_re_e9o6.svg" alt="" />
      </div>
      <div className="bg-[#8D5CF6] rounded-[5px] text-white font-bold w-[180px] px-[30px] py-[15px] mt-[50px]">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Error;
