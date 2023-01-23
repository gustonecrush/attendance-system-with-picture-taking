import Image from "next/image";
import React from "react";

function LeftSidebar() {
  return (
    <div className="w-[16.5%] bg-secondary flex flex-col items-center pr-5 py-[90px]">
      <Image
        src="/logo_absent.svg"
        width={42.03}
        height={40}
        alt="User Background Profile"
        className="object-contain"
      />
    </div>
  );
}

export default LeftSidebar;
