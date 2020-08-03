import React from "react";
import "../../../styles/posts.sass";
import PostItem from './PostItem'
import state from "../../../dataRedux/state";

const Posts = props => {

    return (
        <div className="posts-wrapper">

            <div className="post-wrapper">
              <h4>My post</h4>
              <div className="form-wrapper">
                <input className="add-post-field" type="text" placeholder="message"/>
                <button className="btn">Send</button>
              </div>
            </div>

            <ul className="list_posts">
                {
                    state.profilePage.rowsChatPostList.map((cp, index) => (
                        <PostItem
                            key={`POST__ITEM_${index}`}
                            name={cp.name}
                            age={cp.age}
                            message={cp.age}
                            like={cp.like}/>
                    ))
                }
            </ul>
        </div>
    )

};

export default Posts;