import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { PHome } from './pages/PHome/PHome';
import { PMatching } from './pages/PMatching/PMatching';
import { PDashboard } from './pages/PDashboard/PDashboard';
import { PAdministrador } from './pages/PAdministrador/PAdministrador';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PHome />,
      },
      {
        path: '/matching',
        element: <PMatching />,
      },
      {
        path: '/dashboard',
        element: <PDashboard />,
      },
      {
        path: '/administrador',
        element: <PAdministrador />,
      },
    ],
  },
]);