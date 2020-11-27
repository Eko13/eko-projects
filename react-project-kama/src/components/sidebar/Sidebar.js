import React from "react";
import '../../assets/styles/modules/segments/sidebar.sass';
import {NavLink} from "react-router-dom";
import BestFriends from "../friends/BestFriends";

const Sidebar = () => {

    return (
        <div className="sidebar__wrapper">
            <ul>
                <li><NavLink to="/home" className="item_sidebar">Home</NavLink></li>
                <li><NavLink to="/dialogs" exact className="item_sidebar">Dialogs</NavLink></li>
                <li><NavLink to="/todo" className="item_sidebar">To do page</NavLink></li>
            </ul>

            <BestFriends/>

        </div>
    )
};

export default Sidebar;
