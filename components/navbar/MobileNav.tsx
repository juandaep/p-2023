import {
  ArrowTopRightOnSquareIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import { classNames } from "utils/classnames";
import navLinks from "./navLinks";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <div className={classNames("flex justify-center", "md:hidden")}>
      <button
        type="button"
        className={classNames(
          "h-9 w-9 rounded-lg transition-colors",
          "focus:ring-4 focus:ring-neutral-300 focus:dark:ring-neutral-600"
        )}
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-neutral-600 dark:text-neutral-100"
        >
          {navShow ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </svg>
      </button>
      <div
        className={`fixed top-24 right-0 z-10 h-full w-full transform bg-white duration-300 ease-in-out dark:bg-[#121212] ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className={classNames(
            "fixed h-full w-full cursor-auto",
            "focus:outline-none"
          )}
          onClick={onToggleNav}
        ></button>
        <nav className="fixed mt-8 w-full h-full">
          {navLinks.map((link) => (
            <div
              key={link.title}
              className={classNames(
                "px-12 py-4 text-2xl tracking-widest text-neutral-800",
                "dark:text-neutral-100"
              )}
            >
              <Link href={link.href} onClick={onToggleNav}>
                {link.title}
              </Link>
            </div>
          ))}
          <Link
            href="https://www.figma.com/community/file/1172091403014887161"
            className={classNames(
              "px-12 py-4 text-2xl tracking-widest text-neutral-800 flex gap-2 items-center",
              "dark:text-neutral-100"
            )}
            target="_blank"
          >
            Design Systems
            <span>
              <ArrowTopRightOnSquareIcon className="h-6 w-6" />
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
