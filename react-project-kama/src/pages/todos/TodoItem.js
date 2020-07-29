import React from 'react';


const TodoItem = props =>{
    return(
        <li>
            <input type="checkbox"/>
            <span>{props.title}</span>
        </li>
    )
};

export default TodoItem;