import React, { useState, useEffect } from 'react';
//import io from 'socket.io-client';
import io from 'socket.io-client';

/*const socket = io('http://localhost:3001'); 
// Connect to backend socket server
socket.on('connection',socket=> {
    socket.omit('chat msg','hello world')
})
*/
const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
   const socket = io('http://localhost:3001');

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      socket.emit('chat message', inputMessage);
      setInputMessage('');
    };

    const messageContainer = document.getElementById('message-container');
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }, []);

  return (
    <div>
      <div id="message-container">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form id="send-container" onSubmit={handleSubmit}>
        <input type="text" id="message-input" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <button type="submit" id="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;
