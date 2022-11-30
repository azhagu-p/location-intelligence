import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex bg-indigo-500">
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/products'}>products</Link>
        </nav>
    )
}

export default Nav