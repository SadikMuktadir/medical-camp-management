import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../Components/MainLayout";
import Home from "../Components/Home/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        }
      ]
    },
  ]);

const Routes = () => {
    return (
        <div>
             <RouterProvider router={router} />
        </div>
    );
};

export default Routes;