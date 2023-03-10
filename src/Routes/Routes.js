import { Route, Routes, useRoutes } from "react-router-dom";
import Login from "../pages/auth/Login.js";
import Forgotpassword from "../pages/auth/forgotpassword";
import Setnewpassword from "../pages/auth/setnewpassword";
import Dashboard from "../pages/dashboard/Dashboard";
import React from "react";
import SelectedCountry from "../pages/selectedCountry/SelectedCountry";
import DeleteCrumbs from "../pages/deleteCrumbs/DeleteCrumbs";
import CrumbsDelete from "../pages/crumbsDelete/CrumbsDelete";
import Maps from "../pages/map/TripsMap";
import Modal from "../pages/modal/forgotpassword_popup";
import CreateCrumbs from "../pages/modal/createcrumbs";
import Profile from "../pages/profile/Profile";
import Loading from "../pages/loading/Loading";
import Editprofile from "../pages/profile/Editprofile";
import DeleteCrumb from "../pages/modal/deletecrumb";
import Crumbdeleted from "../pages/modal/crumbdeleted";
import Saveaudienceclicked from "../pages/modal/saveaudienceclicked";
import Uploaderrors from "../pages/modal/uploaderrors";
import Uploadprogress from "../pages/modal/uploadprogress";
import Uploadsuccess from "../pages/modal/uploadsuccess";
import Searchaudience from "../pages/modal/searchaudience";
import Drawer from "../pages/drawer/profile";
import Slide from "../pages/drawer/slide";
import Nav from "../components/Nav";
import Aside from "../components/aside";
import Drawer2 from "../pages/drawer/editprofile";
import Snackbar from "../pages/auth/snackbar";
import Unauthorized from "../components/Unauthorized.js";
import RequireAuth from "../components/RequireAuth.js";

const UseRout = () => {
  return (
    <Routes>
      {/* public routes */}
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />

      {/* We want to protect these routes */}
      <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]} />}>
        <Route path="/country" element={<SelectedCountry />} />
        {/* <Route path="/country" element={<SelectedCountry />} /> */}
        <Route path="/setnewpassword" element={<Forgotpassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/deletecrumbs" element={<DeleteCrumbs />} />
        <Route path="/crumbsdelete" element={<CrumbsDelete />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/map" element={<Maps />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/deletecrumb" element={<DeleteCrumb />} />
        <Route path="/crumbdeleted" element={<Crumbdeleted />} />
        <Route path="/saveaudienceclicked" element={<Saveaudienceclicked />} />
      </Route>
    </Routes>

    //   [
    //   {
    //     path: "/country",
    //     element: <SelectedCountry />,
    //   },
    //   {
    //     path: "/",
    //     element: <Login />,
    //   },
    //   {
    //     path: "/forgotpassword",
    //     element: <Forgotpassword />,
    //   },
    //   {
    //     path: "/setnewpassword",
    //     element: <Setnewpassword />,
    //   },
    //   {
    //     path: "/dashboard",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "/selectcountry",
    //     element: <SelectedCountry />,
    //   },
    //   {
    //     path: "/deletecrumbs",
    //     element: <DeleteCrumbs />,
    //   },
    //   {
    //     path: "/crumbsdelete",
    //     element: <CrumbsDelete />,
    //   },
    //   {
    //     path: "/modal",
    //     element: <Modal />,
    //   },
    //   {
    //     path: "/createcrumbs",
    //     element: <CreateCrumbs />,
    //   },
    //   {
    //     path: "/map",
    //     element: <Maps />,
    //   },
    //   {
    //     path: "/profile",
    //     element: <Profile />,
    //   },
    //   {
    //     path: "/editprofile",
    //     element: <Editprofile />,
    //   },
    //   {
    //     path: "/loading",
    //     element: <Loading />,
    //   },
    //   {
    //     path: "/deletecrumb",
    //     element: <DeleteCrumb />,
    //   },
    //   {
    //     path: "/crumbdeleted",
    //     element: <Crumbdeleted />,
    //   },
    //   {
    //     path: "/saveaudienceclicked",
    //     element: <Saveaudienceclicked />,
    //   },
    //   {
    //     path: "/uploaderrors",
    //     element: <Uploaderrors />,
    //   },
    //   {
    //     path: "/uploadprogress",
    //     element: <Uploadprogress />,
    //   },
    //   {
    //     path: "/uploadsuccess",
    //     element: <Uploadsuccess />,
    //   },
    //   {
    //     path: "/searchaudience",
    //     element: <Searchaudience />,
    //   },
    //   {
    //     path: "/drawer",
    //     element: <Drawer />,
    //   },
    //   {
    //     path: "/slide",
    //     element: <Slide />,
    //   },
    //   {
    //     path: "/nav",
    //     element: <Nav />
    //   },
    //   {
    //     path: "/aside",
    //     element: <Aside />
    //   },
    //   {
    //     path: "/drawer2",
    //     element: <Drawer2 />
    //   },
    //   {
    //     path: "/snackbar",
    //     element: <Snackbar />
    //   }
    // ]
  );
};

export default UseRout;
