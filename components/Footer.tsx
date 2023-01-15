import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { memo } from "react";
import { classNames } from "utils/classnames";

function Footer(): React.ReactElement {
  const year: number = new Date().getFullYear();

  return (
    <div
      className={classNames(
        "flex flex-col items-center justify-center star py-6 px-2 gap-2 border-t border-neutral-300 text-neutral-500",
        "dark:border-neutral-700"
      )}
    >
      <div className="flex flex-col items-center">
        <div className="inline-flex items-center gap-4 uppercase text-xs font-bold tracking-wider">
          Powered by{" "}
          <div className="space-x-2 inline-flex items-center">
            <span>
              <Link href="https://reactjs.org/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/juandaep/Icons@master/devicons/react.svg"
                  width="26"
                  title="React"
                />
              </Link>
              <span className="sr-only">React</span>
            </span>
            <span>
              <Link href="https://nextjs.org/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/juandaep/Icons@master/devicons/nextjs.svg"
                  width="40"
                  className="dark:invert"
                  title="NextJS"
                />
              </Link>
              <span className="sr-only">NextJS</span>
            </span>
            <span>
              <Link href="https://www.typescriptlang.org/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/juandaep/Icons@master/devicons/typescript.svg"
                  width="26"
                  title="Typescript"
                />
              </Link>
              <span className="sr-only">Typescript</span>
            </span>
            <span>
              <Link href="https://tailwindcss.com/" target="_blank">
                <img
                  src="https://cdn.jsdelivr.net/gh/juandaep/Icons@master/devicons/tailwindcss.svg"
                  width="26"
                  title="TailwindCSS"
                />
              </Link>
              <span className="sr-only">TailwindCSS</span>
            </span>
          </div>
        </div>
        <div className="text-xs flex items-center ">
          &copy; {year} Made with{" "}
          <HeartIcon className="w-5 h-5 mx-1 fill-red-600 animate-pulse" />
          <a
            href="mailto:juandaesaputra@gmail.com"
            className={classNames(
              "text-neutral-500 font-medium transition-all",
              "hover:text-neutral-700",
              "dark:hover:text-neutral-300"
            )}
          >
            Juanda Esa Putra.
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
