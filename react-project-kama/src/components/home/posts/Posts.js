import React from "react";
import "../../../styles/posts.sass";
import PostItem from './PostItem'

const Posts = props => {

  let newPostTitle = React.createRef();

  const addPost = () => {
    let postText = newPostTitle.current.value;
    props.addNewPost(postText);
  };

  const onPostChange = () => {
    let changeText = newPostTitle.current.value;
    props.updatePostText(changeText);
  };

  const addPostOnButton = ()=>{
    if(props.statePosts.newPostText !== ''){
      addPost();
    }
  };

  const addPostOnPress = event =>{
    if(event.key === "Enter" && props.statePosts.newPostText !== ''){
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
            value={props.statePosts.newPostText}
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