const Banner = () => {
  return (
    <div className="my-[50px] flex flex-col justify-center items-center lg:flex-row max-w-screen-xl">
      <div className="w-[230px] lg:w-[560px] lg:mr-[50px] my-auto">
        <p className="text-4 text-[#8D5CF6] mb-[30px]">For Better Future</p>
        <p className="text-[#252B42] text-[25px] lg:text-[58px] mb-[30px]">Meet the Best Medical Camp</p>
        <p className="text-[#737373] text-5 mb-[30px] w-[230px] lg:w-[400px]">
          MedicalCare is most focused in helping you discover your most beauiful
          smile
        </p>
        <div className="bg-[#8D5CF6] rounded-[5px] text-white font-bold w-[180px]">
        <button className="px-[30px] py-[15px]">Get Quote Now</button>
        </div>
      </div>
      <div>
        <img className="w-[200px] lg:w-[560px]" src="https://i.ibb.co/Mp8gssw/none.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
