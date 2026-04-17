import { Bell, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { PDashboard } from '../PDashboard/PDashboard';

export function PAdministrador() {
  const notificacoes = [
    {
      id: 1,
      tipo: 'nova_demanda',
      titulo: 'Nova demanda recebida',
      descricao: 'Demanda de acessibilidade tecnológica no setor de TI.',
      data: '2026-04-17 09:00',
      lida: false,
      icone: Info,
      cor: 'text-blue-500'
    },
    {
      id: 2,
      tipo: 'resolvida',
      titulo: 'Demanda resolvida',
      descricao: 'Solução aplicada para barreira física na entrada principal.',
      data: '2026-04-16 14:30',
      lida: true,
      icone: CheckCircle,
      cor: 'text-green-500'
    },
    {
      id: 3,
      tipo: 'urgente',
      titulo: 'Demanda urgente',
      descricao: 'Barreira comunicacional crítica identificada no atendimento ao cliente.',
      data: '2026-04-17 08:15',
      lida: false,
      icone: AlertTriangle,
      cor: 'text-red-500'
    },
    {
      id: 4,
      tipo: 'atualizacao',
      titulo: 'Atualização de status',
      descricao: 'Demanda de benefícios em análise avançada.',
      data: '2026-04-15 16:45',
      lida: true,
      icone: Info,
      cor: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Bell className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Painel do Administrador</h1>
          </div>

          {/* Notificações das Demandas */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Notificações das Demandas</h2>
            <div className="space-y-4">
              {notificacoes.map((notificacao) => {
                const Icone = notificacao.icone;
                return (
                  <div
                    key={notificacao.id}
                    className={`flex items-start gap-4 p-4 rounded-lg border ${
                      notificacao.lida ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'
                    }`}
                  >
                    <Icone className={`w-6 h-6 mt-1 ${notificacao.cor}`} />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{notificacao.titulo}</h3>
                      <p className="text-muted-foreground mt-1">{notificacao.descricao}</p>
                      <p className="text-sm text-muted-foreground mt-2">{notificacao.data}</p>
                    </div>
                    {!notificacao.lida && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dashboard visível a partir do administrador */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Dashboard Administrativo</h2>
            <PDashboard isEmbedded={true} />
          </div>
        </div>
      </main>
    </div>
  );
}