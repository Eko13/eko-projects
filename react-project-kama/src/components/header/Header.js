import React from "react";
import '../../assets/styles/modules/segments/header.sass';

const Header = () => {
  return (
    <div className="header__wrapper">
      <button className="header_brand__wrapper">
        brand
      </button>
      <div className="header_list__wrapper">
        <button>faq</button>
        <button>test1</button>
        <button>test2</button>
      </div>
    </div>
  )
};

export default Header;
