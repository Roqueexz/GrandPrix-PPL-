import { Outlet } from 'react-router-dom';
import { Navegacao } from './components/Navegacao';
import { Rodape } from './components/Rodape';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navegacao />
      <div className="flex-1">
        <Outlet />
      </div>
      <Rodape />
    </div>
  );
}

export default App;