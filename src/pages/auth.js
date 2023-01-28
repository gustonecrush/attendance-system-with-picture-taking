import React from "react";
import Image from "next/image";
import { Form, Header, Main } from "@/components";

function Auth() {
  return (
    <>
      {/* Header */}
      <Header title={"Log In"} />
      {/* Main */}
      <Main auth={true}>
        {/* Form Auth */}
        <Form />
        {/* Logo */}
        <Image
          src="/logo_absent.svg"
          width={50}
          height={50}
          alt="Logo Absent"
          className="absolute top-10 left-10"
        />
      </Main>
    </>
  );
}

export default Auth;
