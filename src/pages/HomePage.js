import React, { useContext } from "react";
import './Home.css';
import TextAnimation from "../components/animations/TextAnimation";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className='home'>
        <Header/>
                <div className="title"> <TextAnimation/> </div>
        </div>
    )
}

export default Home