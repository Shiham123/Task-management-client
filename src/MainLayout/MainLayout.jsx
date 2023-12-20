import { Outlet } from 'react-router-dom';
import NavbarSection from '../Component/Navbar/NavbarSection';
import FooterSection from '../Component/Footer/FooterSection';

const MainLayout = () => {
  return (
    <>
      <NavbarSection />
      <Outlet />
      <FooterSection />
    </>
  );
};

export default MainLayout;
