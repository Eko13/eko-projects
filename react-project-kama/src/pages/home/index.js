import React from 'react';
import Banner from "../../components/home/banner/Banner";
import Account from "../../components/home/account/Account";
import MyPostsContainer from "../../components/home/posts/MyPostsContainer";

import "../../assets/styles/modules/home.sass"

const HomePage = props => {

    return (
        <div className="home-page__wrapper page__wrapper">

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
