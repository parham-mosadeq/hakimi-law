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
        <div className='flex justify-center items-center'>
          {/* socials */}
          <>
            <Link
              target='_blank'
              className='mx-2'
              href='https://instagram.com/hakiminejadlaw?igshid=MzRlODBiNWFlZA=='
            >
              <Image
                className='h-auto w-auto text-main_logo_color'
                src='/icons/instagram_logo.png'
                width={30}
                height={20}
                alt='اینستاگرام موسسه حفوقی حکیمی نژاد'
              />
            </Link>
          </>
          <>
            <Link
              target='_blank'
              className='mx-2'
              href='https://wa.me/+989101885399'
            >
              <Image
                className='h-auto w-auto text-main_logo_color'
                src='/icons/wp.png'
                width={30}
                height={20}
                alt='واتساپ موسسه حفوقی حکیمی نژاد'
              />
            </Link>
          </>

          {/* socials */}
        </div>

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
