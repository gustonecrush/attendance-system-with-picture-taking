import React from "react";

function Button({ title, handleForm }) {
  return (
    <button onClick={(e) => handleForm(e)} className="w-full bg-primary py-3 rounded-full text-white hover:bg-[#0B8870] focus:bg-[#0B8870]">
      {title}
    </button>
  );
}

export default Button;
