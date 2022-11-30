import React from "react";
import {Link, Outlet} from 'react-router-dom'
import Nav from "./Nav";


const Header = () => {

    return(
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    )
}

export default Header;