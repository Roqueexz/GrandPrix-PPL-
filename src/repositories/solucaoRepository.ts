import { pool } from '../database/pgClient.js';
import { Solucao, MatchResult } from '../types/index.js';

const SIMILARITY_THRESHOLD = 0.4;

export const SolucaoRepository = {
  async salvar(data: Omit<Solucao, 'id' | 'criado_em'>): Promise<Solucao> {
    const { titulo, descricao, area_responsavel, tipo_barreira, custo_estimado, tempo_resolucao, status, embedding } = data;

    const result = await pool.query<Solucao>(
      `INSERT INTO solucoes 
        (titulo, descricao, area_responsavel, tipo_barreira, custo_estimado, tempo_resolucao, status, embedding)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8::vector)
       RETURNING *`,
      [titulo, descricao, area_responsavel, tipo_barreira, custo_estimado, tempo_resolucao, status, `[${embedding.join(',')}]`]
    );

    return result.rows[0];
  },

  async buscarPorSimilaridade(embedding: number[], limite = 5): Promise<MatchResult<Solucao>[]> {
    const result = await pool.query(
      `SELECT 
        id, titulo, descricao, area_responsavel, tipo_barreira,
        custo_estimado, tempo_resolucao, status, criado_em,
        1 - (embedding <=> $1::vector) AS similaridade
       FROM solucoes
       WHERE 1 - (embedding <=> $1::vector) > $2
       ORDER BY similaridade DESC
       LIMIT $3`,
      [`[${embedding.join(',')}]`, SIMILARITY_THRESHOLD, limite]
    );

    return result.rows.map((row) => ({
      item: row as Solucao,
      similaridade: parseFloat(row.similaridade),
    }));
  },
};