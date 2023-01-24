import { Form, Header } from "@/components";
import Image from "next/image";
import React, { useState } from "react";

function Auth() {
  return (
    <>
      <Header title={"Log In"} />
      <main className="bg-background w-full min-h-screen font-poppins">
        <Form />
        <span className="flex flex-row space-x-4 items-center absolute top-10 left-10">
          <Image
            src="/logo_absent.svg"
            width={50}
            height={50}
            alt="Logo Absent"
          />
        </span>
      </main>
    </>
  );
}

export default Auth;
