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
        <h3 className={cardTitleClasses}>
          دپارتمان تخصصی در امور دیوان عالی کشور{' '}
        </h3>
        <p className={cardTxtClasses}>
          دارای متخصصین حوضه های امور داخلی شامل دیوان عدالت اداری، دادگستری و
          دادگاه انقلاب اسلامی
        </p>
      </motion.div>
      <motion.div
        transition={{ duration: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={cardClasses}
      >
        <h3 className={cardTitleClasses}>
          دپارتمان تخصصی داوری و دعاوی بین‌المللی
        </h3>
        <p className={cardTxtClasses}>
          انجام و ارائه خدمات حقوقی و دعاوی بین‌المللی با کمک متخصصان به نام در
          تمامی زمینه ها. در کشورهای آمریکا، کانادا ،اروپا و آمریکای جنوبی
        </p>
      </motion.div>
      <motion.div
        transition={{ duration: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={cardClasses}
      >
        <h3 className={cardTitleClasses}>دپارتمان تخصصی در امور خانواده</h3>
        <p className={cardTxtClasses}>
          انجام تمام امور مربوط به خانوار شامل طلاق و ازدواج ، دعاوی وراثت
        </p>
      </motion.div>
      <motion.div
        transition={{ duration: 1.1 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={cardClasses}
      >
        <h3 className={cardTitleClasses}>
          دپارتمان تخصصی در امور گمرکی و ثبت اسناد
        </h3>
        <p className={cardTxtClasses}>
          انجام تمامی اموری گمرکی اعم از صادرات واردات ، ترخیص کالا. و انجام
          امور ثبت شرکت و ثبت برند و علام تجاری در خارج و داخل ایران
        </p>
      </motion.div>
    </section>
  );
}

export default HomePageCards;
