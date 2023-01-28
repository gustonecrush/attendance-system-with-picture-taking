// import react
import React from "react";
// import component
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

// component Dashboard
function Dashboard() {
  // check if user is admin or not, to determine the user dashboard
  const chooseDashboard = () => {
    // get token data if window is not undefined, fill with null if undefined
    // this is the solution that i get from stackoverflow to handle undefined value
    // when accessing the storage item
    const token =
      typeof window !== "undefined" ? localStorage.getItem("is_admin") : null;
    // return component Admin if token = 1, because it represents to if user is an admin
    // else return the component User
    return token == 1 ? <AdminDashboard /> : <UserDashboard />;
  };
  // return the component which has been checked belongs to admin or user
  return (
    <div className="bg-background lg:-ml-8 lg:w-9/12 rounded-tl-[2rem] mx-auto lg:mx-0 rounded-bl-[2rem] py-[14px] px-14 overflow-scroll">
      <div className="bg-background">{chooseDashboard()}</div>
    </div>
  );
}

export default Dashboard;
