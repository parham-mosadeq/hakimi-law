import Image from 'next/image';
import { motion } from 'framer-motion';

function HomeDetailsPage() {
  const cardClasses =
    'rounded-lg px-4 py-2 my-9 shadow-md mx-5 hover:shadow-xl  ';
  const cardTitleClasses = 'text-xl font-serif font-bold';
  const cardTxtClasses = 'pr-3 my-4 w-3/4 mx-auto ';
  return (
    <article className='overflow-x-hidden'>
      {/* box */}
      <div className='h-32 bg-main_logo_color md:h-24'></div>
      {/* box */}
      <article className='md:grid md:grid-cols-2 max-w-5xl mx-auto'>
        {/* fastest */}
        <motion.div
          initial={{ translateX: '100%' }}
          whileInView={{ translateX: '0%' }}
          transition={{ duration: 1.123 }}
          className={cardClasses}
        >
          <div className='flex items-center justify-start'>
            <Image
              className='text-main_logo_color'
              src='/icons/magnifying-glass.svg'
              width={30}
              height={30}
            />
            <h3 className={cardTitleClasses}>دقیق </h3>
          </div>
          <p className={cardTxtClasses}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            exercitationem illo hic est sunt iure natus, error dolorum voluptate
            quasi modi quidem fuga id atque culpa doloribus ea maiores cum.
          </p>
        </motion.div>
        {/* fastest */}
        {/* calender */}
        <motion.div
          initial={{ translateX: '-100%' }}
          whileInView={{ translateX: '0%' }}
          transition={{ duration: 1.123 }}
          className={cardClasses}
        >
          <div className='flex items-center justify-start'>
            <Image
              className='text-main_logo_color'
              src='/icons/calender.svg'
              width={30}
              height={30}
            />
            <h3 className={cardTitleClasses}>در سریع ترین زمان </h3>
          </div>
          <p className={cardTxtClasses}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            exercitationem illo hic est sunt iure natus, error dolorum voluptate
            quasi modi quidem fuga id atque culpa doloribus ea maiores cum.
          </p>
        </motion.div>
        {/* calender */}
        {/* calender */}
        <motion.div
          initial={{ translateX: '100%' }}
          whileInView={{ translateX: '0%' }}
          transition={{ duration: 1.456 }}
          className={cardClasses}
        >
          <div className='flex items-center justify-start'>
            <Image
              className='text-main_logo_color'
              src='/icons/trust-wallet.svg'
              width={30}
              height={30}
            />
            <h3 className={cardTitleClasses}>در سریع ترین زمان </h3>
          </div>
          <p className={cardTxtClasses}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            exercitationem illo hic est sunt iure natus, error dolorum voluptate
            quasi modi quidem fuga id atque culpa doloribus ea maiores cum.
          </p>
        </motion.div>
        {/* calender */}
        {/* calender */}
        <motion.div
          initial={{ translateX: '-100%' }}
          whileInView={{ translateX: '0%' }}
          transition={{ duration: 1.456 }}
          className={cardClasses}
        >
          <div className='flex items-center justify-start'>
            <Image
              className='text-main_logo_color'
              src='/icons/trust-wallet.svg'
              width={30}
              height={30}
            />
            <h3 className={cardTitleClasses}>در سریع ترین زمان </h3>
          </div>
          <p className={cardTxtClasses}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            exercitationem illo hic est sunt iure natus, error dolorum voluptate
            quasi modi quidem fuga id atque culpa doloribus ea maiores cum.
          </p>
        </motion.div>
        {/* calender */}
      </article>
    </article>
  );
}

export default HomeDetailsPage;
