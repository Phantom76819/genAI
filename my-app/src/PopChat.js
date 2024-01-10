import React, { useState } from 'react';
import ChatMessage from './ChatMessage.js';

function PopChat() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    const newMessage = { text: userInput, sender: 'human' };
    setMessages([...messages, newMessage]);
    setUserInput('');
    // Add logic here for sending message to OpenAI and receiving response
  };

  return (
    <main>
      <section className="chatbot-container">
        <div className="chatbot-header">
          <img src="images/owl-logo.png" className="logo" alt="logo" />
          <h1>KnowItAll</h1>
          <h2>Ask me anything!</h2>
          <p className="supportId">User ID: 2344</p>
        </div>
        <div className="chatbot-conversation-container" id="chatbot-conversation">
          {messages.map((message, index) => (
            <ChatMessage key={index} text={message.text} sender={message.sender} />
          ))}
        </div>
        <form className="chatbot-input-container" onSubmit={handleSubmit}>
          <input
            name="user-input"
            type="text"
            id="user-input"
            required
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button id="submit-btn" className="submit-btn" type="submit">
            <img src="images/send-btn-icon.png" className="send-btn-icon" alt="Send" />
          </button>
        </form>
      </section>
    </main>
  );
}

export default PopChat;
