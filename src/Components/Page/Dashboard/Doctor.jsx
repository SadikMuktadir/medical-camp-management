import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";


const Doctor = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="flex justify-center my-[50px]">
          <div className="flex flex-col  items-center">
            <div className="text-black text-[30px]">{user.displayName}</div>
            <div className="">
              <div className="h-[200px] w-[150px]">
                <img
                  className="rounded-sm"
                  src={user.photoURL}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Doctor;