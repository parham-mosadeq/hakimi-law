import Image from 'next/image';
function AboutUsProfile() {
  return (
    <div className='w-screen h-36 md:h-44'>
      <Image
        className='w-full h-full object-cover'
        src='/icons/contact-us.png'
        width={100}
        height={100}
      />
    </div>
  );
}

export default AboutUsProfile;
