import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

interface PDashboardProps {
  isEmbedded?: boolean;
}

export function PDashboard({ isEmbedded = false }: PDashboardProps) {
  const estatisticas = [
    { titulo: 'Demandas Analisadas', valor: '1.247', icone: TrendingUp, iconeCor: 'text-secondary' },
    { titulo: 'PCDs Atendidos', valor: '1.623', icone: Users, iconeCor: 'text-primary' },
    { titulo: 'Soluções Aplicadas', valor: '892', icone: CheckCircle, iconeCor: 'text-secondary' },
    { titulo: 'Tempo Médio Resolução', valor: '4.2 dias', icone: Clock, iconeCor: 'text-destructive' }
  ];

  const demandaPorTipo = [
    { id: 'tecnologica', tipo: 'Tecnológica', quantidade: 456, porcentagem: 37 },
    { id: 'fisica', tipo: 'Física', quantidade: 312, porcentagem: 25 },
    { id: 'comunicacional', tipo: 'Comunicacional', quantidade: 249, porcentagem: 20 },
    { id: 'digital', tipo: 'Digital', quantidade: 156, porcentagem: 12 },
    { id: 'atitudinal', tipo: 'Atitudinal', quantidade: 74, porcentagem: 6 }
  ];

  const demandaPorArea = [
    { id: 'tic', area: 'TIC', quantidade: 423 },
    { id: 'prediais', area: 'Serviços Prediais', quantidade: 312 },
    { id: 'rh', area: 'RH', quantidade: 198 },
    { id: 'comunicacao', area: 'Comunicação', quantidade: 165 },
    { id: 'saude', area: 'Saúde', quantidade: 89 },
    { id: 'beneficios', area: 'Benefícios', quantidade: 60 }
  ];

  const tendenciaMensal = [
    { id: 'out25', mes: 'Out/25', demandas: 85, resolvidas: 72 },
    { id: 'nov25', mes: 'Nov/25', demandas: 92, resolvidas: 84 },
    { id: 'dez25', mes: 'Dez/25', demandas: 78, resolvidas: 71 },
    { id: 'jan26', mes: 'Jan/26', demandas: 105, resolvidas: 98 },
    { id: 'fev26', mes: 'Fev/26', demandas: 118, resolvidas: 109 },
    { id: 'mar26', mes: 'Mar/26', demandas: 134, resolvidas: 125 },
    { id: 'abr26', mes: 'Abr/26', demandas: 127, resolvidas: 119 }
  ];

  const COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'];

  const content = (
    <div className="space-y-6">
      {/* Estatísticas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {estatisticas.map((stat, idx) => {
          const Icone = stat.icone;
          return (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.titulo}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.valor}</p>
                </div>
                <div className="bg-white border border-slate-200 shadow-sm p-3 rounded-lg">
                  <Icone className={`w-6 h-6 ${stat.iconeCor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tendência Mensal */}
        <div className="bg-card rounded-lg shadow-md p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Tendência Mensal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tendenciaMensal}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="demandas" fill="var(--chart-2)" name="Demandas Recebidas" key="bar-demandas" />
              <Bar dataKey="resolvidas" fill="var(--chart-1)" name="Resolvidas" key="bar-resolvidas" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Demandas por Tipo */}
        <div className="bg-card rounded-lg shadow-md p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Demandas por Tipo de Barreira</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={demandaPorTipo}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ tipo, porcentagem }) => `${tipo}: ${porcentagem}%`}
                outerRadius={80}
                fill="var(--chart-1)"
                dataKey="quantidade"
                nameKey="tipo"
              >
                {demandaPorTipo.map((entry) => (
                  <Cell key={`cell-${entry.id}`} fill={COLORS[demandaPorTipo.indexOf(entry) % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Demandas por Área */}
        <div className="bg-card rounded-lg shadow-md p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Demandas por Área Responsável</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={demandaPorArea} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="area" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="quantidade" fill="var(--chart-3)" key="bar-area" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Soluções */}
        <div className="bg-card rounded-lg shadow-md p-6 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Top 5 Soluções Mais Aplicadas</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Leitor de tela (NVDA/JAWS)</p>
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <span className="ml-4 text-sm font-semibold text-muted-foreground">156</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Adaptação de rampa de acesso</p>
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <span className="ml-4 text-sm font-semibold text-muted-foreground">132</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Intérprete de Libras</p>
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div className="bg-[var(--chart-3)] h-2 rounded-full" style={{ width: '58%' }}></div>
                </div>
              </div>
              <span className="ml-4 text-sm font-semibold text-muted-foreground">107</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Sistema com alto contraste</p>
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div className="bg-[var(--chart-4)] h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <span className="ml-4 text-sm font-semibold text-muted-foreground">83</span>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Mobiliário adaptado</p>
                <div className="w-full bg-muted rounded-full h-2 mt-1">
                  <div className="bg-[var(--chart-5)] h-2 rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>
              <span className="ml-4 text-sm font-semibold text-muted-foreground">70</span>
            </div>
          </div>
        </div>
      </div>

      {/* Impacto e ROI */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow-md p-6 text-primary-foreground">
        <h3 className="text-xl font-semibold mb-4">Impacto do Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-primary-foreground/80 text-sm mb-1">Redução no Tempo de Resposta</p>
            <p className="text-3xl font-bold">68%</p>
            <p className="text-primary-foreground/80 text-xs mt-1">De 13 dias para 4.2 dias em média</p>
          </div>
          <div>
            <p className="text-primary-foreground/80 text-sm mb-1">Taxa de Reutilização de Soluções</p>
            <p className="text-3xl font-bold">74%</p>
            <p className="text-primary-foreground/80 text-xs mt-1">Economia de tempo e recursos</p>
          </div>
          <div>
            <p className="text-primary-foreground/80 text-sm mb-1">Satisfação dos Colaboradores</p>
            <p className="text-3xl font-bold">4.8/5</p>
            <p className="text-primary-foreground/80 text-xs mt-1">Baseado em 892 avaliações</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-8">
        {content}
      </main>
    </div>
  );
}
