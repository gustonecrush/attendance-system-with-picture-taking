import React from "react";

/*
  Main Component
  -> used to store the sub components of main the website's content
*/
function Main({ auth = false, children }) {
  return (
    <main
      className={`bg-background w-full ${
        auth ? "min-h-screen" : "h-[100vh] flex flex-row"
      }  font-poppins`}
    >
      {children}
    </main>
  );
}

export default Main;
