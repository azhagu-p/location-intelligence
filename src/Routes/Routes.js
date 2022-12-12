import { useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login.js";
import Forgotpassword from "../pages/auth/forgotpassword";
import Setnewpassword from "../pages/auth/setnewpassword";
import Dashboard from "../pages/dashboard/Dashboard";
import React from "react";
import SelectedCountry from "../pages/selectedCountry/SelectedCountry";
import DeleteCrumbs from "../pages/deleteCrumbs/DeleteCrumbs";
import CrumbsDelete from "../pages/crumbsDelete/CrumbsDelete";
import Map from "../pages/map/map";
import Modal from "../pages/modal/forgotpassword_popup"
import CreateCrumbs from "../pages/modal/createcrumbs"

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
    },
    {
      path: "/selectcountry",
      element: <SelectedCountry />,
    },
    {
      path: "/deletecrumbs",
      element: <DeleteCrumbs />,
    },
    {
      path: "/crumbsdelete",
      element: <CrumbsDelete />,
    },
    {
      path: "/modal",
      element: <Modal />,
    },
    {
      path: "/createcrumbs",
      element: <CreateCrumbs />,
    },
    {
      path: "/map",
      element: <Map />,
    }
  ]);
};

export default UseRout;
