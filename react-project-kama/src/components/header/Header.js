import React from "react";
import '../../styles/header.sass';

const Header = () => {

    const foo = () =>{
      alert('Header not working, but work sidebar!')
    };

    return (
        <div className="header">
            <button href='#' className="brand-link">
                <img src="https://w7.pngwing.com/pngs/219/256/png-transparent-phoenix-logo-flame-football-s-daquan-leaf-flower-symbol.png" alt=""/>
            </button>
            <div>
                <button onClick={foo} className="header-link">FAQ</button>
                <button onClick={foo} className="header-link">TEST</button>
                <button onClick={foo} className="header-link">LINK</button>
            </div>
        </div>
    )
};

export default Header;