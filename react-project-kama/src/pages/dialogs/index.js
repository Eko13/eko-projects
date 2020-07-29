import React from 'react';
import "../../styles/dialogs.sass"
import MessageItem from '../../components/dialogs/MessageItem'
import DialogItem from '../../components/dialogs/DialogItem'

const Dialogs = props => {

    return (
        <div className="dialogs-wrapper">

            <div className="list-dialogs_wrap">
                {props.stateMessages.rowsListDialogs.map((ld, index) => (
                    <DialogItem
                        key={`LIST_DIALOGS_ITEM_${index}`}
                        name={ld.name}
                        id={ld.id}/>
                ))}
            </div>

            <div className="chat-dialogs_wrap">
                {props.stateMessages.rowsChatDialogs.map((cd, index) => (
                    <MessageItem
                        key={`CHAT_DIALOGS_ITEM_${index}`}
                        message={cd.message}
                        id={cd.id}/>
                ))}
            </div>

        </div>
    )
};

export default Dialogs;