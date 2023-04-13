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
        return (
          <MessagesMessage key={index} className={className}>
            <MessageContent className="MessageContent">
              <span className="username">{message.member.username}</span>
              <span className="text">{message.text}</span>
            </MessageContent>
          </MessagesMessage>
        );
      })}
    </MessagesList>
  );
};

export default Messages;