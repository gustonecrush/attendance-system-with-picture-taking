import React, { useState } from "react";

function Input({
  title,
  type = "text",
  name,
  value,
  onChange,
  validation = null,
  placeholder="",
  border=true,
}) {
  return (
    <div className={`flex flex-col ${!border? 'space-y-0' : 'space-y-3'}`}>
      <p className="text-textSecondary">{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`text-secondary ${
          !border ? "border-none" : "border-secondary"
        }  border rounded-full py-[11px] px-6 ${!border ? '-mt-4' : 'mt-0'} focus:outline-primary ${
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
