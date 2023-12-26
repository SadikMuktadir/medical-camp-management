import { useLoaderData, useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { useEffect, useState } from "react";

const Details = () => {
  const loaderData = useLoaderData();
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const findData = loaderData?.find((data) => data.id === parseInt(id));
    setData(findData);
  }, [id, loaderData]);
  console.log(data);
  return (
    <div>
      <DetailPage data={data}></DetailPage>
    </div>
  );
};

export default Details;
