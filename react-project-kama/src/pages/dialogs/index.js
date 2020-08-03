import React from 'react';
import "../../styles/dialogs.sass"
import MessageItem from '../../components/dialogs/MessageItem'
import DialogItem from '../../components/dialogs/DialogItem'
import state from "../../dataRedux/state";


const Dialogs = props => {

    return (
        <div className="dialogs-wrapper">

            <h2>Dialogs</h2>

            <div className="flex-wrapper">
                <div className="list-dialogs_wrap">
                    {state.messagesPage.rowsListDialogs.map((ld, index) => (
                        <DialogItem
                            key={`LIST_DIALOGS_ITEM_${index}`}
                            name={ld.name}
                            id={ld.id}/>
                    ))}
                </div>

                <div className="chat-dialogs_wrap">
                    {state.messagesPage.rowsChatDialogs.map((cd, index) => (
                        <MessageItem
                            key={`CHAT_DIALOGS_ITEM_${index}`}
                            message={cd.message}
                            id={cd.id}/>
                    ))}
                </div>
            </div>

        </div>
    )
};

export default Dialogs;