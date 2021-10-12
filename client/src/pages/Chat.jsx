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
    axios.get("https://my-json-server.typicode.com/Cookie2D/ReenbitTraineeTask/db")
      .then((res) => res.data)
      .then(data => {
        setUsers(data.users);
        setMessages(data.messages);
      });
  },[])

  return (
    <UserContext.Provider value={{users, messages}}>
      <div className="App">
        <Sidebar/>
        <Route exact path="/chats/:id" component={ChatBody}/>
      </div>
    </UserContext.Provider>
  );
};

export default Chat;