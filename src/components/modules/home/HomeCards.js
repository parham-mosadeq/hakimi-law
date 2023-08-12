import { motion } from 'framer-motion';

function HomePageCards() {
  const cardClasses = 'bg-main_logo_color rounded-lg px-3 py-2 my-9';
  const cardTitleClasses = 'text-xl font-serif font-bold';
  const cardTxtClasses = 'pr-4 my-4';
  return (
    <section className='px-4 md:grid md:gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto'>
      <motion.div
        transition={{ duration: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={cardClasses}
      >
        <h3 className={cardTitleClasses}>موسسه حقوقی حکیمی نژاد </h3>
        <p className={cardTxtClasses}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          exercitationem illo hic est sunt iure natus, error dolorum voluptate
          quasi modi quidem fuga id atque culpa doloribus ea maiores cum.
        </p>
      </motion.div>
      <motion.div
        transition={{ duration: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={cardClasses}
      >
        <h3 className={cardTitleClasses}>موسسه حقوقی حکیمی نژاد </h3>
        <p className={cardTxtClasses}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          exercitationem illo hic est sunt iure natus, error dolorum voluptate
          quasi modi quidem fuga id atque culpa doloribus ea maiores cum.
        </p>
      </motion.div>
      <motion.div
        transition={{ duration: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={cardClasses}
      >
        <h3 className={cardTitleClasses}>موسسه حقوقی حکیمی نژاد </h3>
        <p className={cardTxtClasses}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          exercitationem illo hic est sunt iure natus, error dolorum voluptate
          quasi modi quidem fuga id atque culpa doloribus ea maiores cum.
        </p>
      </motion.div>
      <motion.div
        transition={{ duration: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={cardClasses}
      >
        <h3 className={cardTitleClasses}>موسسه حقوقی حکیمی نژاد </h3>
        <p className={cardTxtClasses}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          exercitationem illo hic est sunt iure natus, error dolorum voluptate
          quasi modi quidem fuga id atque culpa doloribus ea maiores cum.
        </p>
      </motion.div>
    </section>
  );
}

export default HomePageCards;
