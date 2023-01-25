import { Form, Header, Main } from "@/components";
import Image from "next/image";
import React from "react";

function Auth() {
  return (
    <>
      <Header title={"Log In"} />
      <Main auth={true}>
        <Form />
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
