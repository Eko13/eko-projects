import React from "react";
import '../../../styles/post.sass';

const Post = () =>{
    return(
        <div className="post-wrapper">
            <h4>My post</h4>
            <div className="form-wrapper">
                <input type="text" placeholder="message"/>
                <button>Send</button>
            </div>
        </div>

    )
};

export default Post;