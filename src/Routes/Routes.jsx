import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home/Home";
import Available from "../Components/Page/Available";
import Dashboard from "../Components/Page/Dashboard/Dashboard";
import ContactUs from "../Components/Page/ContactUs";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Details from "../Components/Home/Details";
import AuthProvider from "../Components/Auth/AuthProvider";
import Camp from "../Components/TableCamp/Camp";
import MyCamp from "../Components/Available/MyCamp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import OrganizerProfile from "../Components/Page/Dashboard/OrganizerProfile";
import AddACamp from "../Components/Page/Dashboard/AddACamp";
import ManageCamp from "../Components/Page/Dashboard/ManageCamp";
import ManageCampRegister from "../Components/Page/Dashboard/ManageCampRegister";
import Update from "../Components/Page/Dashboard/Update";
import AllUser from "../Components/Page/Dashboard/AllUser";
import Profile from "../Components/Page/Dashboard/UserRoute/Profile";
import RegisterCamp from "../Components/Page/Dashboard/UserRoute/RegisterCamp";
import PaymentHistory from "../Components/Page/Dashboard/UserRoute/PaymentHistory";
import Feedback from "../Components/Page/Dashboard/UserRoute/Feedback";
import Payment from "../Components/Page/Dashboard/Payment/Payment";
import PrivetRoute from "./PrivetRoute";
import UpdateUser from "../Components/Page/Dashboard/UserRoute/UpdateUser";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/available",
        element: <Available></Available>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/seeAll",
        element: <Camp></Camp>,
      },
      {
        path: "/myCamp",
        element: <MyCamp></MyCamp>,
      },
      {
        path: "/detail/:id",
        element: <Details></Details>,
        loader: () => fetch("http://localhost:5000/item"),
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    children: [
      {
        path: "organizer",
        element: <OrganizerProfile></OrganizerProfile>,
      },
      // Admin route
      {
        path: "addACamp",
        element: <AddACamp></AddACamp>,
      },
      {
        path: "allUser",
        element: <AllUser></AllUser>,
      },
      {
        path: "manageCamp",
        element: <ManageCamp></ManageCamp>,
      },
      {
        path: "manageCampReg",
        element: <ManageCampRegister></ManageCampRegister>,
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "users/:id",
        element: <UpdateUser></UpdateUser>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.id}`),
      },
      // User route
      {
        path: "userProfile",
        element: <Profile></Profile>,
      },
      {
        path: "registerCamps",
        element: <RegisterCamp></RegisterCamp>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "feedback",
        element: <Feedback></Feedback>,
      },
    ],
  },
]);

const Routes = () => {
  return (
    <div className="lg:max-w-screen-xl mx-auto">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
};

export default Routes;
