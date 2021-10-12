import React from 'react';
import "../styles/sidebar.scss"
import UserIcon from "../UI/UserIcon/UserIcon";
import Search from "../UI/Search/Search";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <UserIcon
          imgUrl="https://placeimg.com/64/64/any"
        />
        <Search/>
      </div>
    </aside>
  );
};

export default Sidebar;