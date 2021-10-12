import React, {useEffect, useState} from 'react';
import UserIcon from "../UI/UserIcon/UserIcon";

const Chatter = ({user, messages}) => {
  const timeOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  }
  const [lastMessage, setLastMessage] = useState("loading");
  const [lastMessageTime, setLastMessageTime] = useState("loading");

  useEffect( () => {
    const sortMessages = [...messages]
    sortMessages.sort((a, b) => new Date(b.time) - new Date(a.time))

    if (sortMessages.length) {
      setLastMessage(sortMessages[0].text);
      const date = new Date(sortMessages[0].time)
      setLastMessageTime(date.toLocaleString("en-US", timeOptions));
    }
    // eslint-disable-next-line
  }, [messages])

  return (
    <div className="chatter">
      <div className="chatter__info">
        <UserIcon
          imgUrl={user.image}
          read={user.read}
        />
        <div className="chatter__detail">
          <p className="detail__name">{user.name}</p>
          <p className="detail__message">{lastMessage}</p>
        </div>
      </div>

      <p className="chatter__time">
        {lastMessageTime}
      </p>
    </div>

  );
};

export default Chatter;