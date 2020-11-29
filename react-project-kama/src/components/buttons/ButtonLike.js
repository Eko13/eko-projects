import React from "react";
import cn from "classnames";

const ButtonLike = ({onClick, addClass}) => {
  return (
    <button
      className={cn("btn-custom btn-like", {[addClass]: !!addClass})}
      onClick={onClick}
      type="button"
    >
      like
    </button>
  );
};

export default ButtonLike;