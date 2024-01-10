import React from 'react';

function ChatMessage({ text, sender }) {
  const isHuman = sender === 'human';
  const messageClass = isHuman ? 'speech-human' : 'speech-ai';

  return (
    <div className={`speech ${messageClass}`}>
      {text}
    </div>
  );
}

export default ChatMessage;
