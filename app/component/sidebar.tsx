import React from 'react';

import { Envelope, Linkedin } from "../../icons";

const Sidebar = ({ data }) => {
  const { name, role, education, contactLinks } = data;

  return (
    <div>
      <div>
        {/*<Image />*/}
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
