import Head from "next/head";
import React from "react";

function Header({ title }) {
  return (
    <Head>
      {/* Title Page */}
      <title>{title.charAt(0).toUpperCase() + title.slice(1)}</title>
      {/* Meta Tags */}
      <meta name="description" content="Log In or Register to using the app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Icon Page */}
      <link rel="icon" href="/logo_absent.svg" />
    </Head>
  );
}

export default Header;
