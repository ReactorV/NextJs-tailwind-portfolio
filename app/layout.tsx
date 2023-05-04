import React from 'react';

import Sidebar from "./component/sidebar";
import { personalData } from '../data/page-data';

import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head><title>Vadzim Voitkus CV</title></head>
      <body className='flex flex-col sm:flex-row'>
        <Sidebar data={personalData} />
        <main className='grow-full p-16 w-full basis-2/3 bg-green ml-auto'>{children}</main>
      </body>
    </html>
  )
}
