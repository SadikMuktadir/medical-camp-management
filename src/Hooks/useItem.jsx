import { useEffect, useState } from "react";

const useItem = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/item")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return [data];

};

export default useItem;