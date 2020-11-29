import React from "react";
import PostItem from './PostItem'
import {ButtonMain} from "../../../../components/buttons/ButtonMain";

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
    <div className="posts-block__wrapper">
      <div className="posts-block__inner-wrapper">
        <h3 className="page__sub-title">My posts</h3>
        <div className="posts-block_create__wrapper">
          <div className="posts-block_create__form">
          <textarea
            className="add-post-field"
            placeholder="message"
            id="new-post-text"
            ref={newPostMessage}
            value={props.statePosts.postFieldText}
            onChange={onPostChange}
            onKeyPress={addPostOnPress}
          />
          <div className="btn-actions__wrapper __end">
            <ButtonMain text="Add Post" onClick={addPostOnButton}/>
          </div>
          </div>
        </div>

        <div className="posts-block_posts__wrapper">
          {
            props.statePosts.rowsPostsList.map((item, index) => (
              <PostItem
                key={item.id}
                {...item}
              />
            ))
          }
        </div>
      </div>
    </div>
  )

};

export default MyPosts;
