import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActive } from "redux/features/activeSlice";
import { selectMenu } from "redux/features/activeSlice";
import { store } from "redux/store";

const menus = [
  { name: "Home", icon: "menu.svg" },
  { name: "Absent Entry", icon: "absent_entry.svg" },
  { name: "Absent Out", icon: "absent_out.svg" },
  { name: "Logout", icon: "logout.svg" },
];

function LeftSidebar() {
  const [active, setActive] = useState("Home");

  const dispatch = useDispatch();

  const handleActive = (e, menu) => {
    e.preventDefault();
    dispatch(changeActive(menu.name));
    setActive(menu.name);
  };

  return (
    <div className="w-[13.5%] bg-secondary flex flex-col items-center pr-6 py-[90px] space-y-28">
      <Image
        src="/logo_absent.svg"
        width={42.03}
        height={40}
        alt="User Background Profile"
        className="object-contain"
      />
      <span className="flex flex-col space-y-8">
        {menus.map((menu, i) => (
          <button
            key={i}
            className={`p-3 flex items-center justify-center rounded-xl ${
              active == menu.name
                ? "bg-primary animate-pulse"
                : "bg-transparent"
            }`}
            onClick={(e) => handleActive(e, menu)}
          >
            <Image
              src={`/icons/${menu.icon}`}
              width={24}
              height={24}
              alt="Menu Icon"
              className={`object-contain`}
            />
          </button>
        ))}
      </span>
    </div>
  );
}

export default LeftSidebar;
