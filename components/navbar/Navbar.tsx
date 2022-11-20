import Link from "next/link";
import { Logo } from "../Logo";
import MobileNav from "./MobileNav";
import navLinks from "./navLinks";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-8">
      <Logo />
      <div className="flex items-center gap-3 md:gap-10 text-base font-medium leading-5">
        <div className="hidden md:flex md:space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover-animation text-lg py-1 text-gray-900 dark:text-gray-100"
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
