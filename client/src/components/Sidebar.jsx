import React, {useEffect, useState} from 'react';
import "../styles/sidebar.scss"
import UserIcon from "../UI/UserIcon/UserIcon";
import Search from "../UI/Search/Search";
import Chatter from "./Chatter";
import axios from "axios";

const Sidebar = () => {
  const [messages, setMessages] = useState([]);
  const [initUsers, setInitUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  useEffect(() => {
      axios.get("https://my-json-server.typicode.com/Cookie2D/ReenbitTraineeTask/db")
        .then((res) => res.data)
        .then(data => {
          setInitUsers(data.users)
          setUsers(data.users);
          setMessages(data.messages);
        });
  },[])

  useEffect(() => {
    setUsers(initUsers.filter(u => u.name.toLowerCase().includes(search.toLowerCase())))
    // eslint-disable-next-line
  }, [search])

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <UserIcon
          imgUrl="https://placeimg.com/64/64/any"
        />
        <Search value={search} setValue={setSearch}/>
      </div>

      <div className="chattersList">
        <h1 className="chattersList__title">Chats</h1>
        {users.map((user, id) => {
          const userMessages = messages.filter(m => m.chatId === user.id)
          return <Chatter key={id} user={user} messages={userMessages}/>
        })}
      </div>
    </aside>
  );
};

export default Sidebar;