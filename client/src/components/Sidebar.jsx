import React from 'react';
import "../styles/sidebar.scss"
import checked from "../assets/icons/checked.png"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="user__icon">
          <img
            src="https://placeimg.com/64/64/any"
            alt="userName"
            className="icon"
          />
          <img
            src={checked}
            alt="read"
            className="user__read"
          />
        </div>
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