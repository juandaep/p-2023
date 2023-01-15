import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";
import { classNames } from "utils/classnames";
import { Logo } from "../Logo";
import MobileNav from "./MobileNav";
import navLinks from "./navLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = (): JSX.Element => {
  const [isScreenScrolled, setIsScreenScrolled] = useState(false)
  const addShadowNav = () => {
    window.scrollY >= 100
    ? setIsScreenScrolled(true)
    : setIsScreenScrolled(false)
  }
  
  useEffect(() => {
    window.addEventListener("scroll", addShadowNav)
    return () => {
      window.removeEventListener("scroll", addShadowNav)
    }
  }, [])

  return (
    <div
      className={`fixed z-30 min-w-full px-4 sm:px-6 md:px-8 xl:px-0 right-0 left-0 ${isScreenScrolled && "shadow-lg bg-white/40 backdrop-blur dark:bg-[#121212]/40"}`}
    >
      <nav className="flex items-center justify-between py-8 mx-auto max-w-7xl">
        <Logo />
        <div
          className={classNames(
            "flex items-center gap-3 text-neutral-600 text-lg leading-5",
            "md:gap-8",
            "dark:text-white"
          )}
        >
          <div className={classNames("hidden", "md:flex md:space-x-12")}>
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover-animation py-1"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="https://www.figma.com/community/file/1172091403014887161"
              className="hover-animation py-1 flex gap-2 items-center"
              target="_blank"
            >
              Design Systems
              <span className="h-5 w-5">
                <ArrowTopRightOnSquareIcon />
              </span>
            </Link>
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
