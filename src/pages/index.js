import {
  Dashboard,
  Header,
  LeftSidebar,
  Main,
  RightSidebar,
} from "@/components";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useState([]);

  const BASE_URL = process.env.NEXT_BASE_URL_BACKEND;

  const fetchDataUser = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios
      .get(`${BASE_URL}/user`)
      .then((response) => {
        console.log(response);
        setUser(response)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/auth");
    } else {
      fetchDataUser();
    }
  }, []);

  return (
    <>
      <Header title={"Dashboard"} />
      <Main>
        <LeftSidebar />
        <Dashboard />
        <RightSidebar />
      </Main>
    </>
  );
}
