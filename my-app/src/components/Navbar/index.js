import React from "react";
import "./style.css";
import Logo from "../../images/pokeball.png"

function Navbar() {
    return (
        <nav className="navbar">
            <img className = "logo" src = {Logo} alt="pokeboll" />

        </nav>
            )
        }
        
export default Navbar;