import React from "react";
import { Heading } from "./microcomponents";

function Absent({ type }) {
  return (
    <div>
      <div>
        <Heading title={type} />
      </div>
    </div>
  );
}

export default Absent;
