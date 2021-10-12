import React from 'react';
import "../styles/sidebar.scss"
import checked from "../UI/UserIcon/checked.png"
import UserIcon from "../UI/UserIcon/UserIcon";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <UserIcon
          imgUrl="https://placeimg.com/64/64/any"
        />
        <div>
          <input
            type="text"
            placeholder="Search or start new chat"
            className="header__search"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;