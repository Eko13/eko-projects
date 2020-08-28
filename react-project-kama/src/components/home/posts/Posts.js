import React from "react";
import "../../../styles/posts.sass";
import PostItem from './PostItem'
import {addNewPostActionCreator, updateNewPostActionCreator }from '../../../dataRedux/reducers/postsReducer';


const Posts = props => {

  let newPostMessage = React.createRef();


  const addPost = () => {
    let postText = newPostMessage.current.value;
    props.dispatch(addNewPostActionCreator(postText));
  };

  const onPostChange = () => {
    let changeNewText = newPostMessage.current.value;
    let action = updateNewPostActionCreator(changeNewText);
    props.dispatch(action);
  };

  const addPostOnButton = () => {
    if (props.statePosts.postFieldText !== '') {
      addPost();
    }
  };

  const addPostOnPress = event => {
    if (event.key === "Enter" && props.statePosts.postFieldText !== '') {
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
            id="new-post-text"
            ref={newPostMessage}
            value={props.statePosts.postFieldText}
            onChange={onPostChange}
            onKeyPress={addPostOnPress}
          />
          <button
            className="btn"
            onClick={addPostOnButton}
          >
            Add Post
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