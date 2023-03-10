import React from "react";
import Image from "next/image";

function RightSidebar({ user }) {
  return (
    <div className="bg-secondary w-[27%] px-10 rounded-tl-[2rem] rounded-bl-[2rem] hidden lg:flex flex-col items-center py-[50px]">
      {/* Profile Picture */}
      <section className="relative flex items-center justify-center">
        <Image
          src="/user_bg.png"
          width={91}
          height={91}
          alt="User Background Profile"
          className="object-contain"
        />
        <Image
          src="/user.png"
          width={80}
          height={80}
          alt="User Profile"
          className="object-contain rounded-full absolute"
        />
      </section>

      {/* Identity User */}
      <section className="flex flex-col mt-4 items-center-justify-center text-center">
        <h1 className="text-white text-[20px]">{user.name}</h1>
        <p className="text-textSecondary text-[1rem] font-light">
          Software Engineer
        </p>
      </section>
    </div>
  );
}

export default RightSidebar;
