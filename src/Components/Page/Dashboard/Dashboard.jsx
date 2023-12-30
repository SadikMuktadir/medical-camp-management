import { NavLink, Outlet } from "react-router-dom";
import { FaAddressCard, FaHome } from "react-icons/fa";
import { AiFillEdit,AiFillDatabase } from "react-icons/ai";
import { BiAlignLeft } from "react-icons/bi";
const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/4 bg-blue-200">
        <div className="text-center pt-3"><a className="text-[25px] font-bold">Medical Verse</a></div>
        <div className="divider"></div>
        <div>
          <ul className="">
            <li className="px-4 py-2 flex justify-start">
              <NavLink to="/">
                <div className="flex justify-center items-center">
                <div className="mr-2">
                  <FaHome />
                </div>
                <div>Home</div>
                </div>
              </NavLink>
            </li>
            <li className="px-4 py-2 flex justify-start">
              <NavLink to="/dashboard/organizer">
                <div className="flex justify-center items-center">
                <div className="mr-2">
                  <FaAddressCard /> 
                </div>
                <div>Organizer Profile Management</div>
                </div>
              </NavLink>
            </li>
            <li className="px-4 py-2 flex justify-start">
              <NavLink to="/dashboard/addACamp">
                <div className="flex justify-center items-center">
                <div className="mr-2">
                <AiFillEdit />
                </div>
                <div>Add A Camp</div>
                </div>
              </NavLink>
            </li>
            <li className="px-4 py-2 flex justify-start">
              <NavLink to="/dashboard/manageCamp">
                <div className="flex justify-center items-center">
                <div className="mr-2">
                  <AiFillDatabase />
                </div>
                <div>Manage Camps</div>
                </div>
              </NavLink>
            </li>
            <li className="px-4 py-2 flex justify-start">
              <NavLink to="/dashboard/manageCampReg">
                <div className="flex justify-center items-center">
                <div className="mr-2">
                  <BiAlignLeft />
                </div>
                <div>Manage Registered Camps</div>
                </div>
              </NavLink>
            </li>
            <div className="divider"></div>
          </ul>
        </div>
      </div>
      <div className="w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
