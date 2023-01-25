import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const tableHeads = [
  "No",
  "Entry Pict",
  "Entry Time",
  "Info",
  "Out Pict",
  "Out Time",
  "Info",
];

function Table() {
  const [absentEntries, setAbsentEntries] = useState([]);
  const [absentOuts, setAbsentOuts] = useState([]);
  const [date, setDate] = useState(new Date());
  const BASE_URL = process.env.NEXT_BASE_URL_BACKEND;

  const fetchAbsentEntris = async () => {
    const token = localStorage.getItem("token");

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .post(`${BASE_URL}/absent-entry/employee`)
      .then((response) => {
        setAbsentEntries(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchAbsentOuts = async () => {
    const token = localStorage.getItem("token");

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .post(`${BASE_URL}/absent-out/employee`)
      .then((response) => {
        setAbsentOuts(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const styleTD = (i) => {
    return `font-[500] border-r-tableBorder ${
      i != 6 ? "border-r border-b border-t" : ""
    } p-3`;
  };

  const filterBasedOnSameDate = (entry, out) =>
    entry?.created_at.slice(0, 8) == out?.created_at.slice(0, 8);

  const zipAbsentEntryAndOut = (entry, out) => {
    const absentPaired = [];
    entry.map((item, i) => {
      filterBasedOnSameDate(item, out[i])
        ? absentPaired.unshift([item, out[i]])
        : absentPaired.unshift([item]);
    });
    return absentPaired;
  };

  const absents = zipAbsentEntryAndOut(absentEntries, absentOuts);

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    fetchAbsentEntris();
    fetchAbsentOuts();

    // var timerID = setInterval(() => tick(), 1000);

    // return function cleanup() {
    //   clearInterval(timerID);
    // };
  }, []);

  return (
    <table className="mt-5 w-[80vw]">
      <thead>
        <tr className="text-left">
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
                  : "w-[500px]"
              }`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="text-left">
        {absents.map((absent, i) => (
          <tr key={i}>
            <td className={styleTD(i)}>{i + 1}</td>
            {absent.map((item, j) => (
              <>
                <td className={styleTD(i)}>
                  <Link href={item.absent_picture}>Link Picture</Link>
                </td>
                <td className={styleTD(i)}>{item.created_at}</td>
                <td className={styleTD(i)}>{item.status}</td>
              </>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;