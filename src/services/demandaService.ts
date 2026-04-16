import { classificarDemanda } from './classificadorService.js';
import { gerarEmbedding } from './embeddingService.js';
import { buscarMatches } from './matchingService.js';
import { DemandaRepository } from '../repositories/demandaRepository.js';
import { AnaliseResult } from '../types/index.js';

export async function analisarDemanda(descricao: string): Promise<AnaliseResult> {
  console.log('🔍 Classificando demanda...');
  const classificacao = await classificarDemanda(descricao);

  console.log('🧮 Gerando embedding...');
  const embedding = await gerarEmbedding(descricao);

  console.log('🔎 Buscando matches...');
  const { solucoes, normas, recursos } = await buscarMatches(embedding);

  console.log('💾 Salvando demanda...');
  const demanda = await DemandaRepository.salvar({
    descricao,
    tipo_barreira: classificacao.tipo_barreira,
    urgencia: classificacao.urgencia,
    area_responsavel: classificacao.area_responsavel,
    resumo_ia: classificacao.resumo,
    embedding,
  });

  console.log(`✅ Concluído! ID: ${demanda.id}`);

  return {
    classificacao,
    solucoes,
    normas,
    recursos,
    demanda_id: demanda.id,
  };
}