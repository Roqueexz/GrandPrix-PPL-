import { Link, useLocation } from 'react-router-dom';
import { Accessibility } from 'lucide-react';
import { AppConfig, Routes } from '../../config/AppConfig';

export function Navegacao() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link to={Routes.HOME} className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Accessibility className="w-10 h-10" />
            <div>
              <h1 className="text-3xl font-bold">{AppConfig.appName}</h1>
              <p className="text-primary-foreground/80 text-sm mt-1">{AppConfig.appSubtitle}</p>
            </div>
          </Link>

          <nav className="flex gap-4">
            <Link
              to={Routes.HOME}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive(Routes.HOME)
                  ? 'bg-secondary text-secondary-foreground font-semibold'
                  : 'hover:bg-primary-foreground/10'
              }`}
            >
              Início
            </Link>
            <Link
              to={Routes.MATCHING}
              className={`px-4 py-2 rounded-lg transition-colors ${
                isActive(Routes.MATCHING)
                  ? 'bg-secondary text-secondary-foreground font-semibold'
                  : 'hover:bg-primary-foreground/10'
              }`}
            >
              Análise
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
