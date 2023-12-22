import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage.jsx/HomePage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import FeaturedPage from '../Pages/Feature/FeaturedPage';
import LoginPage from '../Pages/Login/LoginPage';
import RegisterPage from '../Pages/Register/RegisterPage';
import DrawerLayout from '../MainLayout/DrawerLayout';
import NewTask from '../DashBroad/NewTask/NewTask';
import EditTask from '../DashBroad/EditTask/EditTask';
import PrivateRoutes from './PrivateRoutes';
import ProfileDetails from '../DashBroad/ProfileDetails.jsx/ProfileDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/feature', element: <FeaturedPage /> },
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
  {
    path: '/dashBroad',
    element: (
      <PrivateRoutes>
        <DrawerLayout />
      </PrivateRoutes>
    ),
    children: [
      { path: 'newTask', element: <NewTask /> },
      { path: 'editTask', element: <EditTask /> },
      { path: 'profile', element: <ProfileDetails /> },
    ],
  },
]);

export default router;
