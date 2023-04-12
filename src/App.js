import React, { useState, useEffect } from 'react';
import './App.css';
import Messages from "./components/Messages/Messages";
import Input from "./components/Input/Input";
import { randomColor, randomName } from "./utils/style/data";
import { AppHeader, AppWrapper,GlobalStyles } from './utils/style/defaultStyles';

function App() {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: randomName(),
    color: randomColor(),
  });
  const [drone, setDrone] = useState(null);

  useEffect(() => {
    console.log("useEffect pozvan");
    const drone = new window.Scaledrone("7IJPlwfF3zL37kgK", {
      data: member
    });
    setDrone(drone);
  }, [member]);

  useEffect(() => {
    // DEFAULT SCALEDRONE ACTIONS
    const droneEvents = () => {
      drone.on("open", (error) => {
        if (error) {
          return console.error(error);
        }
        roomEvents();
      });
      drone.on("error", (error) => console.error(error));
      drone.on("disconnect", () => {
        console.log(
          "Disconnected, Scaledrone reconnect"
        );
      });
      drone.on("reconnect", () => {
        console.log("Reconnected");
      });
    };

    // SCALEDRONE HAS ROOMS WHICH HAVE SOME ACTIONS
    const roomEvents = () => {
      const room = drone.subscribe(`observable-room`);
      room.on("open", (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Im here in room");
        }
      });
      room.on("message", (message) => {
        receiveMsg(message);
      });
    };

    // RECEIVING MESSAGES FROM SCALEDRONE
    const receiveMsg = (message) => {
      setMessages(messages =>[...messages,message]);
    };

    if (drone && !member.username) {
      droneEvents();
    }
  }, [drone, member]);

  const onSendMessage = (message) => {
    if (drone && drone.id) {
      drone.publish({
        room: "observable-room",
        text: message,
        member,
      });
    }
  };

  return (
    <>
    <GlobalStyles />
    <AppWrapper>
      <AppHeader>
        <h1>My Chat App</h1>
      </AppHeader>
      <Messages
        messages={messages}
        currentMember={member}
      />
      <Input
        onSendMessage={onSendMessage}
      />
    </AppWrapper>
    </>
  );
}

export default App;