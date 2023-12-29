
import JoinCamp from "../Available/JoinCamp";

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
            <p className="">${campFees}</p>
            <div>
                    <button
                      className="btn btn-outline btn-primary"
                      onClick={() =>
                        document.getElementById("my_modal_2").showModal()
                      }
                    >
                      Join Now
                    </button>
                    
                    <dialog id="my_modal_2" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-[30px] text-center">Registration For Join!!!</h3>
                        <JoinCamp campFees={campFees}></JoinCamp>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
