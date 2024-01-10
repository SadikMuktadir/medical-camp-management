import Marquee from "react-fast-marquee";
const Sponsor = () => {
  return (
    <div className="my-[100px]">
      <div className="">
        <div className="text-center">
          <p className="text-4 text-[#8D5CF6]">Here are the companies....</p>
          <h1 className="text-[25px] lg:text-[50px]">Our Sponsors</h1>
        </div>
      </div>
      <div>
        <Marquee>
          <div className="mr-[200px]">
            <img src="https://i.ibb.co/Swjz6ML/leotrippi.png" alt="" />
          </div>
          <div className="mr-[200px]">
            <img src="https://i.ibb.co/1rW2WYT/Hyper-Grid.png" alt="" />
          </div>
          <div className="mr-[200px]">

            <img src="https://i.ibb.co/q1y6pb6/caspio.png" alt="" />
          </div>
          <div className="mr-[200px]">
            <img src="https://i.ibb.co/ZG20CRy/beneoshop.png" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsor;



