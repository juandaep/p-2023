import { ProfileImgDark, ProfileImgLight } from "@/components/ProfileImg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const About = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="fade-in divide-y-2 divide-neutral-200 dark:divide-neutral-800">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-medium leading-9 tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start py-8 space-y-2 xl:grid xl:grid-cols-2 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center gap-4">
            <div className="w-52 h-52">
              {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
                <ProfileImgDark />
              ) : (
                <ProfileImgLight />
              )}
            </div>
            <div className="flex flex-col gap-1 items-center">
              <h1 className="text-3xl md:text-4xl font-medium text-neutral-900 dark:text-white">
                Juanda Esa Putra
              </h1>
              <h2 className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-400">
                UI/UX Designer
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsam corporis, earum non sequi minus ipsa sed reiciendis corrupti
              autem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              ipsam corporis, earum non sequi minus ipsa sed reiciendis corrupti
              autem.
            </p>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
