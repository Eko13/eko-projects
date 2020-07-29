import React from "react";
import "../../../styles/chat.sass";
import ChatMessage from './ChatMessage'


const Chat = props => {

    return (
        <div className="chat-wrapper">
            <ul className="list_chat">
                {
                    props.state.rowsChatPostList.map((cp, index) => (
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