import { useEffect, useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const PopularCamps = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => 
      {
        const popular = data.filter((items) => items.category === "popular");
        setData(popular);
      }
      );
  }, []);
  return (
    <div className="my-[100px]">
      <div className="text-center">
        <p className="text-4 text-[#8D5CF6]">Get your best Camp now!</p>
        <h1 className="text-[50px]">Popular Medical Camps Section</h1>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-[50px]">
        {data.map((item) => (
          <Cart key={item._id} item={item}></Cart>
        ))}
      </div>
      <div className="bg-[#8D5CF6] mt-[20px] rounded-[5px] text-white font-bold mx-auto flex justify-center w-[150px]">
        <Link to="/available"><button className="p-3">See All</button></Link>
      </div>
    </div>
  );
};

export default PopularCamps;
