import Link from 'next/link';
import ContactUsPhones from '../modules/contact-us/ContactUsPhones';
import Image from 'next/image';

function Footer() {
  return (
    <footer className=' bg-main_nav_color'>
      <div className='flex w-full px-2 justify-between items-center max-w-6xl mx-auto p-2 h-fit'>
        {/* contact info */}
        <div className='md:flex md:gap-5 '>
          <ContactUsPhones txtColor='text-main_logo_color' />
        </div>
        {/* contact info */}

        {/* socials */}
        <div>
          <Link href='https://instagram.com/hakiminejadlaw?igshid=MzRlODBiNWFlZA=='>
            <Image src='/icons/insta.png' width={30} height={20} />
          </Link>
        </div>

        {/* <div className='flex text-sm'>
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
        </div> */}
        {/* socials */}

        {/* links */}
        <div className='flex flex-col md:flex-row  text-sm'>
          <Link href='/blogs'>مقالات</Link>
          <Link className='md:px-3' href='/contact-us'>
            تماس با ما
          </Link>
          <Link href='/about-us'>درباره ما</Link>
        </div>
        {/* links */}
      </div>
    </footer>
  );
}

export default Footer;
