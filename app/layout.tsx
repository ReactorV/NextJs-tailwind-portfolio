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
      <body>
        <Sidebar data={personalData} />
        {children}
      </body>
    </html>
  )
}
