import React from 'react';
import {NavLink} from "react-router-dom";

const DialogItem = props => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="dialogs-page_dialogs__item">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;
