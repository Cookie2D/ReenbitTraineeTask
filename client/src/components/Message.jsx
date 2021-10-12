import React from 'react';
import UserIcon from "../UI/UserIcon/UserIcon";

const Message = ({message, userImage}) => {
  const timeOptions = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }

  const time = new Date(message.time).toLocaleString('en-US', timeOptions);

  return (
    <div className={!message.receiver ? "message__receiver" : "message__sender"}>
      <div className="message__main">
        {!message.receiver || <UserIcon imgUrl={userImage} />}
        <div className='message__text'>{message.text}</div>
      </div>
      <p className="message__time">{time}</p>
    </div>
  );
};

export default Message;