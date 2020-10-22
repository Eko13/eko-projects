import React from 'react';
import Banner from "../../components/home/banner/Banner";
import Account from "../../components/home/account/Account";
import MyPostsContainer from "../../components/home/posts/MyPostsContainer";

import "../../styles/home.sass"

const HomePage = props => {

    return (
        <div className="main-page">

            <Banner/>

            <Account/>

            <MyPostsContainer
              statePosts={props.appData.profilePage}
              dispatch={props.dispatch}
            />

        </div>
    )

};

export default HomePage;
