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
                             ref,
                           }) => {
  return (
    <div className="field-custom__wrapper">
      {label && <label className="label">{label}</label>}
      <input
        ref={ref}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        onChange={onChange}
        className={`field-custom field-main ${addClass}`}
        value={value}
        disabled={disabled}
      />
      {errorName && (
        <p style={{color: "red"}}>error in field</p>
      )}
    </div>
  );
};
