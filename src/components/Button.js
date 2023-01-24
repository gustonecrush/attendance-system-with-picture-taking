import React from "react";

function Button({ title, handleForm, bg="bg-primary", disable = false }) {
  return (
    <button
      disabled={disable}
      onClick={(e) => handleForm(e)}
      className={`w-full ${bg} py-3 rounded-full text-white ${
        !disable && "hover:bg-[#0B8870] focus:bg-[#0B8870]"
      } `}
    >
      {title}
    </button>
  );
}

export default Button;
