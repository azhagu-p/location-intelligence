import {useRoutes} from "react-router-dom";
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Product from "../pages/Products";
import Dashboard from "../pages/Dashboard";
import React from "react";

const UseRout = () => { return  useRoutes([
   /* {
        path: "/",
        element: <Home/>,
    },*/
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/products",
        element: <Product/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>
    }
])};

export default UseRout;