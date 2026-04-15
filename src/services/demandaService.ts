import { classificarDemanda } from './ClassificadorService';
import { gerarEmbedding } from './EmbeddingService';
import { pool } from '../database/pgClient';
import { AnaliseResult } from '../models';

// função principal chamada pelo controller
export async function analisarDemanda(descricao: string): Promise<AnaliseResult> {
  // 1. classificação com IA
  const classificacao = await classificarDemanda(descricao);

  // 2. gerar embedding
  const embedding = await gerarEmbedding(descricao);

  // 3. salvar demanda no banco
  const result = await pool.query(
    `
    INSERT INTO demandas 
    (descricao, tipo_barreira, urgencia, area_responsavel, resumo_ia, embedding)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id
    `,
    [
      descricao,
      classificacao.tipo_barreira,
      classificacao.urgencia,
      classificacao.area_responsavel,
      classificacao.resumo,
      embedding,
    ]
  );

  const demandaId = result.rows[0].id;

  // 4. MATCHING (MVP - vazio por enquanto)
  const solucoes: any[] = [];
  const normas: any[] = [];
  const recursos: any[] = [];

  // 5. resposta final
  return {
    classificacao,
    solucoes,
    normas,
    recursos,
    demanda_id: demandaId,
  };
}