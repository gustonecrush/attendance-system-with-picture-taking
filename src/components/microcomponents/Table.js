// import hooks and react
import React, { useEffect, useState } from "react";
// import axios
import axios from "axios";
// import Image component
import Image from "next/image";

// table heads item
const tableHeads = [
  "No",
  "Entry Pict",
  "Entry Time",
  "Info",
  "Out Pict",
  "Out Time",
  "Info",
];

// component Table
function Table() {
  // base url to backend or server
  const BASE_URL = process.env.NEXT_BASE_URL_BACKEND;
  // state data absent entries and absent outs of employee
  const [absentEntries, setAbsentEntries] = useState([]);
  const [absentOuts, setAbsentOuts] = useState([]);
  // fetch data absent entries
  const fetchAbsentEntris = async () => {
    // get token item, to set as bearer token to request
    const token = localStorage.getItem("token");
    // set header request with token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // send request to server
    await axios
      .post(`${BASE_URL}/absent-entry/employee`)
      .then((response) => {
        setAbsentEntries(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // fetch data absent outs
  const fetchAbsentOuts = async () => {
    // get token item, to set as bearer token to request
    const token = localStorage.getItem("token");
    // set header request with token
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // send request to server
    await axios
      .post(`${BASE_URL}/absent-out/employee`)
      .then((response) => {
        setAbsentOuts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // download file or picture function
  const downloadFile = async (e, id, type) => {
    const API = type == 0 ? "absent-entry" : "absent-out";
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .post(`${BASE_URL}/${API}/download/${id}}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // convert timestamp to human dateformat
  const convertTimestamp = (timestamp) => {
    const unixTimestamp = Date.parse(timestamp) / 1000;
    const miliseconds = unixTimestamp * 1000;
    const dateObject = new Date(miliseconds);
    const humanDateFormat = dateObject.toLocaleString();
    return humanDateFormat;
  };
  // styling table data
  const styleTD = (i) => {
    return `font-[400] border-r-tableBorder ${
      i != 6 ? "border-r border-b border-t" : ""
    } p-3 `;
  };

  // process extract data absents
  // filter to check the data absent entry and out is in same day or not
  const filterBasedOnSameDate = (entry, out) =>
    entry?.created_at.slice(0, 8) == out?.created_at.slice(0, 8);
  // pair the absent if they are in the same date / day
  const zipAbsentEntryAndOut = (entry, out) => {
    // prepare the absents paired array
    const absentPaired = [];
    // map the absent entry data
    entry.map((item, i) => {
      // check item absent entry to item absent out
      filterBasedOnSameDate(item, out[i])
        ? // if paired, add first on array the paired absent
          absentPaired.unshift([item, out[i]])
        : // else, add just entry absent
          absentPaired.unshift([item]);
    });
    // return the paired absent
    return absentPaired;
  };
  // get data the paired absent and store to this variable so reusable
  const absents = zipAbsentEntryAndOut(absentEntries, absentOuts);
  // hook useEffect
  useEffect(() => {
    fetchAbsentEntris();
    fetchAbsentOuts();
  }, []);

  return (
    <table className="mt-5 w-[95vw]">
      {/* Table Head */}
      <thead>
        <tr className="text-left">
          {/* Heads Colum */}
          {tableHeads.map((item, i) => (
            <th
              key={i}
              className={`font-[500] border-r-tableBorder ${
                i != 6 ? "border-r" : ""
              } p-3 ${
                i == 1 || i == 4
                  ? "w-[600px]"
                  : i == 0
                  ? "w-fit"
                  : i === 3
                  ? "w-[300px]"
                  : i === 6 || i == 2 || i == 5
                  ? "w-[2000px]"
                  : "w-[700px]"
              }`}
            >
              <span className="flex flex-row">
                {i == 2 || i == 5 ? (
                  <Image
                    src="/icons/ic_calender.svg"
                    width={15}
                    height={15}
                    alt="icon"
                    className="mr-2 w-auto h-auto"
                  />
                ) : i == 4 || i == 1 ? (
                  <Image
                    src="/icons/ic_link.svg"
                    width={15}
                    height={15}
                    alt="icon"
                    className="mr-2 w-auto h-auto"
                  />
                ) : i == 3 || i == 6 ? (
                  <Image
                    src="/icons/ic_info.svg"
                    width={15}
                    height={15}
                    alt="icon"
                    className="mr-2 w-auto h-auto"
                  />
                ) : (
                  ""
                )}
                {item}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      {/* Table Body */}
      <tbody className="text-left">
        {absents.map((absent, i) => (
          <tr key={i}>
            {/* No */}
            <td className={styleTD(i)}>{i + 1}</td>
            {absent.map((item, j) => (
              <>
                {/* Picture Absent Entry/Out */}
                <td className={styleTD(i)}>
                  <p
                    className="underline cursor-pointer"
                    onClick={(e) => downloadFile(e, item.id, j)}
                  >
                    Link Picture
                  </p>
                </td>
                {/* Date Absent Entry/Out */}
                <td className={styleTD(i)}>
                  {convertTimestamp(item.created_at)})
                </td>
                {/* Status Absent Entry/Out */}
                <td className={styleTD(i)}>
                  <span
                    className={`px-4 py-1 rounded-lg ${
                      item.status == "late" || item.status == "home before time"
                        ? "bg-[#FFCED3] "
                        : item.status == "ontime"
                        ? "bg-[#D4F8D3]"
                        : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
