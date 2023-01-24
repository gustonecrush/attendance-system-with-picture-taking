import React from "react";
import Content from "./Content";

function Dashboard() {

  const chooseDashboard = () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("is_admin") : null;
    return token == 1 ? (
      <p className="text-red-500 text-2xl">DASHBOARD ADMIN</p>
    ) : (
      <Content />
    );
  };

  return (
    <div className="bg-background -ml-8 w-9/12 rounded-tl-[2rem] rounded-bl-[2rem] py-[14px] px-14 overflow-scroll">
      <div className="bg-background">{chooseDashboard()}</div>
    </div>
  );
}

export default Dashboard;
