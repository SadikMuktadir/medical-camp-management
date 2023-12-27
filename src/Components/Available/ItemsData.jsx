import Card2 from "./Card2";

const ItemsData = ({ items }) => {
  return (
    <div>
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-[100px]">
          {items?.map((item) => (
            <Card2 key={item._id} item={item}></Card2>
          ))}
        </div>
      }
    </div>
  );
};

export default ItemsData;
