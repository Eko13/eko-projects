import React from 'react';
import "../../styles/dialogs.sass";
import MessageItem from '../../components/dialogs/MessageItem';
import DialogItem from '../../components/dialogs/DialogItem';


const Dialogs = props => {

  let newMessageText = React.createRef();

  const addNewMessage = () => {
    let textMessage = newMessageText.current.value;
    if(textMessage !== ''){
      alert(textMessage);
    }else{
      alert('Нельзя')
    }
  };

  return (
    <div className="dialogs-wrapper">

      <h2>Dialogs</h2>

      <div className="flex-wrapper">

        <div className="list-dialogs __wrap">
          {props.stateDialogs.rowsListDialogs.map((ld, index) => (
            <DialogItem
              key={`LIST_DIALOGS_ITEM_${index}`}
              name={ld.name}
              id={ld.id}/>
          ))}
        </div>

        <div className="chat-dialogs __wrap">

          <div className="messages-dialogs __wrap">
            {props.stateDialogs.rowsChatDialogs.map((cd, index) => (
              <MessageItem
                key={`CHAT_DIALOGS_ITEM_${index}`}
                name={cd.personName}
                message={cd.message}
                timeSend={cd.timeSend}
                id={cd.id}
                position={cd.whoWrite}
              />
            ))}
          </div>

          <div className="write-message __wrap">
            <div className="field-wrapper">
              <textarea
                name="newMassage"
                placeholder="New massage"
                ref={newMessageText}
              />
              <button
                className="btn"
                onClick={addNewMessage}
              >Send Message
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
};

export default Dialogs;