import {
  HiOutlineDeviceMobile,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from 'react-icons/hi';
import ContactUsForm from './ContactUsForm';
import { motion } from 'framer-motion';
function ContactUsInfo() {
  const svgClasses = 'text-3xl text-main_logo_color';

  return (
    <article className='overflow-x-hidden'>
      {/* break */}
      <div className='h-32 bg-gradient-to-l from-main_contact_gri to-sec_contact_gri'>
        <h3 className='text-main_logo_color text-center pt-10 text-2xl'>
          نحوه برقراری با موسسه
        </h3>
      </div>
      {/* break */}
      <div className='px-2 h-screen mx-auto max-w-6xl'>
        <div className='text-center my-24 text-lg font-extrabold tracking-wider'>
          <p> برقرای ارتباط با کارشناسان ما</p>
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
            <span>
              <p>0923123123</p>
              <p>0923123123</p>
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
                <a className='text-main_txt_color' href='mailto:/'>
                  hakimilaw@gmail.com
                </a>
              </p>
              <p className='flex items-center'>
                <HiOutlineLocationMarker className={svgClasses} />
                <a className='text-main_txt_color'>تهران میدان شیخ بهایی</a>
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