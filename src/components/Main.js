import React from "react";

function Main({ children }) {
  const [left, dashboard, right] = children;

  return (
    <main className="bg-background w-full h-[100vh] flex flex-row font-poppins">
      {left}
      {dashboard}
      {right}
    </main>
  );
}

export default Main;
