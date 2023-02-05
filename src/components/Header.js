import React from "react";
import Logo from "../logo2.jfif"


function Header () {
    return (

        <header className="header-content">
            <div className="header-content">
            <img className="imgLogo" src={Logo}/>
            <h1 class="tituloblog">EL RINCON ARGENTINO</h1>
            <nav class="nav">
                <div>
                <ul>
                    <li></li>
                    <li>Acerca de Nosotros</li>
                    <li>|</li>
                    <li>Menu</li>
                    <li><a href="#reservacion">Reservacion</a></li>
                </ul>
                </div>
            </nav>
            </div>
        </header>
    );
}

   export default Header;