import React from 'react';
import UserIcon from "../UI/UserIcon/UserIcon";

const Chatter = ({user}) => {
  const timeOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }

  return (
    <div className="chatter">
      <div className="chatter__info">
        <UserIcon
          imgUrl={user.image}
          read={user.read}
        />
        <div className="chatter__detail">
          <p className="detail__name">{user.name}</p>
          <p className="detail__message">{user.lastMessage}</p>
        </div>
      </div>

      <p className="chatter__time">
        {user.lastMessageTime.toLocaleString("en-US", timeOptions)}
      </p>
    </div>

  );
};

export default Chatter;