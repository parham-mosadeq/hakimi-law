import {
  HiOutlineDeviceMobile,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from 'react-icons/hi';
import ContactUsForm from './ContactUsForm';
import { motion } from 'framer-motion';
import { address } from '../../../../data/contactDetails';
import ContactUsPhones from './ContactUsPhones';
function ContactUsInfo() {
  const svgClasses = 'text-3xl text-main_logo_color';

  return (
    <article className='overflow-x-hidden'>
      {/* break */}
      <div className='h-32 bg-gradient-to-l from-main_contact_gri to-sec_contact_gri'>
        <h3 className='text-main_logo_color text-center pt-10 text-3xl'>
          نحوه برقراری ارتباط با موسسه
        </h3>
      </div>
      {/* break */}
      <div className='px-2 h-screen mx-auto max-w-6xl'>
        <div className='text-center my-24 text-xl font-extrabold tracking-wider'>
          {/* <p> برقرای ارتباط با کارشناسان ما</p> */}
        </div>

        <article className='flex justify-between items-center flex-row-reverse'>
          {/* phones */}
          <motion.div
            initial={{ translateX: '-100%' }}
            whileInView={{ translateX: '0%' }}
            transition={{ duration: 1.1 }}
            className='flex items-center justify-center '
          >
            <HiOutlineDeviceMobile className={svgClasses} />
            <span className='text-lg  text-main_txt_color'>
              <ContactUsPhones txtColor='text-main_txt_color' />
            </span>
          </motion.div>
          {/* phones */}
          {/* mail and address */}
          <motion.div
            initial={{ translateX: '100%' }}
            whileInView={{ translateX: '0%' }}
            transition={{ duration: 1.1 }}
            className='flex items-center justify-center '
          >
            <span>
              <p className='flex items-center'>
                <HiOutlineMail className={svgClasses} />
                <a
                  className='text-main_txt_color text-lg capitalize'
                  href='mailto:info@hakiminejad.com'
                >
                  info@hakiminejad.com{' '}
                </a>
              </p>
              <p className='flex items-center'>
                <HiOutlineLocationMarker className={svgClasses} />
                <a className='text-main_txt_color text-lg'>{address}</a>
              </p>
            </span>
          </motion.div>
          {/* mail and address */}

          {/* form */}
        </article>
        <>
          <ContactUsForm />
        </>
      </div>
    </article>
  );
}

export default ContactUsInfo;
