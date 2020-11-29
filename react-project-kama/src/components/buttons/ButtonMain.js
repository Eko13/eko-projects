import React from "react";
import cn from "classnames";

export const ButtonMain = ({addClass, text, onClick, icon, disabled, loading, styles}) => {
  return (
    <button
      className={cn(
        "btn-custom btn-main",
        {[addClass]: !!addClass},
      )}
      style={styles}
      onClick={onClick}
      disabled={disabled || loading}
      type="button"
    >
      {loading ?
        "loading"
        :
        <>
          {icon ? <img src={icon} alt=""/> : null}
          {text}
        </>
      }
    </button>
  )
};
