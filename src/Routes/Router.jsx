import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage.jsx/HomePage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import FeaturedPage from '../Pages/Feature/FeaturedPage';

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
    ],
  },
]);

export default router;
