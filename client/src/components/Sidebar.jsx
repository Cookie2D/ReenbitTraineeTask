import React, {useContext, useEffect, useState} from 'react';
import "../styles/sidebar.scss"
import UserIcon from "../UI/UserIcon/UserIcon";
import Search from "../UI/Search/Search";
import ChatterList from "./ChatterList";
import {UserContext} from "../context/userContext";

const Sidebar = () => {
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [search, setSearch] = useState('');
  const {users, messages} = useContext(UserContext);

  useEffect(() => {
    setSearchedUsers(users)
  }, [])

  useEffect(() => {
    setSearchedUsers(users.filter(u => u.name.toLowerCase().includes(search.toLowerCase())))
    // eslint-disable-next-line
  }, [search, users])

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <UserIcon
          imgUrl="https://placeimg.com/64/64/any"
        />
        <Search value={search} setValue={setSearch}/>
      </div>

      <ChatterList users={searchedUsers} messages={messages}/>
    </aside>
  );
};

export default Sidebar;