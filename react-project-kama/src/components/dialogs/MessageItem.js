import React from 'react';

const MessageItem = props => {

    return (
        <div className="item-chat_wrap">
            <div className="item-chat">{props.message}</div>
        </div>
    )

};

export default MessageItem;