import { useLoaderData, useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { useEffect, useState } from "react";

const Details = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const loaderData = useLoaderData();

  useEffect(() => {
    const findData = loaderData?.find((item) => item._id === id);
    setData(findData);
  }, []);
  
  return (
    <div>
      <DetailPage data={data}></DetailPage>
    </div>
  );
};

export default Details;
