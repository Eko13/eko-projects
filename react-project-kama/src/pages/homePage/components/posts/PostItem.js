import React from 'react';
import ButtonLike from "../../../../components/buttons/ButtonLike";

const PostItem = ({name, age, message, like}) => {
  return (
    <div className="posts-block_item__wrapper">
      <h6 className="posts-block_item__name">{name}, <span>{age} лет</span></h6>
      <p>
        {message}
      </p>
      <div className="posts-block_item__actions">
        <div className="posts-block_item__likes">
          <span>{like}</span>
          <ButtonLike/>
        </div>
      </div>
    </div>
  )
};

export default PostItem;
