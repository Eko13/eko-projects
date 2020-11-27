import React from "react";
import {addNewPostActionCreator, updateNewPostActionCreator }from '../../../../dataRedux/reducers/postsReducer';
import MyPosts from "./MyPosts";

const MyPostsContainer = props => {

  const onAddPost = (postText) => {
    props.dispatch(addNewPostActionCreator(postText));
  };

  const onPostChange = (changePostField) => {
    let action = updateNewPostActionCreator(changePostField);
    props.dispatch(action);
  };

  return (
    <MyPosts
        statePosts={props.statePosts}
        addPost={onAddPost}
        postChange={onPostChange}
    />
  )

};

export default MyPostsContainer;
