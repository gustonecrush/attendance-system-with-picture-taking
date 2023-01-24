import React from "react";
import { useSelector } from "react-redux";
import { selectMenu } from "redux/features/activeSlice";

function Content() {
  const activeMenu = useSelector(selectMenu);

  const ContentDashboard = () => {
    if (activeMenu == "Home") {
      return <p>HOME</p>;
    } else if (activeMenu == "Absent Entry") {
      return <p>Absent Entry</p>;
    } else if (activeMenu == "Absent Out") {
      return <p>Absent Out</p>;
    } else {
      return <p>LOGOUT</p>;
    }
  };

  return <div>{ContentDashboard()}</div>;
}

export default Content;
