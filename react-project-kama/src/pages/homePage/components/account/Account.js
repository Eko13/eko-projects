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
          <li>Date: <b>info</b></li>
          <li>City: <b>info</b></li>
          <li>Educations: <b>info</b></li>
          <li>Web Site: <b>info</b></li>
        </ul>
      </div>
    </div>
  )
};

export default Account;
