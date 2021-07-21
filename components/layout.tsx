import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

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
      <Navbar />
      {children}
    </div>
  );
}
