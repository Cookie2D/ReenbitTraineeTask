import React from 'react';
import checked from "./checked.png";
import classes from './userIcon.module.scss';

const UserIcon = ({imgUrl = "", read = false}) => {
  return (
    <div className={classes.user__icon}>
      <img
        src={imgUrl}
        alt="userName"
        className={classes.icon}
      />
      {read && <img
        src={checked}
        alt="read"
        className={classes.user__read}
      />
      }
    </div>
  );
};

export default UserIcon;