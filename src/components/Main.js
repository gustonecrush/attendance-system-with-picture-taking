import React from "react";

function Main({ auth = false, children }) {
  return (
    <main
      className={`bg-background w-full ${
        auth ? "min-h-screen" : "h-[100vh] flex flex-row"
      }  font-poppins`}
    >
      {/* Components Inside Main */}
      {children}
    </main>
  );
}

export default Main;
