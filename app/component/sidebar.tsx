import React from 'react';

import Image from "next/image";
import { Envelope, Linkedin } from "../../icons";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;


  return (
    <div className="bg-black flex flex-col h-screen content-between sm:justify-around sm:w-1/3 sm:fixed">
      <div className='text-white flex flex-col p-10'>
        <Image
          className="rounded-full h-full mb-6"
          priority
          width={300}
          height={300}
          src="/images/guy.jpg"
          alt="photo"
        />
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p>{education[0]}</p>
        <p>{education[1]}</p>
          <div>
            <h3>Contact me</h3>
              <a href={contactLinks?.[0]} aria-label="email link"><Envelope /></a>
              <a href={contactLinks?.[1]} aria-label="linkedin link"><Linkedin /></a>
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
