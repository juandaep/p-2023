import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'
import { navLinks } from "./utils/constant";
import { ThemeToggle } from "./ThemeToggle";

type Props = {
  href: string;
  title: string;
};

const NavItem = ({ href, title }: Props): JSX.Element => {
  const router = useRouter();
  return (
    <Link href={href}>
        <li
          className={`px-5 py-2 md:pt-4 md:px-4 md:text-center ${
            router.asPath === href ? "border-b-2 md:border-none" : ""
          }`}
        >
          <p className="transition duration-500 ease-in-out transform md:hover:translate-y-2 text-slate-600 dark:text-white font-medium md:hover:text-slate-700 md:dark:hover:text-slate-200">
            {title}
          </p>
        </li>
    </Link>
  );
};

export const Navbar = (): JSX.Element => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const [isScreenScrolled, setIsScreenScrolled] = useState(false)
    const addShadowNav = () => {
        window.scrollY >= 100 ? setIsScreenScrolled(true) : setIsScreenScrolled(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', addShadowNav)
        return() => {
            window.removeEventListener('scroll', addShadowNav)
        }
    }, [])

  return (
    <div className={`mx-auto bg-transparent w-full fixed z-30 ${isScreenScrolled && 'shadow-2xl md:shadow-xl backdrop-blur-xl'}`}>
        <nav className="block md:flex justify-between items-center p-2 px-8">
            <div className="flex justify-between items-center p-2">
               
                <Link href="/">
                    <span className={`${isScreenScrolled ? 'w-1/5 md:w-3/12' : 'w-16 md:w-2/5'} pl-30 my-2 transition-all transform hover:scale-75`}>JuandaEP</span>
                </Link>
                
            
            <div className="md:hidden flex">
                <button
                type="button"
                className="p-2 rounded-lg hover:ring-4 hover:ring-slate-300 text-slate-600 dark:text-white focus:outline-none"
                onClick={() => setShowMobileNav(!showMobileNav)}
                >
                    <Bars3Icon className="w-6" />
                </button>
            </div>
            </div>
            <div className={showMobileNav ? 'block pt-3 transition-all' : 'hidden md:flex'}>
                <ul className="md:flex md:flex-row">
                    {navLinks.map((item) => {
                        return <NavItem title={item.title} href={item.href} key={item.href} />
                    })}
                </ul>
                <ThemeToggle />
            </div>
        </nav>
    </div>
  )
};

