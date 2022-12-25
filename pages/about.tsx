import { ProfileImgDark, ProfileImgLight } from "@/components/ProfileImg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { classNames } from "utils/classnames";

const About = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
    <div className={classNames('fade-in divide-y-2 divide-neutral-200', 'dark:divide-neutral-800')}>
        <div className={classNames('space-y-2 pt-6 pb-8', 'md:space-y-5')}>
          <h1 className={classNames('text-3xl font-medium leading-9 tracking-tight text-neutral-900', 'sm:text-4xl sm:leading-10 md:text-6xl md:leading-14', 'dark:text-neutral-100')}>
            About
          </h1>
        </div>
        <div className={classNames('items-start py-8 space-y-6', 'xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0')}>
          <div className="flex flex-col items-center gap-4">
            <div className="w-52 h-52">
              {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
                <ProfileImgDark />
              ) : (
                <ProfileImgLight />
              )}
            </div>
            <div className="flex flex-col gap-1 items-center">
              <h1 className={classNames('text-3xl font-medium text-neutral-900', 'md:text-4xl', 'dark:text-white')}>
                Juanda Esa Putra
              </h1>
              <h2 className={classNames('text-xl text-neutral-700', 'md:text-2xl', 'dark:text-neutral-400')}>
                UI/UX Designer
              </h2>
            </div>
          </div>
          <div className={classNames('flex flex-col gap-3 text-neutral-600 tracking-wide', 'dark:text-neutral-300')}>
            <p>
              Over 2-years experience who focused
              on turning a complex problem into simple, interactive, usable,
              accessible, and intuitive design.
            </p>
            <p>
              Aiming to learn and explore new possibilities in digital product.
              I work closely with the team and stackholder as well users to
              ensure that all the requirements are fulfilled.
            </p>
            <p>
              I also learn Front-end tech stack such as React, TailwindCSS, and
              some CSS framework.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
