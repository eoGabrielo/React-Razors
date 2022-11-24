import React from "react";
import "./header.css";
import RazorsLogo from "./img/razorsLogo.png";
import FacebookLogo from "./img/facebook.png";
import InstagramLogo from "./img/instagram.png";

function Header(){
    return(
        <header>
            
            <figure>
                <img src={RazorsLogo}alt="Logo-Razors"></img>
            </figure>

            <nav>
                <ul className="links">
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">PRODUTOS</a></li>
                    <li><a href="#">TAMANHO</a></li>
                    <li><a href="#">ENDEREÇO</a></li>
                </ul>
            </nav>

            <figure className="redes">
                <img src={FacebookLogo}alt="Logo-Razors"></img>
                <img className="padding" src={InstagramLogo}alt="Logo-Razors"></img>
            </figure>


        </header>
    );
}

export default Header;