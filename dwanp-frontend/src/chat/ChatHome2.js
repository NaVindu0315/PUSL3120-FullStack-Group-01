import './chatstyle.css';
import { useState } from "react";
import ChatPage from './ChatPage';

import io from "socket.io-client";
import MyComponent from '../navbar';

const socket = io.connect("http://localhost:3001");
function ChatHome2() {

    const [username,setuserrname] = useState("");
   // const [room,setroom] = useState(""); 
    const room = 23;
    //for chat displaying 
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => { 
        if(username !== "" && room !== "") {
          socket.emit("join_room",room);
          setShowChat(true);
        }
    
       }
       return (
        
        <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
            <navbar>
                <MyComponent></MyComponent>
            </navbar>
            <h3>Join A Chat</h3>
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setuserrname(event.target.value);
              }}
            />
           
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <ChatPage socket={socket} username={username} room={room} />
        )}
      </div>
    );


}

export default ChatHome2;