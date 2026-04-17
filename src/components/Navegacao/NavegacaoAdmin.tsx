import { Link, useLocation } from 'react-router-dom';
import { Accessibility, LogOut } from 'lucide-react';
import { AppConfig, Routes } from '../../config/AppConfig';

export function NavegacaoAdmin() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-yellow-500 text-yellow-900 shadow-lg">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to={Routes.ADMINISTRADOR} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Accessibility className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">{AppConfig.appName}</h1>
              <p className="text-yellow-900/80 text-sm mt-1">Painel do Administrador</p>
            </div>
          </Link>

          <nav className="flex gap-4 items-center">
            <Link
              to={Routes.ADMINISTRADOR}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive(Routes.ADMINISTRADOR)
                  ? 'bg-yellow-600 text-white font-semibold'
                  : 'hover:bg-yellow-400'
              }`}
            >
              Dashboard
            </Link>
            <a
              href="/"
              className="px-4 py-2 rounded-lg transition-colors hover:bg-yellow-400 flex items-center gap-2"
              title="Sair do painel administrativo"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
