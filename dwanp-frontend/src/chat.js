import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const socket = io('http://localhost:3001');
const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => { // Define handleSubmit here
    e.preventDefault();
    socket.emit('send-chat-message', inputMessage);
    setInputMessage('');
  };

  useEffect(() => {
   

    setName(prompt('What is your name?'));
    socket.emit('new-user', name);

    socket.on('chat-message', (data) => {
      setMessages((prevMessages) => [...prevMessages, `${data.name}: ${data.message}`]);
    });

    socket.on('user-connected', (name) => {
      setMessages((prevMessages) => [...prevMessages, `${name} connected`]);
    });
    socket.on('user-disconnected', (name) => {
      setMessages((prevMessages) => [...prevMessages, `${name} disconnected`]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <div id="message-container">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form id="send-container" onSubmit={handleSubmit}> {/* Use handleSubmit here */}
        <input type="text" id="message-input" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <button type="submit" id="send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatApp;
