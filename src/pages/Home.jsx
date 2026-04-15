import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Stats from '../components/Stats/Stats';
import Platforms from '../components/Platforms/Platforms';
import News from '../components/News/News';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Projects />
      <Platforms />
      <News />
    </>
  );
};

export default Home;
