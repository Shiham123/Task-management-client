import ClientSection from '../../Component/Client/ClientSection';
import FaqSection from '../../Component/Faq/FaqSection';
import HeroSection from '../../Component/Hero/HeroSection';
import ServicesSection from '../../Component/Services/ServicesSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ClientSection />
      <ServicesSection />
      <FaqSection />
    </div>
  );
};

export default HomePage;
