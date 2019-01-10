import React from "react";
import "./EmailInput.scss";

export const EmailInput = props => {
  const { placeholder, name, required, onChange, value } = props;

  return (
    <input
      type="email"
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
      className="email-input"
    />
  );
};
