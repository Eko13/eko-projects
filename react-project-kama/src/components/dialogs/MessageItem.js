import React from 'react';

const MessageItem = props => {

    return (
        <div className={`${props.position}` + ' ' + `item-chat __wrap`}>
          <div className="item-chat __inner-wrap">
            <div className="item-chat __info">
              <h5>{props.name}</h5>
            </div>
            <div className="item-chat __message-wrap">
              <p>{props.message}</p>
            </div>
          </div>
        </div>
    )

};

export default MessageItem;