import {
  Dashboard,
  Header,
  LeftSidebar,
  Main,
  RightSidebar,
} from "@/components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  // base url of API
  const BASE_URL = process.env.NEXT_BASE_URL_BACKEND;
  // state the user logged in data
  const [user, setUser] = useState([]);
  // function to fetch user logged in data
  const fetchDataUser = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(`${BASE_URL}/user`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  // router to direct to another page
  const router = useRouter();
  // hooks useEffect
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/auth");
    } else {
      fetchDataUser();
    }
  }, []);

  return (
    <>
      {/* Header  */}
      <Header title={"Dashboard"} />
      {/* Main */}
      <Main>
        {/* Left Sidebar */}
        <LeftSidebar />
        {/* Dashboard */}
        <Dashboard />
        {/* Right Sidebar */}
        <RightSidebar user={user} />
      </Main>
    </>
  );
}
