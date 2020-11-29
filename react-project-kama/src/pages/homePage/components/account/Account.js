import React from "react";

const Account = ({name, avatar, lastName}) => {
  return (
    <div className="account-block__wrapper">
      <div className="account-block__inner-wrapper">
        <div className="account-block__image">
          <img src={avatar} alt=""/>
        </div>
        <h3 className="account-block__name">{name} {lastName}</h3>
        <ul className="account-block_list">
          <li><b>Date:</b></li>
          <li><b>City:</b></li>
          <li><b>Educations:</b></li>
          <li><b>Web Site:</b></li>
        </ul>
      </div>
    </div>
  )
};

export default Account;
