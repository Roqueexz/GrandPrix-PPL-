import { useState } from 'react';
import { Search } from 'lucide-react';

interface MatchingFormProps {
  onSubmit: (descricao: string) => void;
  loading?: boolean;
}

export function MatchingForm({ onSubmit, loading = false }: MatchingFormProps) {
  const [descricao, setDescricao] = useState('');

  const exemplos = [
    "Meu colega não consegue usar o sistema de ponto porque usa leitor de tela",
    "Há degraus na entrada do prédio que impedem acesso de cadeirantes",
    "A intranet não possui contraste adequado para pessoas com baixa visão",
    "Preciso de um intérprete de Libras para reuniões importantes"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (descricao.trim()) {
      onSubmit(descricao);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        Descreva o Problema de Acessibilidade
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Exemplo: Meu colega não consegue usar o sistema de ponto porque usa leitor de tela..."
          className="w-full h-32 p-4 border border-border bg-input rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-transparent resize-none"
          disabled={loading}
        />

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Exemplos:</span>
          {exemplos.map((exemplo, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setDescricao(exemplo)}
              disabled={loading}
              className="text-xs bg-muted hover:bg-secondary/10 disabled:opacity-50 text-muted-foreground px-3 py-1 rounded-full transition-colors"
            >
              {exemplo.substring(0, 40)}...
            </button>
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || !descricao.trim()}
          className="w-full bg-primary hover:bg-primary/90 disabled:bg-muted text-primary-foreground py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Analisando com IA...
            </>
          ) : (
            <>
              <Search className="w-5 h-5" />
              Analisar Demanda
            </>
          )}
        </button>
      </form>
    </div>
  );
}
