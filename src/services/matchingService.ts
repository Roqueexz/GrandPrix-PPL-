import { SolucaoRepository } from '../repositories/solucaoRepository.js';
import { NormaRepository } from '../repositories/normaRepository.js';
import { RecursoRepository } from '../repositories/recursoRepository.js';
import { MatchResult, Solucao, Norma, Recurso } from '../types/index.js';

interface MatchingResult {
  solucoes: MatchResult<Solucao>[];
  normas: MatchResult<Norma>[];
  recursos: MatchResult<Recurso>[];
}

export async function buscarMatches(embedding: number[]): Promise<MatchingResult> {
  const [solucoes, normas, recursos] = await Promise.all([
    SolucaoRepository.buscarPorSimilaridade(embedding, 5),
    NormaRepository.buscarPorSimilaridade(embedding, 5),
    RecursoRepository.buscarPorSimilaridade(embedding, 3),
  ]);

  return { solucoes, normas, recursos };
}