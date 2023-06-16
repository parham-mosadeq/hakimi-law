import Link from 'next/link';
import Image from 'next/image';

function Footer() {
  const txtClasses = 'text-main_logo_color text-sm';
  const commonClasses = '';

  return (
    <footer className=' bg-main_nav_color'>
      <div className='flex w-full px-2 justify-between items-center max-w-6xl mx-auto p-2 h-fit'>
        {/* contact info */}
        <div className='md:flex '>
          <p className={txtClasses}>0923123123</p>
          <p className={`${txtClasses} px-3`}>0923123123</p>
          <p className={txtClasses}>0923123123</p>
        </div>
        {/* contact info */}

        {/* socials */}
        <div className='flex text-sm'>
          <Link className='px-2' href={'/'}>
            <Image
              src='/icons/Facebook.svg'
              width={30}
              height={30}
              alt='facebook '
            />
          </Link>
          <Link className='px-2' href={'/'}>
            <Image
              src='/icons/Linkedin.svg'
              width={30}
              height={30}
              alt='facebook '
            />
          </Link>
          <Link className='px-2' href={'/'}>
            <Image
              src='/icons/Twitter.svg'
              width={30}
              height={30}
              alt='facebook '
            />
          </Link>
        </div>
        {/* socials */}

        {/* links */}
        <div className='flex flex-col md:flex-row  text-sm'>
          <Link href='/'>مقالات</Link>
          <Link className='px-3' href='/'>
            تماس با ما
          </Link>
          <Link href='/'>درباره ما</Link>
        </div>
        {/* links */}
      </div>
    </footer>
  );
}

export default Footer;
