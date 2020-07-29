import React from "react";
import '../../styles/header.sass';

const Header = () => {

    return (
        <div className="header">
            <a href='#' className="brand-link">
                <img src="https://w7.pngwing.com/pngs/219/256/png-transparent-phoenix-logo-flame-football-s-daquan-leaf-flower-symbol.png" alt=""/>
            </a>
            <div>
                <a href='#s' className="header-link">FAQ</a>
                <a href='#s' className="header-link">TEST</a>
                <a href='#s' className="header-link">LINK</a>
            </div>
        </div>
    )
};

export default Header;