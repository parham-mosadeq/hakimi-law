import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HiX, HiMenu } from 'react-icons/hi';
import { useRouter } from 'next/router';
function Navbar() {
  const router = useRouter();
  const navItems = ['خانه', 'تماس با ما', 'درباره ما', 'مقالات'];
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    handleToggle();
  }, [router.pathname]);

  return (
    <nav className=' bg-main_nav_color'>
      <div className='flex flex-row-reverse w-full justify-between items-center max-w-6xl mx-auto p-2'>
        <header>
          <div>
            <Image src='/icons/logo.svg' width={100} height={100} />
          </div>
        </header>
        <span
          onClick={handleToggle}
          className=' md:hidden z-50 text-xl text-main_logo_color cursor-pointer'
        >
          {isOpen ? <HiMenu /> : <HiX />}
        </span>
        <ul
          className={`absolute top-0 right-0 h-screen bg-main_nav_color w-1/2 ${
            isOpen ? 'hidden' : 'absolute'
          } 
        md:flex md:h-10 md:bg-none md:m-0 md:w-fit md:relative md:items-center justify-center
        `}
        >
          {navItems.map((item) => {
            const joinedItem = item.split(' ').join('-');

            return (
              <li className='m-10 md:m-0' key={item}>
                <Link
                  className='hover:text-dark_logo_color transition duration-200 md:mx-3 lg:px-5'
                  href={`/${item === 'خانه' ? '' : joinedItem}`}
                >
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
