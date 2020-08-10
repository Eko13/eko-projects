import React from "react";
import '../../styles/sidebar.sass';
import {NavLink} from "react-router-dom";
import BestFriends from "../friends/BestFriends";

const Sidebar = props => {

    return (
        <div className="sidebar">
            <ul>
                <li><NavLink to="/home" className="item_sidebar">Home</NavLink></li>
                <li><NavLink to="/dialogs" exact className="item_sidebar">Dialogs</NavLink></li>
                <li><NavLink to="/news" className="item_sidebar">News</NavLink></li>
                <li><NavLink to="/music" className="item_sidebar">Music</NavLink></li>
                <li><NavLink to="/settings" className="item_sidebar">Settings</NavLink></li>
                <li><NavLink to="/todo" className="item_sidebar">To do page</NavLink></li>
            </ul>

            <BestFriends/>

        </div>
    )
};

export default Sidebar;