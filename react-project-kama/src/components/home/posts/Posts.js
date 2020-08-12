import React from "react";
import "../../../styles/posts.sass";
import PostItem from './PostItem'
import {addNewPostActionCreator, updateNewPostActionCreator }from '../../../dataRedux/store';


const Posts = props => {

  let newPostTitle = React.createRef();

  const addPost = () => {
    let postText = newPostTitle.current.value;
    // props.appStore.addNewPost(postText);
    props.dispatch(addNewPostActionCreator(postText));
  };

  const onPostChange = () => {
    let changeNewText = newPostTitle.current.value;
    // props.updateNewPost(changeNewText);
    let action = updateNewPostActionCreator(changeNewText);
    props.dispatch(action);
  };

  const addPostOnButton = () => {
    if (props.staticText.postStaticText !== '') {
      addPost();
    }
  };

  const addPostOnPress = event => {
    if (event.key === "Enter" && props.staticText.postStaticText !== '') {
      addPost();
    }
  };

  return (
    <div className="posts-wrapper">

      <div className="post-wrapper">
        <h4>My post</h4>
        <div className="form-wrapper">
          <textarea
            className="add-post-field"
            placeholder="message"
            ref={newPostTitle}
            id="new-post-text"
            value={props.staticText.postStaticText}
            onChange={onPostChange}
            onKeyPress={addPostOnPress}
          />
          <button className="btn"
                  onClick={addPostOnButton}
          >Add Post
          </button>
        </div>
      </div>

      <ul className="list_posts">
        {
          props.statePosts.rowsPostsList.map((cp, index) => (
            <PostItem
              key={`POST__ITEM_${index}`}
              {...cp}
            />
          ))
        }
      </ul>
    </div>
  )

};

export default Posts;