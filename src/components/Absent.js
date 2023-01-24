import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "./Button";
import { Heading } from "./microcomponents";

function Absent({ type }) {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
  }, [webcamRef]);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="w-full mt-7 p-8 bg-white max-h-full min-h-fit overflow-scroll rounded-2xl shadow-aestheticShadow">
          <h1 className="text-secondary font-light text-[16px]">
            {`${date.toLocaleTimeString()}`}
          </h1>
          <Heading title={type} />
          <div class="flex items-center w-fill justify-center">
            <div class="flex flex-col mt-10 items-center justify-center bg-white p-5 shadow-aestheticShadow w-fit rounded-2xl space-y-4">
              <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
                width={380}
                className="rounded-2xl"
              />
              <Button title={"Take a Picture"} handleForm={capture} />
              <Button title={"Absent"} bg="bg-textTersier" disable={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Absent;
