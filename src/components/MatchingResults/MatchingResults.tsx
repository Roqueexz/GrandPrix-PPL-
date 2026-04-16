import { motion } from 'motion/react';
import { AlertCircle, Clock, Building2, FileText, Lightbulb, Package } from 'lucide-react';
import type { ResultadoMatching } from '../../config/AppConfig';

interface MatchingResultsProps {
  resultado: ResultadoMatching;
}

export function MatchingResults({ resultado }: MatchingResultsProps) {
  const { classificacao, solucoes, normas, recursos } = resultado;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Classificação */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-primary" />
          Classificação Automática
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary/10 p-4 rounded-lg">
            <div className="text-sm text-primary mb-1">Tipo de Barreira</div>
            <div className="font-semibold text-primary">{classificacao.tipo_barreira}</div>
          </div>
          <div className={`p-4 rounded-lg ${
            classificacao.urgencia === 'Alta' ? 'bg-destructive/10' : 'bg-secondary/10'
          }`}>
            <div className={`text-sm mb-1 ${
              classificacao.urgencia === 'Alta' ? 'text-destructive' : 'text-secondary'
            }`}>
              <Clock className="w-4 h-4 inline mr-1" />
              Urgência
            </div>
            <div className={`font-semibold ${
              classificacao.urgencia === 'Alta' ? 'text-destructive' : 'text-secondary'
            }`}>
              {classificacao.urgencia}
            </div>
          </div>
          <div className="bg-accent/10 p-4 rounded-lg">
            <div className="text-sm text-accent mb-1">
              <Building2 className="w-4 h-4 inline mr-1" />
              Área Responsável
            </div>
            <div className="font-semibold text-accent">{classificacao.area_responsavel}</div>
          </div>
        </div>
      </div>

      {/* Soluções */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-secondary" />
          Soluções Similares ({solucoes.length})
        </h3>
        
        <div className="space-y-3">
          {solucoes.map((solucao, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-foreground">{solucao.titulo}</h4>
                    <span className="bg-secondary/15 text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      {solucao.similaridade}% match
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{solucao.descricao}</p>
                  {solucao.detalhes && (
                    <p className="text-xs text-muted-foreground/80 italic mb-2">{solucao.detalhes}</p>
                  )}
                  <div className="flex flex-wrap gap-3 text-xs">
                    {solucao.custo && (
                      <span className="text-muted-foreground">💰 {solucao.custo}</span>
                    )}
                    {solucao.tempo && (
                      <span className="text-muted-foreground">⏱️ {solucao.tempo}</span>
                    )}
                    {solucao.status && (
                      <span className="text-primary">✓ {solucao.status}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Normas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-primary" />
          Normas e Legislação Aplicável ({normas.length})
        </h3>
        
        <div className="space-y-3">
          {normas.map((norma, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-foreground">{norma.titulo}</h4>
                    <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                      {norma.similaridade}% relevância
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{norma.descricao}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground/80">
                    <span>📋 {norma.fonte}</span>
                    {norma.url && (
                      <a href={norma.url} target="_blank" rel="noopener noreferrer" 
                         className="text-primary hover:underline">
                        Ver legislação →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recursos */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Package className="w-5 h-5 text-accent" />
          Recursos e Fornecedores ({recursos.length})
        </h3>
        
        <div className="space-y-3">
          {recursos.map((recurso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-foreground">{recurso.titulo}</h4>
                    <span className="bg-secondary/15 text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium">
                      {recurso.similaridade}% match
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{recurso.descricao}</p>
                  {recurso.contato && (
                    <p className="text-xs text-primary">📞 {recurso.contato}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
