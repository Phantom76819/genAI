import React, { useState, useEffect} from 'react';
import ChatMessage from './ChatMessage';
import { OpenAI } from 'openai';


function PopChat() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;
    addMessage(userInput, 'human');
    setUserInput('');

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: userInput,
      max_tokens: 150,
    });

    if (response.data) {
      addMessage(response.data.choices[0].text, 'ai');
    }
  };

  const addMessage = (text, sender) => {
    setMessages(messages => [...messages, { text, sender }]);
  };


  return (
    <main>
      <section className="chatbot-container">
        <div className="chatbot-header">
          <h2>Ask me!</h2>
          <p className="supportId">User ID: 76819</p>
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
            Send
          </button>
        </form>
      </section>
    </main>
  );
}

export default PopChat;
