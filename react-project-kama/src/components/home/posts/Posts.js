import React from "react";
import "../../../styles/posts.sass";
import PostItem from './PostItem'
import state from "../../../dataRedux/state";

const Posts = props => {

    const addPostButton = () => {
        alert('newPost');
    };

    return (
        <div className="posts-wrapper">

            <div className="post-wrapper">
              <h4>My post</h4>
              <div className="form-wrapper">
                <input className="add-post-field"
                       type="text"
                       placeholder="message"
                       id="new-post-text"/>
                <button className="btn"
                        onClick={addPostButton}
                >Add Post</button>
              </div>
            </div>

            <ul className="list_posts">
                {
                    state.profilePage.rowsPostsList.map((cp, index) => (
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