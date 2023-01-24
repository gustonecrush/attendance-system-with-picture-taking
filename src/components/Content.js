import React from "react";
import { useSelector } from "react-redux";
import { selectMenu } from "redux/features/activeSlice";
import Absent from "./Absent";
import Attendances from "./Attendances";

function Content() {
  const activeMenu = useSelector(selectMenu);

  const ContentDashboard = () => {
    if (activeMenu == "Home") {
      return <Attendances />;
    } else if (activeMenu == "Absent Entry") {
      return <Absent type={activeMenu} />;
    } else if (activeMenu == "Absent Out") {
      return <Absent type={activeMenu} />;
    } 
  };

  return <div>{ContentDashboard()}</div>;
}

export default Content;
