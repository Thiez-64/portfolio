import React from "react";
import Head from "next/head";
import Navbar from "./navbar";
import FootBar from "./footbar";

interface IProps {
  children: React.ReactNode;
  page?: string;
}

export default function layout({ page, children }: IProps): JSX.Element {
  return (
    <div className="layout w-full">
      <Head>
        <title>{page}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <FootBar />
      </footer>
    </div>
  );
}
