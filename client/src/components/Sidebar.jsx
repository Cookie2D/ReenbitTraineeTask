import React from 'react';
import "../styles/sidebar.scss"
import UserIcon from "../UI/UserIcon/UserIcon";
import Search from "../UI/Search/Search";
import Chatter from "./Chatter";

const Sidebar = () => {

  const users = [
    {
      name: "Alice Freeman",
      image: "https://placeimg.com/128/128/any",
      read: true,
      lastMessage: "You are the worst!",
      lastMessageTime: new Date(2021, 10, 11, 5, 6, 0),
    }, {
      name: "Josefina",
      image: "https://placeimg.com/128/128/any",
      read: true,
      lastMessage: "We are losing money! Quick!",
      lastMessageTime: new Date(2021, 13, 11, 5, 2, 0),
    }, {
      name: "Barrera",
      image: "https://placeimg.com/128/128/any",
      read: true,
      lastMessage: "Quickly come to the meeting room 1B, we have a big server issue",
      lastMessageTime: new Date(2020, 10, 11, 5, 6, 0),
    }
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <UserIcon
          imgUrl="https://placeimg.com/64/64/any"
        />
        <Search/>
      </div>

      <div className="chattersList">
        <h1 className="chattersList__title">Chats</h1>
        {users.map((user, id) => <Chatter key={id} user={user} />)}
      </div>
    </aside>
  );
};

export default Sidebar;