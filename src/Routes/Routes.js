import { useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login.js";
import Forgotpassword from "../pages/auth/forgotpassword";
import Setnewpassword from "../pages/auth/setnewpassword";
// import Dashboard from "../pages/dashboard/Dashboard";
import React from "react";
import SelectedCountry from "../pages/selectedCountry/SelectedCountry";
import DeleteCrumbs from "../pages/deleteCrumbs/DeleteCrumbs";
import CrumbsDelete from "../pages/crumbsDelete/CrumbsDelete";
// import Map from "../pages/map/map";
import Modal from "../pages/modal/forgotpassword_popup"
import CreateCrumbs from "../pages/modal/createcrumbs"
import Profile from "../pages/profile/Profile"
import Loading from "../pages/loading/Loading"
import Editprofile from "../pages/profile/Editprofile"
import DeleteCrumb from "../pages/modal/deletecrumb"
import Crumbdeleted from "../pages/modal/crumbdeleted"
import Saveaudienceclicked from "../pages/modal/saveaudienceclicked"
import Uploaderrors from "../pages/modal/uploaderrors"
import Uploadprogress from "../pages/modal/uploadprogress"
import Uploadsuccess from "../pages/modal/uploadsuccess"
import Searchaudience from "../pages/modal/searchaudience"

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
    // {
    //   path: "/dashboard",
    //   element: <Dashboard />,
    // },
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
    // {
    //   path: "/map",
    //   element: <Map />,
    // },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/editprofile",
      element: <Editprofile />,
    },
    {
      path: "/loading",
      element: <Loading />,
    },
    {
      path: "/deletecrumb",
      element: <DeleteCrumb />,
    },
    {
      path: "/crumbdeleted",
      element: <Crumbdeleted />,
    },
    {
      path: "/saveaudienceclicked",
      element: <Saveaudienceclicked />,
    },
    {
      path: "/uploaderrors",
      element: <Uploaderrors />,
    },
    {
      path: "/uploadprogress",
      element: <Uploadprogress />,
    },
    {
      path: "/uploadsuccess",
      element: <Uploadsuccess />,
    },
    {
      path: "/searchaudience",
      element: <Searchaudience />,
    }
  ]);
};

export default UseRout;
