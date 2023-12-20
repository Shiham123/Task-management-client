import ClientSection from '../../Component/Client/ClientSection';
import FaqSection from '../../Component/Faq/FaqSection';
import HeroSection from '../../Component/Hero/HeroSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
