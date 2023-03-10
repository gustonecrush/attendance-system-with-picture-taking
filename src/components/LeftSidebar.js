// import hooks
import React, { useState } from "react";
// import router
import { useRouter } from "next/router";
// import axios
import axios from "axios";
// import redux tools
import { useDispatch, useSelector } from "react-redux";
import { isAbsentEntry } from "redux/features/absentEntrySlice";
import { isAbsentOut } from "redux/features/absentOutSlice";
import { changeActive } from "redux/features/activeSlice";
import { selectMenu } from "redux/features/activeSlice";
// import image component
import Image from "next/image";
// impor sweetalert
import Swal from "sweetalert2";
import Link from "next/link";

// data menus of left sidebar
const menus = [
  { name: "Home", icon: "menu.svg" },
  { name: "Absent Entry", icon: "absent_entry.svg" },
  { name: "Absent Out", icon: "absent_out.svg" },
  { name: "Logout", icon: "logout.svg" },
];

// component LeftSidebar
function LeftSidebar() {
  // base url of backend or server
  const BASE_URL = process.env.NEXT_BASE_URL_BACKEND;
  // active menu state
  const active = useSelector(selectMenu);
  // dispatch to set global state
  const dispatch = useDispatch();
  // has absent (entry, out) global state
  const isEntry = useSelector(isAbsentEntry);
  const isOut = useSelector(isAbsentOut);
  // router for directing to another page
  const router = useRouter();
  // confirm logout function
  const confirmLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Want to Log Out",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#9599A6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log Out",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Successfully Log Out.", "success");
        logoutHandler();
      }
    });
  };
  // logout handler function
  const logoutHandler = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post(`${BASE_URL}/logout`).then((response) => {
      localStorage.removeItem("token");
      dispatch(changeActive("Home"));
      router.push("/auth");
    });
  };
  // active menu handler function
  const handleActive = (e, menu) => {
    e.preventDefault();
    if (menu.name !== "Logout") {
      dispatch(changeActive(menu.name));
    } else {
      confirmLogout();
    }
  };

  return (
    <div className="hidden w-[12.5%] lg:flex bg-secondary flex-col items-center pr-6 py-[90px] space-y-28">
      {/* Logo Dashboard */}
      <Image
        src="/logo_absent.svg"
        width={42.03}
        height={40}
        alt="User Background Profile"
        className="object-contain cursor-pointer"
      />

      {/* Menus Left Sidebar */}
      <section className="flex flex-col space-y-8">
        {menus.map((menu, i) => (
          <button
            key={i}
            className={`p-3 flex items-center justify-center rounded-xl ${
              active == menu.name
                ? "bg-primary animate-pulse"
                : "bg-transparent"
            }`}
            // onClick={(e) => {
            //   if (menu.name == "Home") {
            //     handleActive(e, menu);
            //   } else {
            //     if (!isEntry && menu.name == "Absent Out" && "Absent Out") {
            //       Swal.fire(
            //         "Fail!",
            //         "You have not absent entry yet.",
            //         "warning"
            //       );
            //     } else if (isEntry && menu.name == "Absent Entry") {
            //       Swal.fire("Fail!", "You have absent entry.", "warning");
            //     } else if (isOut && menu.name == "Absent Out") {
            //       Swal.fire("Fail!", "You have absent out.", "warning");
            //     } else {
            //       handleActive(e, menu);
            //     }
            //   }
            // }}
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
      </section>
    </div>
  );
}

export default LeftSidebar;
