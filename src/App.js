import React, { useState, useEffect } from 'react';
import './App.css';
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { randomColor, randomName } from "./utils/style/data";
import { Home,Header } from './utils/style/defaultStyles';

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);
  useEffect(() => {
    const drone = new window.Scaledrone("7IJPlwfF3zL37kgK", {
      data: member
    });
    setDrone(drone);
    drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      else {
        console.log("connected to scaledrone" );
      }
      const updatedMember = {...member};
      updatedMember.id = drone.clientId;
      setMember(updatedMember);
      console.log(updatedMember);
    });
    const room = drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      setMessages(prevMessages => [...prevMessages, {member, text: data}]);
    });
  
  }, [member,drone]);
  const onSendMessage = (message) => {
    const drone = new window.Scaledrone("7IJPlwfF3zL37kgK");
    drone.publish({
      room: "observable-room",
      text: message,
      member,
    });
  };
  return (
    <Home>
      <Header>
        <h1>My Chat App</h1>
        </Header>
      <Messages
        messages={messages}
        currentMember={member}
      />
      <Input
        onSendMessage={onSendMessage}
      />
    </Home>
  );
}

export default App;