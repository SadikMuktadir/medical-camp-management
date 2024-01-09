import { NavLink, Outlet } from "react-router-dom";
import { FaAddressCard, FaHome, FaUser,FaMousePointer  } from "react-icons/fa";
import { AiFillEdit, AiFillDatabase } from "react-icons/ai";
import { BiAlignLeft } from "react-icons/bi";
import useAdmin from "../../../Hooks/useAdmin";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="min-h-screen flex">
      <div className="w-1/4 bg-blue-200">
        <div className="text-center pt-3">
          <a className="text-[25px] font-bold">Medical Verse</a>
        </div>
        <div className="divider"></div>
        {isAdmin && (
          <div>
            <ul className="">
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
                <NavLink to="/dashboard/registerCamps">
                  <div className="flex justify-center items-center">
                    <div className="mr-2">
                      <AiFillEdit />
                    </div>
                    <div>Registered Camp</div>
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
                <NavLink to="/dashboard/allUser">
                  <div className="flex justify-center items-center">
                    <div className="mr-2">
                      <FaUser />
                    </div>
                    <div>All User</div>
                  </div>
                </NavLink>
              </li>
              <div className="divider"></div>
            </ul>
          </div>
        )}

        {/* User Navbar */}

        {!isAdmin && (
          <div>
            <ul className="">
              <li className="px-4 py-2 flex justify-start">
                <NavLink to="/dashboard/userProfile">
                  <div className="flex justify-center items-center">
                    <div className="mr-2">
                      <FaAddressCard />
                    </div>
                    <div>My Profile</div>
                  </div>
                </NavLink>
              </li>
              <li className="px-4 py-2 flex justify-start">
                <NavLink to="/dashboard/registerCamps">
                  <div className="flex justify-center items-center">
                    <div className="mr-2">
                      <AiFillEdit />
                    </div>
                    <div>Registered Camp</div>
                  </div>
                </NavLink>
              </li>
              <li className="px-4 py-2 flex justify-start">
                <NavLink to="/dashboard/paymentHistory">
                  <div className="flex justify-center items-center">
                    <div className="mr-2">
                      <AiFillDatabase />
                    </div>
                    <div>Payment History</div>
                  </div>
                </NavLink>
              </li>
              <li className="px-4 py-2 flex justify-start">
                <NavLink to="/dashboard/feedback">
                  <div className="flex justify-center items-center">
                    <div className="mr-2">
                      <BiAlignLeft />
                    </div>
                    <div>Feedback</div>
                  </div>
                </NavLink>
              </li>
              <div className="divider"></div>
            </ul>
          </div>
        )}
        <div>
          <ul>
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
              <NavLink to="/available">
                <div className="flex justify-center items-center">
                  <div className="mr-2">
                    <FaMousePointer  />
                  </div>
                  <div>Available Camps</div>
                </div>
              </NavLink>
            </li>
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
