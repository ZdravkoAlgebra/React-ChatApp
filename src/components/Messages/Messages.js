import { useState, useEffect } from 'react';
import { MessagesList } from '../../utils/style/defaultStyles';

function Messages(props) {
  console.log("messages props:", props.messages);
  console.log("current member props:", props.currentMember);
  const [currentMember, setCurrentMember] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setCurrentMember(props.currentMember);
    setMessages(props.messages);
  }, [props.currentMember, props.messages]);

  function renderMessage(message, index) {
    const { member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe ? "Messages-message messageFromMe" : "Messages-message";
  
    return (
      <li key={index} className={className}>
        <span className="avatar" style={{ backgroundColor: member.clientData.color }} />
        <div className="MessageContent">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }
  
  return (
    <MessagesList>
      {messages.map(m => renderMessage(m))}
    </MessagesList>
  );
}

export default Messages;