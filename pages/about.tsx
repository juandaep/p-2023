import { ProfileImgDark, ProfileImgLight } from "@/components/ProfileImg";
import {
  GithubIcon,
  LinkedinIcon,
  SoundcloudIcon,
} from "@/components/SocialIcon";
import SocialIcons from "@/components/SocialIcons";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { classNames } from "utils/classnames";

const About = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div
        className={classNames(
          "pt-4 pb-6 border-b border-neutral-300",
          "md:pt-6 pb-6",
          "dark:border-neutral-700"
        )}
      >
        <h1
          className={classNames(
            "text-3xl font-medium leading-9 tracking-tight text-neutral-900",
            "md:text-6xl md:leading-14",
            "dark:text-white"
          )}
        >
          About
        </h1>
      </div>
      <div className={classNames("flex flex-col justify-between", "md:h-full")}>
        <div
          className={classNames(
            "items-start py-8 space-y-6",
            "md:grid md:grid-cols-2 md:gap-x-8 md:space-y-0"
          )}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-52 h-52">
              {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
                <ProfileImgDark />
              ) : (
                <ProfileImgLight />
              )}
            </div>
            <div className="flex flex-col gap-1 items-center">
              <h1
                className={classNames(
                  "text-3xl text-neutral-900",
                  "md:text-4xl",
                  "dark:text-white"
                )}
              >
                Juanda Esa Putra
              </h1>
              <h2
                className={classNames(
                  "text-xl text-neutral-400",
                  "md:text-2xl"
                )}
              >
                UI/UX Designer
              </h2>
            </div>
          </div>
          <div className={classNames("flex flex-col gap-8")}>
            <div
              className={classNames(
                "flex flex-col gap-4 text-neutral-600 tracking-wide text-justify",
                "dark:text-neutral-300"
              )}
            >
              <p>
                Over 2-years experience who focused on turning a complex problem
                into simple, interactive, usable, accessible, and intuitive
                design.
              </p>
              <p>
                Aiming to learn and explore new possibilities in digital
                product. I work closely with the team and stackholder as well
                users to ensure that all the requirements are fulfilled.
              </p>
              <p>
                I also learn Front-end tech stack such as React, TailwindCSS,
                and some CSS framework.
              </p>
            </div>
            <a
              type="button"
              className={classNames(
                "flex justify-center items-center gap-2 px-4 py-[10px] bg-emerald-600 text-white font-medium rounded-full shadow-md transition-all",
                "md:w-fit",
                "hover:bg-emerald-700 hover:shadow-none  focus:ring-4 focus:ring-emerald-200 focus:outline-none"
              )}
              href="../public/juanda-cv.pdf"
              target="_blank" 
              rel="noreferrer"
            >
              <span>
                <ArrowDownTrayIcon className="h-5 w-5" stroke="2" />
              </span>
              Download CV
            </a>
          </div>
        </div>
        <SocialIcons />
      </div>
    </>
  );
};

export default About;
