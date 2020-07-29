import React from 'react';



const ChatMessage = (props)=>{

    return(
        <li className="item_chat">
            <h4 className="name-item">{props.name}, {props.age} лет</h4>
            <span className="icon-chat">*</span>
            {props.message}
            <div className="like-wrap">
                <span className="like-chat">{props.like}</span>
                <i>likes</i>
            </div>
        </li>
    )

};

export default ChatMessage;

