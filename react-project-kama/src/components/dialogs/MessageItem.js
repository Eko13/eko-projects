import React from 'react';

const MessageItem = props => {

  // let leftPosition = () => {
  //   if (props.position === 'you') {
  //     setPosition('right-side');
  //   }else if (props.position === 'person'){
  //     setPosition('left-side');
  //   }else{
  //     setPosition('');
  //   }
  // };

  return (
      <div className={`${props.position}` + ' ' + 'item-chat __wrap'}>
        <div className="item-chat __inner-wrap">
          <div className="item-chat __info">
            <h5 className="name">{props.name}</h5>
            <span className="time">{props.timeSend}</span>
          </div>
          <div>
            Message id: {props.id}
          </div>
          <div className="item-chat __message-wrap">
            <p>{props.message}</p>
          </div>
        </div>
      </div>
  )

};

export default MessageItem;
