import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { navLinks } from "../utils/constant";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Link href={href} className="p-2 md:p-4 text-center">
      <li
        className={`md:hover-animation ${
          router.asPath === href ? "border-b-2 md:border-none" : ""
        }`}
      >
        {title}
      </li>
    </Link>
  );
};

export const Navbar = (): JSX.Element => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isScreenScrolled, setIsScreenScrolled] = useState(false);
  const addShadowNav = () => {
    window.scrollY >= 100
      ? setIsScreenScrolled(true)
      : setIsScreenScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", addShadowNav);
    return () => {
      window.removeEventListener("scroll", addShadowNav);
    };
  }, []);

  return (
    <div
      className={`mx-auto bg-transparent w-full fixed z-30 p-2 px-4 md:px-24 transition-all backdrop-blur ${
        isScreenScrolled && "shadow-sm md:shadow-sm p-0"
      }`}
    >
      <nav className="block md:flex justify-between items-center">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo
              className={`${
                isScreenScrolled ? "w-8 md:w-9/12" : "w-full"
              } my-2 transition-all transform hover:scale-75`}
            />
          </Link>

          <div className="md:hidden flex">
            <button
              type="button"
              className="p-2 rounded-lg hover:ring-4 hover:ring-slate-300 text-slate-600 dark:text-white focus:outline-none"
              onClick={() => setShowMobileNav(!showMobileNav)}
            >
              {showMobileNav ? (
                <XMarkIcon className="w-6" />
              ) : (
                <Bars3Icon className="w-6" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile nav */}
        <div
          className={
            showMobileNav
              ? "flex flex-col md:flex-row items-center gap-2 my-3 md:mt-0"
              : "hidden md:flex items-center"
          }
        >
          <ul className="flex flex-col gap-2 md:flex md:flex-row">
            {navLinks.map((item) => {
              return (
                <NavItem title={item.title} href={item.href} key={item.href} />
              );
            })}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};
