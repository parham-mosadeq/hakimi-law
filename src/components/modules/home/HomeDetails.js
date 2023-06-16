import Image from 'next/image';

function HomeDetailsPage() {
  const cardClasses = 'rounded-lg px-3 py-2 my-9';
  const cardTitleClasses = 'text-xl font-serif font-bold';
  const cardTxtClasses = 'pr-4 my-4 w-3/4 mx-auto';
  return (
    <div>
      {/* box */}
      <div className='h-32 bg-main_logo_color md:h-24'></div>
      {/* box */}

      {/* fastest */}
      <div className={cardClasses}>
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
      </div>
      {/* fastest */}
      {/* calender */}
      <div className={cardClasses}>
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
      </div>
      {/* calender */}
      {/* calender */}
      <div className={cardClasses}>
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
      </div>
      {/* calender */}
    </div>
  );
}

export default HomeDetailsPage;
