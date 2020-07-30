import React from "react";
import "../../../styles/chat.sass";
import ChatMessage from './ChatMessage'
import state from "../../../dataRedux/state";

const Chat = props => {

    return (
        <div className="chat-wrapper">
            <ul className="list_chat">
                {
                    state.profilePage.rowsChatPostList.map((cp, index) => (
                        <ChatMessage
                            key={`CHAT_POST_ITEM_${index}`}
                            name={cp.name}
                            age={cp.age}
                            message={cp.age}
                            like={cp.like}/>
                    ))
                }
            </ul>
        </div>
    )

};

export default Chat;