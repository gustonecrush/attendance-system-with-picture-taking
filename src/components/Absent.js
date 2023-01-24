import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import Button from "./Button";
import { Heading } from "./microcomponents";

function Absent({ type }) {
  const [date, setDate] = useState(new Date());
  const [picture, setPicture] = useState("");
  const [disable, setDisable] = useState(true);

  const tick = () => {
    setDate(new Date());
  };

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPicture(imageSrc);
    setDisable(false);
  }, [webcamRef]);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);

  console.log(picture);

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
              {picture != "" ? (
                <Image
                  src={picture}
                  width={380}
                  height={250}
                  alt="Absent Entry Image"
                  className="rounded-2xl"
                />
              ) : (
                <Webcam
                  audio={false}
                  screenshotFormat="image/jpeg"
                  width={380}
                  ref={webcamRef}
                  className="rounded-2xl"
                />
              )}
              <Button
                title={!disable ? "Done" : "Take a Picture"}
                handleForm={capture}
                disable={!disable}
              />
              <Button title={"Absent"} disable={disable} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Absent;
