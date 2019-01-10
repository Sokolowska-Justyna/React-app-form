import React from "react";
import "./TextInput.scss";

export const TextInput = props => {
  const { placeholder, name, required, onChange, value } = props;

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
      className="text-input"
    />
  );
};
