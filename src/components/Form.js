import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";
import Input from "./Input";

function Form() {
  const [form, setForm] = useState("login");
  const BASE_URL = process.env.NEXT_BASE_URL_BACKEND;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // router
  const router = useRouter();

  // validation
  const [validation, setValidation] = useState([]);

  // login handler
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post(`${BASE_URL}/login`, formData)
      .then((response) => {
        console.log(response);
        router.push("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        setValidation(error.response.data);
      });
  };

  // register handler
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("register");
  };

  console.log(validation);

  return (
    <>
      <Header title={form} />
      <div className="w-full ">
        <div className="max-w-md mx-auto py-[5rem]">
          <span className="text-center">
            <h1 className="text-secondary font-[600] text-[2rem]">
              Enhance Your Work Time
            </h1>
            <p className="text-textSecondary text-[1rem] font-[300] leading-[28px]">
              Be an obedient and obedient employee at work, be absent on time
              and make your company grow
            </p>
          </span>

          <form
            method="post"
            className="bg-white shadow-sm px-6 py-6 mt-[50px] rounded-3xl flex flex-col space-y-4"
            autoComplete="off"
          >
            {form === "login" ? (
              <>
                <Input
                  title={"Email Address"}
                  type={"email"}
                  name={"email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  title={"Password"}
                  type={"password"}
                  name={"password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button title={"Log In"} handleForm={handleLogin} />
              </>
            ) : (
              <>
                <Input title={"Full Name"} type={"text"} name={"name"} />
                <Input title={"Email Address"} type={"email"} name={"email"} />
                <Input title={"Password"} type={"password"} name={"password"} />
                <Input
                  title={"Password Confirmation"}
                  type={"password"}
                  name={"password_confirmation"}
                />
                <Button title={"Register"} handleForm={handleRegister} />
              </>
            )}

            <span className="text-textSecondary text-center mt-10">
              {form === "login" ? (
                <>
                  Don't have an account?{" "}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={(e) => setForm("register")}
                  >
                    Register
                  </span>
                </>
              ) : (
                <>
                  Have an account?{" "}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={(e) => setForm("login")}
                  >
                    Log In
                  </span>
                </>
              )}
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
