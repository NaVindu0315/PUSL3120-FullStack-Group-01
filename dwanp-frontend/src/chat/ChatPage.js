import React from "react";
import { useState,useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import MyComponent from "../navbar";
import Navbarr from "../authenication/Navbarr";
// import { useLocation } from "react-router-dom";

function ChatPage ({ socket, username, room })  {
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author :username,
                message : currentMessage,
                time : new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    };
    await socket.emit("send_message", messageData);
    setMessageList((list) => [...list, messageData]);
    setCurrentMessage("");
}
};
useEffect(() => {
    const messageReceiver = (data) => {
        setMessageList((list) => [...list, data]);
    };

    socket.on("receive_message", messageReceiver);

    // Clean up the event listener when the component unmounts
    return () => {
        socket.off("receive_message", messageReceiver);
    };
}, [socket]);
return (
    <div className="chat-window">
        <MyComponent></MyComponent>
        <div className="chat-header">
            <p>Connect With DWANP</p>
        </div>
        <ScrollToBottom className="messageContainer">
        <div className="chat-body">
          
            {messageList.map((messageContent) => {
                return (
                    <div className="message"
                     id={username ===messageContent.author ? "other" : "you"}>
                        <div>
                           
                     
                        <div className="message-content">
                        <p>{messageContent.message}</p>
                          
                       
                        </div>
                        <div className="message-meta">     <p id="time">{messageContent.time}</p> 
                        <p id="author">{messageContent.author}</p>
                        </div>
                        </div>
                    </div>
                )
            },)}

        </div>
        </ScrollToBottom>
        <div className="chat-footer">
            <input type="text" placeholder="Type your message" 
            value={currentMessage}
            onChange={

                (event) => {
                    setCurrentMessage(event.target.value);
                }
            }
            onKeyUp={
                (event) => {
                    event.key === "Enter"&&
                        sendMessage();
                    
                }
            }
            />
            <button
            onClick={sendMessage}
            >&#9658;</button>
        </div>
    </div>
)

}


export default ChatPage;