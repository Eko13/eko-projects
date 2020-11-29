import React from 'react';
import store from "../../../../dataRedux/store";

const BestFriends = () => {
  return (
    <div className="best-friends__wrapper">
      <h6>Best friends</h6>
      <div className="best-friends_list">
        {store.getState().bestFriends.rowBestFriends.map((item, index) => (
          <div className="best-friends_item"
               key={`BEST_FRIEND_ITEM_${index}`}
          >
            <a className="abs-link"></a>
            <div className="best-friends_item__image">
              <img src={item.avatarImage} alt="Avatar"/>
            </div>
            <div className="best-friends_item__name">
              {item.personName}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default BestFriends;
