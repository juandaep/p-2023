import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { memo } from "react";
import { classNames } from "utils/classnames";

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center py-6 px-2 gap-2 border-t border-neutral-300 text-neutral-500",
        "dark:border-neutral-700"
      )}
    >
      <div className="flex flex-col items-center">
        <div className="inline-flex items-center gap-4 uppercase text-xs font-bold tracking-wide">
          Powered by{" "}
          <div className="space-x-2 inline-flex items-center">
            <span>
              <Link href="https://reactjs.org/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
              </Link>
              <span className="sr-only">React</span>
            </span>
            <span>
              <Link href="https://nextjs.org/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                  width="40"
                  className="dark:invert"
                  title="NextJS"
                />
              </Link>
              <span className="sr-only">NextJS</span>
            </span>
            <span>
              <Link href="https://tailwindcss.com/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  width="26"
                  title="TailwindCSS"
                />
              </Link>
              <span className="sr-only">TailwindCSS</span>
            </span>
          </div>
        </div>
        <div className="text-xs flex items-center ">
          Made with{" "}
          <HeartIcon className="w-5 h-5 mx-1 fill-red-600 animate-pulse" />
          <a
            href="mailto:juandaesaputra@gmail.com"
            className="text-neutral-500 font-medium"
          >
            Juanda Esa Putra
          </a>
          . All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
