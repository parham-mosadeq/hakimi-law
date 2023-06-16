import Image from 'next/image';

function HomeProfile() {
  return (
    <div className='w-full mx-auto h-60'>
      <Image
        className='w-full h-full object-cover mx-auto md:w-1/2'
        src='/icons/landing-page-logo.png'
        width={300}
        height={300}
        alt='hakiminejaz logo'
      />
    </div>
  );
}

export default HomeProfile;
