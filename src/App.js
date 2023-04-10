import React, { useState, useEffect } from 'react';
import './App.css';
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { randomColor, randomName } from "./utils/style/data";

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });

  useEffect(() => {
    const drone = new window.Scaledrone("bw5oDrecQj3augNm", {
      data: member
    });

    drone.on('open', error => {
      if (error) {
        return console.error(error);
      }

      const updatedMember = {...member};
      updatedMember.id = drone.clientId;
      setMember(updatedMember);
    });

    const room = drone.subscribe("observable-room");

    room.on('data', (data, member) => {
      setMessages(prevMessages => [...prevMessages, {member, text: data}]);
    });


    return () => {
      drone.close();
    };
  }, [member]);

  const onSendMessage = (message) => {
    const drone = new window.Scaledrone("bw5oDrecQj3augNm");
    drone.publish({
      room: "observable-room",
      message,
      member
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>My Chat App</h1>
      </div>
      <Messages
        messages={messages}
        currentMember={member}
      />
      <Input
        onSendMessage={onSendMessage}
      />
    </div>
  );
}

export default App;