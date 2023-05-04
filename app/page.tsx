import React from 'react';

import { AboutMe } from './about-me';
import { aboutMe } from "../data/page-data";

export default function Page() {
  return (
      <div className="bg-green-light">
        <AboutMe data={aboutMe} />
      </div>
  )
}
