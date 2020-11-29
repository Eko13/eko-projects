import React from "react";
import {NavLink} from "react-router-dom";
import BestFriends from "./components/BestFriends";

const Sidebar = () => {

  return (
    <div className="sidebar__wrapper">
        <div className="sidebar_brand__wrapper">
          <a className="sidebar_brand__link">EKO-PROJECTS</a>
        </div>

        <ul className="sidebar_list">
          <li className="sidebar_list__item"><NavLink to="/home" exact className="item_sidebar">Home</NavLink></li>
          <li className="sidebar_list__item"><NavLink to="/dialogs" exact className="item_sidebar">Dialogs</NavLink>
          </li>
          <li className="sidebar_list__item"><NavLink to="/todo" exact className="item_sidebar">To do page</NavLink></li>
        </ul>

        <BestFriends/>
    </div>
  )
};

export default Sidebar;
