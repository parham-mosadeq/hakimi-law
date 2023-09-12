import Image from 'next/image';
function AboutUsCards() {
  return (
    <>
      <article className='px-3 text-justify my-10 lg:max-w-5xl lg:mx-auto'>
        {/* founder */}
        <div className='bg-main_logo_color relative rounded-lg my-10 w-full lg:max-w-5xl '>
          <div className='flex justify-between items-center w-full py-2 border-b-2 border-dashed border-main_nav_color'>
            <h3 className='self-end text-xl font-bold'>بنیان گذار</h3>
            <Image
              className='rounded-full absolute -top-7 -left-1  border-main_logo_color border-4'
              src='/icons/ParhamMosadeqzadeh Ilustrations.jpg'
              width={80}
              height={90}
              alt='hakminejaz law founder'
            />
          </div>
          <p className='max-w-full  w-full mx-auto p-3'>
            موسسه حقوقی داوری بین المللی حکیمی نژاد، فعالیّت رسمی خود را با بهره
            گیری از کادری مجرب از قضات بازنشسته دیوان عالی کشور و وکلای رسمی
            دادگستری با تجربه علمی و عملی بالا در سال 1392 شروع کرد. موسسه حقوقی
            را آقای دکتر امراله حکیمی نژاد که تحصیلات عالی در رشته حقوق و مدیریت
            تا مقطع دکتری و با 35 سال سابقه قضایی و مدیریتی در استان هرمزگان و
            دیوان عالی کشور در تهران دارا بودند، با همت و همکاری بسیاری از
            دوستان و همکاران، تاسیس کرده و تاکنون به فعالیّت های گسترده حقوقی
            پرداخته که می توان از زمره افتخارات موسسه را در حوزه های تخصصی در
            زمینه تنظیم وتهیه قراردادها، امور بیمه و گمرگی، امور دعاویی در مراجع
            دادگستری، داوری امور ثبتی و شرکتی نام برد.
          </p>
          <div className='p-4 bg-main_txt_color'>
            <h4 className='text-xl text-main_logo_color'> توانمندی موسسه:</h4>
            <ul className='px-4 list-disc '>
              <li className='py-2 text-main_contact_gri'>
                {' '}
                قبول داوری و برقراری صلح و سازش
              </li>
              <li className='py-2 text-main_contact_gri'>
                {' '}
                قبول وکالت در کلیه امور حقوقی و مشاوره حقوقی
              </li>
              <li className='py-2 text-main_contact_gri'>
                {' '}
                تنظیم و تهیه قراردادهای حقوقی داخلی و بین المللی
              </li>
              <li className='py-2 text-main_contact_gri'>
                {' '}
                مشاوره تمام وقت در حوزه های تجاری بویژه امور شرکتی
              </li>
            </ul>
            <p className='text-main_logo_color text-center'>
              و دیگر خدمات ملزومه به امور فوق جهت ارائه خدمات حقوقی که قابلیت
              بحث و تبادل نظر را داشته باشد.
            </p>
          </div>
        </div>
        {/* founder */}

        {/* founder */}
        <div className='bg-main_logo_color relative rounded-lg my-10  lg:max-w-5xl'>
          <div className='flex justify-between items-center w-full py-2 border-b-2 border-dashed border-main_nav_color'>
            <h3 className='self-end text-xl font-bold'> موکلین موسسه:</h3>
            <Image
              className='rounded-full w-auto h-auto absolute -top-7 -left-1  border-main_logo_color border-4'
              src='/icons/ParhamMosadeqzadeh Ilustrations.jpg'
              width={80}
              height={90}
              alt='clients'
            />
          </div>
          <ul className='p-6 list-disc text-main_contact_gri text-justify font-bold lg:flex lg:justify-between lg:items-center gap-5'>
            <div>
              <li>شرکت ملی نفتکش ایران</li>
              <li> شرکت خدمات دریایی و بندری سی دلف</li>
              <li> شرکت صنایع آلومرول نوین</li>
              <li> شرکت آرمان پدید </li>
              <li> شرکت کشتیرانی پیوند دریا</li>
              <li> شرکت پارت کاسپین کارمانیا</li>
            </div>
            <div>
              <li> صنایع الکترونیک افشار </li>
              <li> شرکت پروشات آداک قشم</li>
              <li> شرکت کشتیرانی ناوگان اقیانوس اطلس</li>
              <li> شرکت خدمات ارزی و صرافی اقتصاد نوین</li>
              <li> شرکت بهسان توسعه آرمان</li>
              <li> شرک پارس پایه.</li>
            </div>
          </ul>

          <div className='p-4 bg-main_txt_color'>
            <h4 className='text-xl text-main_logo_color'> اصول موسسه:</h4>
            <ul className='px-4 list-disc '>
              <li className='py-2 text-main_contact_gri'>
                همکاری با وکلاء،کارشناسان رسمی دادگستری و اساتید دانشگاهی بصورت
                تخصصی
              </li>
              <li className='py-2 text-main_contact_gri'>
                {' '}
                مشاوره تمام وقت و ارائه برخی خدمات بصورت آنلاین
              </li>
              <li className='py-2 text-main_contact_gri'>
                {' '}
                ارسال گزارشات آنلاین عملکرد و صورت وضعیت بصورت روزانه
              </li>
              <li className='py-2 text-main_contact_gri'>
                {' '}
                انجام کلیه امور شرکتی با حضور موثر همکار
              </li>
              <li className='py-2 text-main_contact_gri'>
                {' '}
                همکاری با وکلای مسلط به زبان انگلیسی و فرانسه{' '}
              </li>
            </ul>
            <p className='text-main_logo_color text-center'>
              و دیگر موارد حقوقی که قابل بحث و تبادل نظر باشد.
            </p>
          </div>
        </div>
        {/* founder */}
      </article>
    </>
  );
}

export default AboutUsCards;
