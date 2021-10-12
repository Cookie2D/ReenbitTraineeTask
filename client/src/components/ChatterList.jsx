import React from 'react';
import Chatter from "./Chatter";

const ChatterList = ({users, messages}) => {
  return (
    <div className="chattersList">
      <h1 className="chattersList__title">Chats</h1>
      {users.map((user, id) => {
        const userMessages = messages.filter(m => m.chatId === user.id)
        return <Chatter key={id} user={user} messages={userMessages}/>
      })}
    </div>
  );
};

export default ChatterList;