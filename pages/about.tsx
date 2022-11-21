import Image from "next/image";
import React from "react";
import profilePic from '../public/profile.png'

const About = () => {
  return (
    <>
    <div className="fade-in divide-y-2 divide-neutral-200 dark:divide-neutral-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-medium leading-9 tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <span>
          <span>
            <Image src={profilePic} alt="Profile Picture" />
          </span>
        </span>
      </div>
      </div>
    </>
  );
};

export default About;
