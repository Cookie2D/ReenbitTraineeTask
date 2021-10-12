import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import ChatBody from "../components/ChatBody";
import {Route} from "react-router-dom";
import {UserContext} from "../context/userContext";
import axios from "axios";

const Chat = () => {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    if (!localStorage.users || !localStorage.messages.length) {
      axios.get("https://my-json-server.typicode.com/Cookie2D/ReenbitTraineeTask/db")
        .then((res) => res.data)
        .then(data => {
          setUsers(data.users);
          setMessages(data.messages);
          localStorage.users = JSON.stringify(data.users)
          localStorage.messages = JSON.stringify(data.messages)
        });
    } else {
      const user = JSON.parse(localStorage.users);
      const message = JSON.parse(localStorage.messages);
      setUsers(user)
      setMessages(message)

    }

  },[])

  useEffect(() => {
    localStorage.messages = JSON.stringify(messages)
  }, [messages])

  const appendMessage = (message) => {
    setMessages(mes => [...mes, message])
  }

  return (
    <UserContext.Provider value={{users, messages, appendMessage}}>
      <div className="App">
        <Sidebar/>
        <Route exact path="/chats/:id" component={ChatBody}/>
      </div>
    </UserContext.Provider>
  );
};

export default Chat;