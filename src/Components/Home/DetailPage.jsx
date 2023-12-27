const DetailPage = ({ data }) => {
  const {
    campName,
    image,
    specialService,
    campFees,
    scheduleDateTime,
    venueLocation,
    targetAudience,
    healthcareProfessional,
  } = data;
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{campName}</h1>
            <p className="">{specialService}</p>
            <p className="">{venueLocation}</p>
            <p className="">{scheduleDateTime}</p>
            <p className="">{healthcareProfessional}</p>
            <p className="">{targetAudience}</p>
            <p className="">{campFees}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
