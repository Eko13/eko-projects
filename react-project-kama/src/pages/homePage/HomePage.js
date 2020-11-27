import React from 'react';
import Account from "./components/account/Account";
import MyPostsContainer from "./components/posts/MyPostsContainer";

const HomePage = (props) => {

    return (
        <div className="home-page__wrapper page__wrapper">

            <Account/>

            <MyPostsContainer
              statePosts={props.appData.profilePage}
              dispatch={props.dispatch}
            />

        </div>
    )

};

export default HomePage;
