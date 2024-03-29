

const Cartnew = ({ item }) => {
  const {
    campName,
    image,
    campFees,
    specialService,
    targetAudience,
    scheduleDateTime,
  } = item;
  return (
    <div>
      <div className="card h-96 w-[300px] lg:w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[250px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {campName}
            <div className="badge badge-primary">${campFees}</div>
          </h2>
          <p>{specialService}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{targetAudience}</div>
            <div className="badge badge-outline">{scheduleDateTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartnew;
