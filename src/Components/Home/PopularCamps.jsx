import { useEffect, useState } from "react";
import Cart from "./Cart";

const PopularCamps = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  return (
    <div className="my-[100px]">
      <div className="text-center">
        <p className="text-4 text-[#8D5CF6] mb-4">Get your best Camp now!</p>
        <h1 className="text-[50px]">Popular Medical Camps Section</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-[50px]">
        {cardData.map((item) => (
          <Cart key={item.id} item={item}></Cart>
        ))}
      </div>
      <div className="bg-[#8D5CF6] mt-[20px] rounded-[5px] text-white font-bold mx-auto flex justify-center w-[150px]">
        <button className="p-3">See All</button>
      </div>
    </div>
  );
};

export default PopularCamps;
