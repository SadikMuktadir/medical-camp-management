import { useEffect, useState } from "react";
import Cartnew from "./Cartnew";

const Upcoming = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("upcoming.json")
      .then((res) => res.json())
      .then((data) => {
        const upcoming = data.filter((items) => items.category === "upcoming");
        setData(upcoming);
      });
  }, []);
  return (
    <div className="my-[100px]">
      <div className="text-center">
        <p className="text-4 text-[#8D5CF6]">Here Upcoming Camp....</p>
        <h1 className="text-[25px] lg:text-[50px]">
          <span className="">Upcoming</span> Medical Camps Section
        </h1>
      </div>
      <div className="">
        <div className="grid grid-cols-3 gap-5 mt-[50px]">
          {data.map((item) => (
            //   <Cartnew key={item._id} item={item}></>
            <Cartnew key={item._id} item={item}></Cartnew>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
