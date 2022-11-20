import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
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
    <div className="md:hidden flex justify-center">
      <button
        type="button"
        className="h-9 w-9 rounded-lg focus:ring-4 focus:ring-gray-300 focus:dark:ring-gray-600 transition-colors"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-600 dark:text-gray-100"
        >
          {navShow ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </svg>
      </button>
      <div
        className={`fixed top-24 right-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-900 ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-full w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed mt-8 h-full">
          {navLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link
                href={link.href}
                className="text-2xl font-bold tracking-widest text-gray-600 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
