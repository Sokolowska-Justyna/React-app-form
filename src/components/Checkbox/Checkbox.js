import React from "react";
import './Checkbox.scss';

export function Checkbox(props) {
    const { name, value, onClick, id, labelText } = props;
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                name={name}
                value={value}
                onClick={onClick}
                id={id}
                required />
            <label className="checkbox__label" htmlFor={id}>{labelText}</label>
        </div>
    );
}