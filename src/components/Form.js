// import hooks
import React, { use, useEffect, useState } from "react";
// import router
import { useRouter } from "next/router";
import axios from "axios";
// import microcomponents
import { Input, Button } from "./microcomponents";
// import sweetalert
import Swal from "sweetalert2";
// import Header component
import Header from "./Header";

// component Form
function Form() {
  // base url of backend or server
  const BASE_URL = process.env.NEXT_BASE_URL_BACKEND;
  // router for directing to another page
  const router = useRouter();
  // state to set type of form (login/register)
  const [form, setForm] = useState("login");
  // state login input by user
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // state register input by user
  const [fullname, setFullname] = useState("");
  const [emailRegis, setEmailRegis] = useState("");
  const [passwordRegis, setPasswordRegis] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // state to show and hide password
  const [showPassword, setShowPassword] = useState(false);
  // state of validations
  const [validation, setValidation] = useState([]);
  // login handler function
  const handleLogin = async (e) => {
    // prevent to refresh the page
    e.preventDefault();
    // instansiate object FormData to store the data will send to server
    const formData = new FormData();
    // set the property of object FormData
    formData.append("email", email);
    formData.append("password", password);
    // send the request to server for logging
    await axios
      .post(`${BASE_URL}/login`, formData)
      .then((response) => {
        // set token to local storage
        localStorage.setItem("token", response.data.access_token);
        // set user is admin or not to local storage
        localStorage.setItem("is_admin", response.data.is_admin);
        // set sweetalert to pop up when log in is success
        Swal.fire("Success!", "Successfully Log In!", "success");
        // clean the form login by invoke this function
        cleanForm(form);
        // set validation error to empty error if before user fill the wrong input
        setValidation([]);
        // direct the user to dashboard
        router.push("/");
      })
      .catch((error) => {
        // if the error with property message is happened which is unauthorized, set sweetalert to pop up
        // to tell the user if the password or username is wrong
        if ("message" in error.response.data) {
          Swal.fire("Failed!", "Your username or password is wrong!", "error");
        }
        // set validation with the error
        setValidation(error.response.data);
      });
  };
  // register handler
  const handleRegister = async (e) => {
    // prevent to refresh the page
    e.preventDefault();
    // instansiate object FormData to store the data will send to server
    const formData = new FormData();
    // set the property of object FormData
    formData.append("name", fullname);
    formData.append("email", emailRegis);
    formData.append("password", passwordRegis);
    formData.append("password_confirmation", passwordConfirmation);
    // send the request to server for registering
    await axios
      .post(`${BASE_URL}/register`, formData)
      .then((response) => {
        // set sweetalert to pop up when log in is success
        Swal.fire("Success!", "Successfully Register, Log In Now!", "success");
        // clean the form regiser by invoke this function
        cleanForm(form);
        // set validation error to empty if before user fill the wrong input
        setValidation([]);
        // set the form state to be login, to command the user login after register
        setForm("login");
      })
      .catch((error) => {
        // set validation with the error
        setValidation(error.response.data);
      });
  };
  // login form cleaner function
  const cleanForm = (form) => {
    if (form === "login") {
      setEmail("");
      setPassword("");
    } else {
      setFullname("");
      setEmailRegis("");
      setPasswordRegis("");
      setPasswordConfirmation("");
    }
  };
  // hook useEffect
  useEffect(() => {
    // check if there is token or not
    if (localStorage.getItem("token")) {
      router.push("/");
    }
  }, [validation]);

  return (
    <>
      {/* Header of Form */}
      <Header title={form} />
      {/* Form Container */}
      <div className="w-full ">
        <div className="max-w-md mx-auto py-[5rem]">
          {/* Heading of Form */}
          <span className="text-center">
            <h1 className="text-secondary font-[600] text-[2rem]">
              Enhance Your Work Time
            </h1>
            <p className="text-textSecondary text-[1rem] font-[300] leading-[28px]">
              Be an obedient and obedient employee at work, be absent on time
              and make your company grow
            </p>
          </span>

          {/* Form */}
          <form
            method="post"
            className="bg-white shadow-sm px-6 py-6 mt-[50px] rounded-3xl flex flex-col space-y-4"
            autoComplete="off"
          >
            {form === "login" ? (
              <>
                {/* Input Email Address */}
                <Input
                  title={"Email Address"}
                  type={"email"}
                  name={"email"}
                  value={email}
                  validation={validation.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* Input Password */}
                <Input
                  title={"Password"}
                  type={showPassword ? "type" : "password"}
                  name={"password"}
                  value={password}
                  validation={validation.password}
                  // onClick={(e) => setShowPassword(true)}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Button Login */}
                <Button title={"Log In"} handleForm={handleLogin} />
              </>
            ) : (
              <>
                {/* Input Full Name */}
                <Input
                  title={"Full Name"}
                  type={"text"}
                  name={"name"}
                  value={fullname}
                  validation={validation.name}
                  onChange={(e) => setFullname(e.target.value)}
                />
                {/* Input Email Address */}
                <Input
                  title={"Email Address"}
                  type={"email"}
                  name={"email"}
                  value={emailRegis}
                  validation={validation.email}
                  onChange={(e) => setEmailRegis(e.target.value)}
                />
                {/* Input Password */}
                <Input
                  title={"Password"}
                  type={"password"}
                  name={"password"}
                  value={passwordRegis}
                  validation={validation.password}
                  onChange={(e) => setPasswordRegis(e.target.value)}
                />
                {/* Input Password Confirmation */}
                <Input
                  title={"Password Confirmation"}
                  type={"password"}
                  name={"password_confirmation"}
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                {/* Button Register */}
                <Button title={"Register"} handleForm={handleRegister} />
              </>
            )}

            {/* Link to Regis or Log In */}
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
