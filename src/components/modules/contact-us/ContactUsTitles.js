import { motion } from 'framer-motion';
function ContactUsTitles() {
  return (
    <motion.div
      initial={{ opacity: 0.4, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
      }}
      className='text-center my-10 h-fit flex flex-col justify-center items-center'
    >
      <h3 className='text-3xl '>تماس با ما</h3>
      <h5 className='text-xl'>
        راه های ارتباطی با موسسه حقوقی حکیمی‌نژاد به صورت زیر میباشد.
      </h5>
    </motion.div>
  );
}

export default ContactUsTitles;
