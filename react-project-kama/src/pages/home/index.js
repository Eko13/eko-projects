import React from 'react';
import Banner from "../../components/home/banner/Banner";
import Account from "../../components/home/account/Account";
import Posts from "../../components/home/posts/Posts";

import "../../styles/home.sass"

const HomePage = props => {

    return (
        <div className="main-page">

            <Banner/>

            <Account/>

            <Posts
              statePosts={props.appData.profilePage}
              dispatch={props.dispatch}
            />

        </div>
    )

};

export default HomePage;

