import { useState } from "react";
import "../App.css";
function Header(){
    const [isNavVisible, setNavVisible]= useState(false);
    const toggleNavBar=()=>{
        setNavVisible(!isNavVisible)
    }
    return(
        <header>
            <div className="branding" id="home">
                <h1>HomeNest Developments</h1>
            </div>
            <div className="navmenu">
                <div id="toggleBar" onClick={toggleNavBar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`navbar ${isNavVisible ? "show" : ""}`}>
                    <a href="./index.html">Home</a>
                    <a href="#about">About</a>
                    <a href="#developments">Developments</a>
                    <a href="#contacts">Contact</a>
                    <div className="getInBtn">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;