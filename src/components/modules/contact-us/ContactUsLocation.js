import { motion } from 'framer-motion';
export default function ContactUsLocation() {
  return (
    <section className='flex overflow-hidden justify-center items-center h-56  w-11/12  md:max-w-5xl border-2 border-main_logo_color my-10 mx-auto'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <iframe
          className='rounded-lg h-screen w-screen '
          src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3237.3240022725818!2d51.3952778!3d35.7674167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDQ2JzAyLjciTiA1McKwMjMnNDMuMCJF!5e0!3m2!1sen!2s!4v1692037269019!5m2!1sen!2s'
          // style='border:0;'
          allowFullScreen=''
          width={900}
          height={200}
          // loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        >
          Loading...
        </iframe>
      </motion.div>
    </section>
  );
}
