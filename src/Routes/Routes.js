import {useRoutes} from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Forgotpassword from "../pages/forgotpassword"
import Setnewpassword from "../pages/setnewpassword"
import Product from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import React from "react";
import SelectedCountry from "../pages/SelectedCountry";

const UseRout = () => { return  useRoutes([
  {
        path: "/as",
        element: <SelectedCountry/>,
    },
    {
        path: "/",
        element: <Login/>
    },
    {
        path:"/forgotpassword",
        element: <Forgotpassword/>
    },
    {
        path:"/setnewpassword",
        element: <Setnewpassword/>
    },
    {
        path: "/products",
        element: <Product/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    },
    {
        path: "/selectcountry",
        element: <SelectedCountry/>
    }
])};

export default UseRout;