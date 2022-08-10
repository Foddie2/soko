import Head from 'next/head';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Soko' : 'Soko'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 px-4 justify-between shadow-md items-center">
            <link href="/" />
            <a className="text-lg font-bold">Soko </a>
            <div>
              <link href="/cart" />
              <a className="p-2">Cart</a>
              <link href="/login" />
              <a className="p-2">Login</a>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex h-10 items-center justify-center shadow-inner ">
          <p>Copyright © 2022 Soko</p>
        </footer>
      </div>
    </>
  );
}
