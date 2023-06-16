import HomePageCards from '../modules/home/HomeCards';
import HomeDetailsPage from '../modules/home/HomeDetails';
import HomeProfile from '../modules/home/HomeProfile';

function HomePage() {
  return (
    <main>
      <HomeProfile />
      <HomePageCards />
      <HomeDetailsPage />
    </main>
  );
}

export default HomePage;
