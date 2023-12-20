import ReactDOM from 'react-dom/client';
import './main.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
