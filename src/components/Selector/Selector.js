import React from "react";
import "./Selector.scss";

export function Selector(props) {
  const { currentValue, values, emptyValueText, onChange, name } = props;
  return (
      <select
        name={name}
        value={currentValue}
        required
        onChange={onChange}
        className="select-input"
      >
        <option key="" value="" disabled>
          {emptyValueText}
        </option>
        
        {values.map(val => {
          const key = Object.keys(val);
          return (
            <option key={key} value={key}>
              {val[key]}
            </option>
          );
        })}
      </select>
  );
}
