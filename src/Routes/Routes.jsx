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
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
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
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);

const Routes = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
};

export default Routes;
