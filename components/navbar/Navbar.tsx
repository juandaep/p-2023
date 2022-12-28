import Link from "next/link";
import { classNames } from "utils/classnames";
import { Logo } from "../Logo";
import MobileNav from "./MobileNav";
import navLinks from "./navLinks";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      <Logo />
      <div
        className={classNames(
          "flex items-center gap-3 text-neutral-600 text-lg leading-5",
          "md:gap-8", "dark:text-white"
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
        </div>
        <ThemeToggle />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
