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
            <h3>DWANP Chat</h3>
            <div className='d'>
                <h5>
                    
                </h5>
            </div>
            <input
            className='paka'
              type="text"
              placeholder="Enter your name"
              onChange={(event) => {
                setuserrname(event.target.value);
              }}
            />
           <div>
            <h1></h1>
            </div>
            <button className="btnpaka"onClick={joinRoom}>Connect</button>
          </div>
        ) : (
          <ChatPage socket={socket} username={username} room={room} />
        )}
      </div>
    );


}

export default ChatHome2;