import AuthUser from './landing/forms/AuthUser'; 
import { useState } from "react";
import "../App.css";

function Header() {
    const [isNavVisible, setNavVisible] = useState(false);
    const [isFormVisible, setFormVisible] = useState(false);

    const toggleNavBar = () => {
        setNavVisible(!isNavVisible);
    };

    const toggleForm = () => {
        setFormVisible(!isFormVisible);
    };

    return (
        <>
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
                        <a href="./">Home</a>
                        <a href="#about">About</a>
                        <a href="#developments">Developments</a>
                        <a href="#contacts">Contact</a>
                        {!isFormVisible && (
                            <div className="getInBtn">
                                <button onClick={toggleForm}>Login</button>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {isFormVisible && (
                <div className="form-popup">
                    <AuthUser />
                    <button className="close-btn" onClick={toggleForm}>Close</button>
                </div>
            )}
        </>
    );
}

export default Header;
