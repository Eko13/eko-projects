import React from 'react';
import Account from "./components/account/Account";
import MyPostsContainer from "./components/posts/MyPostsContainer";
import {accountConst} from "../../constants/accountConsts";


const HomePage = (props) => {
  return (
    <div className="home-page__wrapper page__wrapper">
      <h2 className="page__title">Home</h2>
      <div className="flex-wrapper">
        <Account name={accountConst.name} avatar={accountConst.avatar} lastName={accountConst.lastName}/>

        <MyPostsContainer
          statePosts={props.appData.profilePage}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  )
};

export default HomePage;
