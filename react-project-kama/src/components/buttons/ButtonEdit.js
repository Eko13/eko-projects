import React from "react";
import cn from "classnames";

const ButtonEdit = ({onClick, addClass}) => {
  return (
    <button
      className={cn("btn-custom btn-edit", {[addClass]: !!addClass})}
      onClick={onClick}
      type="button"
    >
      edit
    </button>
  );
};

export default ButtonEdit;