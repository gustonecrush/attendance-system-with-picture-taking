import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { hasAbsentEntry } from "redux/features/absentEntrySlice";
import { hasAbsentOut } from "redux/features/absentOutSlice";
import { changeActive, selectMenu } from "redux/features/activeSlice";
import Swal from "sweetalert2";
import Button from "./microcomponents/Button";
import { Heading } from "./microcomponents";

function Absent({ type }) {
  const [date, setDate] = useState(new Date());
  const [picture, setPicture] = useState("");
  const [disable, setDisable] = useState(true);

  const absentEntryTime = 7;
  const absentOutTime = 16;

  const dispatch = useDispatch();

  const BASE_URL = process.env.NEXT_BASE_URL_BACKEND;
  const router = useRouter();
  const tick = () => {
    setDate(new Date());
  };

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPicture(imageSrc);
    setDisable(false);
  }, [webcamRef]);

  const pictureConvert = async () => {
    fetch(picture)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File(
          [blob],
          "entry-" + Math.random().toString(16).slice(2),
          {
            type: "image/png",
          }
        );
        setPictureConverted(file);
      });
  };

  const handleAbsentEntry = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    fetch(picture)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File(
          [blob],
          "entry-" + Math.random().toString(16).slice(2),
          {
            type: "image/png",
          }
        );
        setPictureConverted(file);
        formData.append("absent_picture", file);

        axios.post(`${BASE_URL}/absent-entry`, formData).then((response) => {
          Swal.fire("Good job!", "Successfully Absent Entry!", "success");
          setPicture("");
          setDisable(true);
          dispatch(changeActive("Home"));
          dispatch(hasAbsentEntry(true));
        });
      });
  };

  const handleAbsentOut = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const formData = new FormData();

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    fetch(picture)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File(
          [blob],
          "out-" + Math.random().toString(16).slice(2),
          {
            type: "image/png",
          }
        );
        setPictureConverted(file);
        formData.append("absent_picture", file);

        axios.post(`${BASE_URL}/absent-out`, formData).then((response) => {
          Swal.fire("Good job!", "Successfully Absent Out!", "success");
          setPicture("");
          setDisable(true);
          dispatch(changeActive("Home"));
          dispatch(hasAbsentOut(true));
        });
      });
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
        <div className="w-full mt-[10vh] p-8 bg-white max-h-full min-h-fit overflow-scroll rounded-2xl shadow-aestheticShadow">
          <h1 className="text-secondary font-light text-[16px]">
            {`${date.toLocaleTimeString()}`}
          </h1>
          <Heading title={type} />
          <div className="flex items-center w-fill justify-center pb-5">
            <div className="flex flex-col mt-3 items-center justify-center bg-white p-5 shadow-aestheticShadow w-fit rounded-2xl space-y-4">
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
                  mirrored="true"
                />
              )}

              <Button
                title={!disable ? "Done" : "Take a Picture"}
                handleForm={capture}
                disable={!disable}
              />
              {type == "Absent Entry" ? (
                <Button
                  title={"Absent"}
                  disable={disable}
                  handleForm={handleAbsentEntry}
                />
              ) : (
                <Button
                  title={"Absent"}
                  disable={disable}
                  handleForm={handleAbsentOut}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Absent;
