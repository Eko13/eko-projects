import React from 'react';

const MessageItem = props => {

  let findWriter = (position) => {
    if (position === 'you') {
      return 'right-side';
    } else {
      return "left-side";
    }
  };

  return (
    <div className={`chat_item__wrapper ${findWriter(props.position)}`}>
      <div className="chat_item__inner-wrapper">
        <div className="chat_item__info __wrapper">
          <h6 className="chat_item__info __name">{props.name}</h6>
          <span className="chat_item__info __time">{props.timeSend}</span>
          <span className="chat_item__info __id">Message id: {props.id}</span>
        </div>
        <div className="chat_item__message __wrapper">
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  )

};

export default MessageItem;
