import { useState } from 'react';
import { MatchingForm } from '../../components/MatchingForm';
import { MatchingResults } from '../../components/MatchingResults';
import { analisarDemanda } from '../../fetch/api';
import type { ResultadoMatching } from '../../config/AppConfig';

export function PMatching() {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<ResultadoMatching | null>(null);

  const handleAnalisar = async (descricao: string) => {
    setLoading(true);
    try {
      const dados = await analisarDemanda(descricao);
      setResultado(dados);
    } catch (error) {
      console.error('Erro ao analisar demanda:', error);
      alert('Erro ao analisar a demanda. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <main className="container mx-auto px-6 py-8">
        <div className="space-y-6">
          <MatchingForm onSubmit={handleAnalisar} loading={loading} />
          
          {resultado && <MatchingResults resultado={resultado} />}
        </div>
      </main>
    </div>
  );
}
