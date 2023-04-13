import React from "react";
import {
  MessagesList,
  MessagesMessage,
  MessageContent,
} from "../../utils/style/defaultStyles";

const Messages = ({ messages, currentMember }) => {
  return (
    <MessagesList>
      {messages.map((message, index) => {
        const isFromCurrentMember = message.member.id === currentMember.id;
        const className = isFromCurrentMember ? "messageFromMe" : "messageFromThem";
        
        console.log(message.member.id);
        console.log(currentMember.id);
        
        return (
          <MessagesMessage key={index} className={className}>
            <MessageContent className="MessageContent">
            <p className={className}>{message.member.clientData.username}</p>
              <p className="text">{message.text}</p>
            </MessageContent>
          </MessagesMessage>
        );
      })}
    </MessagesList>
  );
};

export default Messages;