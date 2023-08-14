import Image from 'next/image';
import { motion } from 'framer-motion';
import { data } from '../../../../data/db.json';

function HomeDetailsPage() {
  const cardClasses =
    'rounded-lg px-4 py-2 my-9 shadow-md mx-5 hover:shadow-xl  ';
  const cardTitleClasses = 'text-xl font-serif font-bold';
  const cardTxtClasses =
    'pr-3 my-4 w-3/4 mx-auto tracking-wider text-justify text-lg';
  const { faq } = data;
  return (
    <article className='overflow-x-hidden'>
      {/* box */}
      <div className='h-32 bg-main_logo_color md:h-24'></div>
      {/* box */}
      <article className='md:grid md:grid-cols-2 max-w-5xl mx-auto'>
        {/* fastest */}

        {faq.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ translateX: item.id % 2 === 0 ? '-100%' : '100%' }}
              whileInView={{ translateX: '0%' }}
              transition={{ duration: 1.123 }}
              className={cardClasses}
            >
              <div className='flex items-center justify-start '>
                <Image
                  className='text-main_logo_color w-10'
                  src={`/home/${item.id}.svg`}
                  width={30}
                  height={30}
                />
                <h3 className={cardTitleClasses}>{item.question} </h3>
              </div>
              <p className={cardTxtClasses}>{item.answer}</p>
            </motion.div>
          );
        })}
      </article>
    </article>
  );
}

export default HomeDetailsPage;
