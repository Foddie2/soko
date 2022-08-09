import Head from 'next/head';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Soko</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header> Header </header>

        <main>{children}</main>

        <footer>Footer</footer>
      </div>
    </>
  );
}
