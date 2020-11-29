import React from 'react';
import MessageItem from './components/MessageItem';
import DialogItem from './components/DialogItem';
import {addNewMessageTextCreator, updateNewMessageTextCreator} from '../../dataRedux/reducers/dialogsReducer';
import ChatForm from "./components/ChatForm";
import {ButtonMain} from "../../components/buttons/ButtonMain";

const DialogsPage = props => {

  let newMessageText = React.createRef();

  const addNewMessage = () => {
    props.dispatch(addNewMessageTextCreator());
  };

  const onMessageChange = () => {
    let messageText = newMessageText.current.value;
    props.dispatch(updateNewMessageTextCreator(messageText));
  };

  return (
    <div className="dialogs-page__wrapper page__wrapper">
      <h2 className="page__title">Dialogs</h2>
      <div className="flex-wrapper">
        <div className="dialogs-page_dialogs__wrapper">
          <div className="dialogs-page_dialogs__inner-wrapper">
            {props.stateDialogs.rowsListDialogs.map((ld, index) => (
              <DialogItem
                key={`LIST_DIALOGS_ITEM_${index}`}
                name={ld.name}
                id={ld.id}/>
            ))}
          </div>
        </div>
        <div className="dialogs-page_chat__wrapper">
          <div className="dialogs-page_chat__inner-wrapper">
            <div className="dialogs-page_chat__list">
              {props.stateDialogs.rowsChatDialogs.map((item, index) => (
                <MessageItem
                  key={`CHAT_DIALOGS_ITEM_${index}`}
                  name={item.personName}
                  message={item.message}
                  timeSend={item.timeSend}
                  id={item.id}
                  position={item.whoWrite}
                />
              ))}
            </div>
            <div className="dialogs-page_chat__form">
              <div className="chat_form__wrapper">
              <textarea
                ref={newMessageText}
                name="newMassage"
                placeholder="New massage"
                value={props.stateDialogs.chatFieldText}
                onChange={onMessageChange}
              />
                <div className="btn-actions__wrapper __end">
                  <ButtonMain text="Send Message" onClick={addNewMessage}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DialogsPage;
