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
          <nav className="flex h-12 justify-between">
            <link href="/">
              <a className="text-lg font-bold">Soko</a>
            </link>
            <div>
              <link href="/cart">Cart</link>
              <link href="/login">Login</link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer>Footer</footer>
      </div>
    </>
  );
}
