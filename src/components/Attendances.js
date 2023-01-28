// import react
import React from "react";
// import microcomponents
import { Heading, Input, Table } from "./microcomponents";

// component Attendances
function Attendances() {
  return (
    <div>
      <div className="flex flex-col">
        {/* Search Container */}
        <div className="w-full mt-7 p-2  bg-white max-h-full min-h-fit overflow-scroll rounded-2xl shadow-aestheticShadow">
          <Input
            placeholder="Quick search by date, month, and year"
            type="text"
            border={false}
          />
        </div>

        {/* Statistics Section */}
        <div className="w-full mt-7 p-8 bg-white max-h-full min-h-fit overflow-scroll rounded-2xl shadow-aestheticShadow">
          <Heading title="Statistics" />
        </div>

        {/* Attendances Employee */}
        <div className="w-full mt-7 p-8 bg-white max-h-full min-h-fit rounded-2xl shadow-aestheticShadow">
          <Heading title="Your attendances" />
          <article className="w-full overflow-x-scroll pb-4">
            <Table />
          </article>
        </div>
      </div>
    </div>
  );
}

export default Attendances;
