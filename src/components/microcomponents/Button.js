import React from "react";

function Button({ title, handleForm, disable = false }) {
  return (
    <button
      disabled={disable}
      onClick={(e) => handleForm(e)}
      className={`w-full ${!disable ? "bg-primary" : "bg-textTersier"} py-3 rounded-full text-white ${
        !disable && "hover:bg-[#0B8870] focus:bg-[#0B8870]"
      } `}
    >
      {title}
    </button>
  );
}

export default Button;
