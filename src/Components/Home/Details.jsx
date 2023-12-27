import { useLoaderData, useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { useEffect, useState } from "react";

const Details = () => {
  const loaderData = useLoaderData();
  console.log(loaderData.length)
  // const [cardData, setCardData] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/item")
  //     .then((res) => res.json())
  //     .then((data) => setCardData(data));
  // }, []);
  return (
    <div>
      <DetailPage data={data}></DetailPage>
    </div>
  );
};

export default Details;
