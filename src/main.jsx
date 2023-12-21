import ReactDOM from 'react-dom/client';
import './main.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.jsx';
import { AppProvider } from './AppContext/Context.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </QueryClientProvider>
);
