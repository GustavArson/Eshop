import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";


function Header() {
    const {pathname} = useLocation();

    return (
        <header>
            <h1><Link to="/">P'tite boutique tah le confort</Link></h1>
            <nav>
                <Link to="/" className={pathname === "/" ? "active" : null}>Acceuil</Link>
                <Link to="/" className={pathname === "/" ? "active" : null }><span>{/*longueur du cart*/}</span>Votre panier</Link>
            </nav>
        </header>
    );
}

export default Header;
