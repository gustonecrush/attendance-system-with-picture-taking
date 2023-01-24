import React, { useEffect, useState } from "react";
import { Heading } from "./microcomponents";

function Absent({ type }) {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="w-full mt-7 p-8 bg-white max-h-screen min-h-fit overflow-scroll rounded-2xl shadow-aestheticShadow">
          <h1 className="text-secondary font-light text-[16px]">
            {`${date.toLocaleTimeString()}`}
          </h1>
          <Heading title={type} />
        </div>
      </div>
    </div>
  );
}

export default Absent;
