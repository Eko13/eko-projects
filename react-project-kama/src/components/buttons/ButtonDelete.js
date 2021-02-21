import React from "react";
import cn from "classnames";

const ButtonDelete = ({addClass, onClick}) => {
  return (
    <button
      className={cn(
        "btn-custom btn-delete",
        {[addClass]: !!addClass},
      )}
      onClick={onClick}
      type="button"
    >
      delete
    </button>
  )
};

export default ButtonDelete;