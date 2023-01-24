import React from "react";

function Input({ title, type = "text", name, value, onChange }) {
  return (
    <div className="flex flex-col space-y-3">
      <p className="text-textSecondary">{title}</p>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border-secondary text-secondary  border rounded-full py-[11px] px-6 focus:outline-primary"
      />
    </div>
  );
}

export default Input;
