import React from "react";

export const InputField = ({
                             name,
                             placeholder,
                             label,
                             type,
                             errorName,
                             onChange,
                             addClass,
                             disabled,
                             value,
                             as,
                           }) => {
  return (
    <div className="field">
      {label && <label className="label">{label}</label>}
      <input
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        className={`custom-field ${addClass}`}
      />
      {errorName && (
        <p style={{color: "red"}}>error in field</p>
      )}
    </div>
  );
};
