import React, {useContext, useEffect, useState} from 'react';
import "../styles/chatBody.scss"
import UserIcon from "../UI/UserIcon/UserIcon";
import {UserContext} from "../context/userContext";
import {useParams} from "react-router-dom";
import Message from "./Message";
import MessageInput from "../UI/MessageInput/MessageInput";

const ChatBody = () => {

  const [user, setUser] = useState({});
  const [currentChatMessages, setCurrentChatMessages] = useState([]);
  const {users, messages} = useContext(UserContext);
  const {id} = useParams();

  useEffect(() => {
    setUser(users.find(user => user.id === +id) || {});
    const curMessages = messages.filter(m => m.chatId === +id);
    curMessages.sort((a, b) => new Date(a.time) - new Date(b.time));
    setCurrentChatMessages(curMessages);
  }, [id, messages, users])

  return (
    <div className="chat__body">
      <div className="chat__header">
        <UserIcon imgUrl={user.image}/>
        <h1 className="chat__username">{user.name}</h1>
      </div>

      <div className="chat__messagelist">
        {currentChatMessages.map((e, i) => <Message message={e} userImage={user.image} key={i}/>)}
      </div>

      <div className="chat__input">
        <MessageInput />
      </div>
    </div>
  );
};

export default ChatBody;