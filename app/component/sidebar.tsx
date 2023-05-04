import React from 'react';

import Image from "next/image";
import { Envelope, Linkedin } from "../../icons";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;

  return (
    <div className="bg-black flex flex-col h-auto sm:h-screen content-between sm:justify-around sm:w-1/3 sm:fixed">
      <div className='text-white flex flex-col items-center p-10'>
        <Image
          className="rounded-full h-full"
          priority
          width={300}
          height={300}
          src="/images/myphotoA.jpg"
          alt="photo"
        />
        <h1 className='mb-2'>{name}</h1>
        <h2 className='mb-8'>{role}</h2>
        <p className='mb-2'>{education[0]}</p>
        <p className='mb-2'>{education[1]}</p>
          <div className='text-white text-center mb-4 mt-4 sm:mt-8'>
            <h3 className='mb-2'>CONTACT ME</h3>
            <div className='flex flex-row justify-center gap-2'>
              <a className='icon-link' href={contactLinks?.[0]} aria-label="email link"><Envelope /></a>
              <a className='icon-link' href={contactLinks?.[1]} aria-label="linkedin link"><Linkedin /></a>
            </div>

          </div>
      </div>
    </div>
  );
}

export default Sidebar;
