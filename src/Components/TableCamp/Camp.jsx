import useItem from "../../Hooks/useItem";

const Camp = () => {
  const [data] = useItem();
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
              </th>
              <th>IMAGE</th>
              <th>CAMP NAME</th>
              <th>PRICE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <th>
                  {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                {item.campName}
                </td>
                <td>{item.campFees}</td>
                <th>
                 <div>
                    <button className="btn btn-outline btn-secondary">Join Now</button>
                 </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Camp;
