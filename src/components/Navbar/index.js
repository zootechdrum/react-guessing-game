import React from "react";
import "./style.css";
import Logo from "../../images/pokeball.png"

function Navbar() {
    return (
        <nav className="navbar fixed-top">

            <img className="logo" src={Logo} alt="pokeboll" />
            <span class="navbar-text">
                Pokemon Guess Game
    </span>

        </nav>
    )
}

export default Navbar;