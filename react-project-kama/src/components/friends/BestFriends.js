import React from 'react';

import state from "../../dataRedux/state";

const BestFriends = props => {

  return (
    <div className="best-friends __wrap">
      <div className="best-friends __inner-wrap">
        {state.bestFriends.rowBestFriends.map((bf, index) => (
          <div className="friend-item __wrap"
               key={`BEST_FRIEND_ITEM_${index}`}
          >
            <div className="friend-item __image">
              <img src={bf.avatarImage} alt="Avatar"/>
            </div>
            <div className="friend-item __name">
              {bf.personName}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default BestFriends;