import React from "react";
import Input from "./Input";
import { Heading } from "./microcomponents";

function Attendances() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="w-full mt-7 p-2  bg-white max-h-full min-h-fit overflow-scroll rounded-2xl shadow-aestheticShadow">
          <Input
            placeholder="Quick search by product, feature, report, etc ..."
            type="text"
            border={false}
          />
        </div>

        <div className="w-full mt-7 p-8 bg-white max-h-full min-h-fit overflow-scroll rounded-2xl shadow-aestheticShadow">
          <Heading title="Statistics" />
        </div>

        <div className="w-full mt-7 p-8 bg-white max-h-full min-h-fit overflow-scroll rounded-2xl shadow-aestheticShadow">
          <Heading title="Your attendances" />
        </div>
      </div>
    </div>
  );
}

export default Attendances;
