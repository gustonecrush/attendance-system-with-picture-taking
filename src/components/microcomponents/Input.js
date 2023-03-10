// import react
import React from "react";

// component Input
function Input({
  title,
  type = "text",
  name,
  value,
  onChange,
  validation = null,
  placeholder = "",
  border = true,
  onClick = null,
}) {
  return (
    <div className={`flex flex-col ${!border ? "space-y-0" : "space-y-3"}`}>
      {/* Label Input */}
      <p className="text-textSecondary">{title}</p>
      {/* Input */}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onClick={onClick}
        className={`text-secondary ${
          !border ? "border-none" : "border-secondary"
        }  border rounded-full py-[11px] px-6 ${
          !border ? "-mt-4" : "mt-0"
        } focus:outline-primary ${
          validation != null ? "border-red-600" : "border-secondary"
        }`}
      />
      {/* Validation Errors */}
      {validation != null ? (
        <p className="text-red-600 text-[0.8rem] -mt-5">
          {validation.map((item, i) => (
            <span>
              *{" "}
              {item === "The password format is invalid."
                ? "The password must contain atleast one [1..9, A..Z, a..z, $%!*]."
                : item}
              <br />
            </span>
          ))}{" "}
        </p>
      ) : null}
    </div>
  );
}

export default Input;
