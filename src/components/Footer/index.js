import React from "react";
import "./style.css";
import Logo from "../../images/pokemon-logo-footer1.png"

function Footer() {
    return (
        <footer>
            <div className="footer">
                <img className="footer-logo" src={Logo} alt="pokeboll" />   
            </div>

        </footer>
    )
}

export default Footer;