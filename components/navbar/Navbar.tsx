import Link from 'next/link'
import { Logo } from '../Logo'
import MobileNav from './MobileNav'
import navLinks from './navLinks'
import { ThemeToggle } from './ThemeToggle'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-8'>
          <Logo />
      <div className='flex items-center text-base leading-5'>
        <div className='hidden md:block'>
          {navLinks.map(link => (
            <Link
            key={link.title}
            href={link.href}
            className='p-1 font-medium text-gray-900 dark:text-gray-100 md:p-4'>
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeToggle />
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar