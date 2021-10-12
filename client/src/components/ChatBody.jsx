import React, {useContext, useEffect, useState} from 'react';
import "../styles/chatBody.scss"
import UserIcon from "../UI/UserIcon/UserIcon";
import {UserContext} from "../context/userContext";
import {useParams} from "react-router-dom";

const ChatBody = () => {
  const [user, setUser] = useState({});
  const {users, messages} = useContext(UserContext);
  const {id} = useParams();

  useEffect(() => {
    setUser(users.find(user => user.id === +id) || {});
  }, [id])

  return (
    <div className="chat__body">
      <div className="chat__header">
        <UserIcon imgUrl={user.image} />
        <h1 className="chat__username">{user.name}</h1>
      </div>

      <div className="chat__messagelist">m list</div>

      <div className="chat__input">input</div>
    </div>
  );
};

export default ChatBody;