import './NavBar.css'
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">
                    <button type="button"><span>🏠<br />Home</span></button>
                </Link>
            </li>
            <li>
                <Link to="/new">
                    <button type="button"><span>🕌<br />New</span></button>
                </Link>
            </li>
            <li>
                <Link to="/ancient">
                    <button type="button"><span>🏛<br />Ancient</span></button>
                </Link>
            </li>
            <li>
                <Link to="/natural">
                    <button type="button"><span>🏔<br />Natural</span></button>
                </Link>
            </li>
            <li>
                <Link to="/quiz">
                    <button type="button"><span>📝<br />Quiz</span></button>
                </Link>
            </li>
            <li>
                <Link to="/map">
                    <button type="button"><span>🗺️<br />Map</span></button>
                </Link>

            </li>
        </ul>
    );
}

export default NavBar;