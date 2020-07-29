import React from 'react';
import {NavLink} from "react-router-dom";


const DialogItem = props => {

    let path = "/dialogs/" + props.id;

    return (
        <React.Fragment>
            <div className="item-dialogs_wrap">
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </React.Fragment>
    )

};

export default DialogItem;

