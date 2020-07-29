import React from 'react';
import Banner from "../../components/home/banner/Banner";
import Account from "../../components/home/account/Account";
import Post from "../../components/home/post/Post";
import Chat from "../../components/home/chat/Chat";

import "../../styles/home.sass"

const HomePage = props => {

    return (
        <div className="main-page">

            <Banner/>

            <Account/>

            <Post/>

            <Chat/>

        </div>
    )

};

export default HomePage;

