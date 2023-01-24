import React, { useState } from "react";

function Input({
  title,
  type = "text",
  name,
  value,
  onChange,
  validation = null,
}) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-textSecondary">{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`text-secondary border-secondary  border rounded-full py-[11px] px-6 focus:outline-primary ${
          validation != null ? "border-red-600" : "border-secondary"
        }`}
      />
      {validation != null ? (
        <p className="text-red-600 text-[0.8rem] -mt-5">
          *{" "}
          {validation.map((item, i) => (
            <span>{item}</span>
          ))}{" "}
        </p>
      ) : null}
    </div>
  );
}

export default Input;
