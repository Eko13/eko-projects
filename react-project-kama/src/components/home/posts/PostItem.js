import React from 'react';

const PostItem = (props)=>{

    return(
        <li className="item_posts">
            <h4 className="name-item">{props.name}, {props.age} лет</h4>
            <span className="icon-chat">*</span>
            {props.message}
            <div className="like-wrap">
                <span className="like-post">{props.like}</span>
                <i>likes</i>
            </div>
        </li>
    )

};

export default PostItem;

