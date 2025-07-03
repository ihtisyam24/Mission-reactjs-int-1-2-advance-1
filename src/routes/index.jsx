import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Allproduct from "../pages/Allproduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // You can replace this with your Home or Layout component if available
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Product",
    element: <Allproduct />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
