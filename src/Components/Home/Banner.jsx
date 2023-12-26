const Banner = () => {
  return (
    <div className="my-[50px] flex max-w-screen-xl">
      <div className="w-[560px] mr-[50px] my-auto">
        <p className="text-4 text-[#8D5CF6] mb-[30px]">For Better Future</p>
        <p className="text-[#252B42] text-[58px] mb-[30px]">Meet the Best Medical Camp</p>
        <p className="text-[#737373] text-5 mb-[30px] w-[400px]">
          MedicalCare is most focused in helping you discover your most beauiful
          smile
        </p>
        <div className="bg-[#8D5CF6] rounded-[5px] text-white font-bold w-[180px]">
        <button className="px-[30px] py-[15px]">Get Quote Now</button>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/Mp8gssw/none.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
