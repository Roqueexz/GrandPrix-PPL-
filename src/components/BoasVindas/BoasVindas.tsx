import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Target, Shield } from 'lucide-react';
import { Routes } from '../../config/AppConfig';

export function BoasVindas() {
  const beneficios = [
    {
      icone: Zap,
      titulo: 'Análise Instantânea',
      descricao: 'IA classifica e identifica soluções em segundos'
    },
    {
      icone: Target,
      titulo: 'Matching Semântico',
      descricao: 'Busca inteligente por similaridade de contexto'
    },
    {
      icone: Users,
      titulo: 'Base de Conhecimento',
      descricao: 'Histórico de 892 soluções testadas e aprovadas'
    },
    {
      icone: Shield,
      titulo: 'Conformidade Legal',
      descricao: 'Normas brasileiras de acessibilidade integradas'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Bem-vindo ao Motor de Matching de Acessibilidade
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Transforme como sua organização identifica, compreende e atua sobre 
          demandas de acessibilidade — de forma integrada, preventiva e orientada por dados.
        </p>
        <Link
          to={Routes.MATCHING}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Analisar Nova Demanda
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Benefícios */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
          Como Funciona
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, idx) => {
            const Icone = beneficio.icone;
            return (
              <div key={idx} className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
                <div className="bg-secondary/15 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icone className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{beneficio.titulo}</h4>
                <p className="text-sm text-muted-foreground">{beneficio.descricao}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Estatísticas */}
      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-10 text-primary-foreground">
        <h3 className="text-2xl font-semibold mb-8 text-center">Impacto Comprovado</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">1.247</div>
            <div className="text-primary-foreground/80">Demandas Analisadas</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">68%</div>
            <div className="text-primary-foreground/80">Redução no Tempo</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">892</div>
            <div className="text-primary-foreground/80">Soluções Aplicadas</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">4.8/5</div>
            <div className="text-primary-foreground/80">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Como usar */}
      <div className="bg-card rounded-xl p-8 shadow-md border border-border">
        <h3 className="text-2xl font-semibold text-foreground mb-6">Como Usar</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Descreva o Problema</h4>
              <p className="text-muted-foreground">
                Escreva em linguagem natural a demanda de acessibilidade (ex: "colaborador cego não consegue usar o sistema X")
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">IA Classifica Automaticamente</h4>
              <p className="text-muted-foreground">
                Sistema identifica tipo de barreira, urgência e área responsável
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Receba Soluções Rankeadas</h4>
              <p className="text-muted-foreground">
                Veja soluções similares já aplicadas, normas aplicáveis e fornecedores — tudo por % de match
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
