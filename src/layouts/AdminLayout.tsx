import { Outlet } from 'react-router-dom';
import { NavegacaoAdmin } from '../components/Navegacao/NavegacaoAdmin';
import { RodapeAdmin } from '../components/Rodape/RodapeAdmin';

export function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavegacaoAdmin />
      <div className="flex-1">
        <Outlet />
      </div>
      <RodapeAdmin />
    </div>
  );
}
