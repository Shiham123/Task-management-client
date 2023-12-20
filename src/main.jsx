import ReactDOM from 'react-dom/client';
import './main.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.jsx';
import { AppProvider } from './AppContext/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>
);
