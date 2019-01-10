import React from "react";
import "./SubmitButton.scss";

export const SubmitButton = props => {
  const { value } = props;

  return (
    <input
      type="submit"
      value={value}
      className="submit-input"
    />
  );
};