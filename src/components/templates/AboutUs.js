import AboutUsCards from '../modules/about-us/AboutUsCards';
import AboutUsProfile from '../modules/about-us/AboutUsProfile';

function AboutUsPage() {
  return (
    <article className='overflow-x-hidden'>
      <AboutUsProfile />
      <AboutUsCards />
    </article>
  );
}

export default AboutUsPage;
