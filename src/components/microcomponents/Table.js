import axios from "axios";
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

  useEffect(() => {
    fetchAbsentEntris();
  }, []);


  return (
    <table className="mt-5 w-[1000px]">
      <thead>
        <tr className="text-left">
          {tableHeads.map((item, i) => (
            <th
              className={`font-[500] border-r-tableBorder ${
                i != 6 ? "border-r" : ""
              }  w-[500px] p-3`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="border border-tableBorder">
          <td className="border border-tableBorder w-[224px] p-3">td</td>
          <td className="border border-tableBorder w-[224px] p-3">td</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
