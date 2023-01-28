// import react
import React from "react";
// import redux tools
import { useSelector } from "react-redux";
import { selectMenu } from "redux/features/activeSlice";
// import components
import Absent from "./Absent";
import Attendances from "./Attendances";

function Content() {
  // get state global of active menu right now
  const activeMenu = useSelector(selectMenu);
  // check active menu to determine the content of Dashboard component
  const ContentDashboard = () => {
    if (activeMenu == "Home") {
      return <Attendances />;
    } else if (activeMenu == "Absent Entry") {
      return <Absent type={activeMenu} />;
    } else if (activeMenu == "Absent Out") {
      return <Absent type={activeMenu} />;
    }
  };
  // return the component the result of checking active menu
  return <div>{ContentDashboard()}</div>;
}

export default Content;
