import { useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login.js";
import Forgotpassword from "../pages/auth/forgotpassword";
import Setnewpassword from "../pages/auth/setnewpassword";
import Dashboard from "../pages/dashboard/Dashboard";
import React from "react";
import SelectedCountry from "../pages/selectedCountry/SelectedCountry.js";

const UseRout = () => {
  return useRoutes([
    {
      path: "/country",
      element: <SelectedCountry />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/forgotpassword",
      element: <Forgotpassword />,
    },
    {
      path: "/setnewpassword",
      element: <Setnewpassword />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    }
  ]);
};

export default UseRout;
