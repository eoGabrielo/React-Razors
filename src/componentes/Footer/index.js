import React from "react";
import "./footer.css";
import FacebookLogo from "./img/facebook.png";
import InstagramLogo from "./img/instagram.png";

function Footer(){
    return(
        <footer>
            <figure>
                <img src={FacebookLogo}></img>
                <img src={InstagramLogo}></img>
            </figure>

            <div>
                <p>Gabriel - ©2022 Razors Skate Co.</p>
            </div>
        </footer>
    );
}

export default Footer;