import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home/Home";
import Available from "../Components/Page/Available";
import Dashboard from "../Components/Page/Dashboard/Dashboard";
import ContactUs from "../Components/Page/ContactUs";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Details from "../Components/Home/Details";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/available",
            element:<Available></Available>,
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>,
        },
        {
            path:"/contact",
            element:<ContactUs></ContactUs>,
        },
        {
            path:"/login",
            element:<Login></Login>,
        },
        {
            path:"/register",
            element:<Register></Register>,
        },
        {
            path:"/detail/:id",
            element:<Details></Details>,
            loader: () => fetch("http://localhost:5000/item"),
        },
      ]
    },
  ]);

const Routes = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
             <RouterProvider router={router} />
        </div>
    );
};

export default Routes;