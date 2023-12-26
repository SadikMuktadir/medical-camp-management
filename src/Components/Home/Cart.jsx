import { Link } from "react-router-dom";

const Cart = ({ item }) => {
  const {
    id,
    campName,
    image,
    campFees,
    specialService,
    targetAudience,
    scheduleDateTime,
  } = item;
  return (
    <div>
      <div className="card h-96 w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {campName}
            <div className="badge badge-secondary">{campFees}</div>
          </h2>
          <p>{specialService}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{targetAudience}</div>
            <div className="badge badge-outline">{scheduleDateTime}</div>
          </div>
          <div className="flex justify-center">
            <Link to={`/details/${id}`}>
              <button className="btn btn-outline btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
