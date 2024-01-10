import React, { Component } from 'react';
import './PopChat.css';

class PopChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatOpen: false,
      messages: [],
      currentAIResponse: '',
    };

    this.reader = null;
    this.textRef = React.createRef();
    this.handleSend = this.handleSend.bind(this);
    this.processLine = this.processLine.bind(this);
    this.toggleChat = this.toggleChat.bind(this);
  }

  toggleChat() {
    this.setState(prevState => ({ chatOpen: !prevState.chatOpen }));
  }
  componentDidUpdate() {
    const msgArea = document.querySelector('.msg-area');
    msgArea.scrollTop = msgArea.scrollHeight;
  }


  // async handleSend() {
  //   const newMessage = this.textRef.current.value;
  //   let updateMessages;
  //   if (newMessage.trim() !== '') {
  //     updateMessages = [...this.state.messages, { role: 'user', text: newMessage }];
  //     const prompts = updateMessages.map(msg => msg.text);
  //     this.setState({ messages: updateMessages },async ()=>{
  //       this.textRef.current.value = '';


  
  //       if (this.reader) {
  //         await this.reader.cancel();
  //         console.log("Existing connection closed");
  //       }
  //       await this.fetchAndProcess(apiUrl, prompts);

  //     });

  //   }
  // }
  //

  // async fetchAndProcess(url, params) {
  //   console.log(params);
  //   try {
  //     const result = await fetch(url, {
  //       method: 'POST',
  //       body: JSON.stringify(params),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     });

  //     this.reader = result.body.getReader();
  //     console.log(this.reader);
  //     while (true) {
  //       const { done, value } = await this.reader.read();
  //       console.log({ done, value });
  //       if (done) {
  //         break;
  //       }
  //       const chunk = new TextDecoder('utf-8').decode(value);
  //       this.processLine(chunk);
  //     }
  //   } catch (error) {
  //     console.error('Fetch error:', error);
  //     // Handle error
  //   } finally {
  //     if (this.reader) {
  //       await this.reader.cancel();
  //       console.log("Connection closed");
  //     }
  //   }
  // }
  // processLine(chunk) {
  //   // console.log(chunk);
  //   this.setState(prevState => {
  //     const { messages } = prevState;
  //     const role = messages[messages.length - 1].role;
  //     let newMessages;
  
  //     if (role === "user") {
  //       newMessages = [...messages, { role: "system", text: chunk }];
  //     } else {
  //       const updatedLastMessage = { role: "system", text: messages[messages.length - 1].text + chunk };
  //       newMessages = [...messages.slice(0, -1), updatedLastMessage];
  //     }
  
  //     return {
  //       messages: newMessages,

  //     };
  //   });
  // }
  // clearMessages() {
  //   this.setState({ messages: [] ,chatOpen:false});
  // }
  // handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     this.handleSend();
  //   }
  // };
  

  // renderMessages() {
  //   return this.state.messages.map((message, index) => (
  //     <p key={index} className={`${message.role === 'user' ? 'right' : 'left'}`}>
  //       <span>{message.text}</span>
  //     </p>
  //   ));
  // }

  render() {
    return (
      <div id='chatCon'>
        <div className="chat-box" style={this.state.chatOpen ? { display: 'block' } : { display: 'none' }}>
          <div className="header">
            Chat with me
            <button onClick={this.clearMessages.bind(this)}>Clear Chat</button>
          </div>
          <div className="msg-area">
            <p className="left">
              <span>Hello, I am your assistant</span>
            </p>
            {this.renderMessages()}
          </div>
          <div className="footer">
            <input type="text" ref={this.textRef} onKeyDown={this.handleKeyDown}/>
            <button onClick={this.handleSend}>
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div className="pop">
          <p>
            <button onClick={this.toggleChat}>Chat</button>
          </p>
        </div>
      </div>
    );
  }
}

export default PopChat;
