import React from "react";
import "../../../assets/styles/modules/posts.sass";
import PostItem from './PostItem'

const MyPosts = props => {

  let newPostMessage = React.createRef();

  const addPost = () => {
    let postText = newPostMessage.current.value;
    props.addPost(postText);
  };

  const onPostChange = () => {
    let changePostField = newPostMessage.current.value;
    props.postChange(changePostField);
  };

  const addPostOnButton = (event) => {
    if ( props.statePosts.postFieldText !== ''){
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
              key={cp.id}
              {...cp}
            />
          ))
        }
      </ul>
    </div>
  )

};

export default MyPosts;
