import { pool } from '../database/pgClient.js';
import { Norma, MatchResult } from '../types/index.js';

const SIMILARITY_THRESHOLD = 0.4;

export const NormaRepository = {
  async salvar(data: Omit<Norma, 'id' | 'criado_em'>): Promise<Norma> {
    const { codigo, titulo, descricao, fonte, url_referencia, embedding } = data;

    const result = await pool.query<Norma>(
      `INSERT INTO normas (codigo, titulo, descricao, fonte, url_referencia, embedding)
       VALUES ($1, $2, $3, $4, $5, $6::vector)
       RETURNING *`,
      [codigo, titulo, descricao, fonte, url_referencia, `[${embedding.join(',')}]`]
    );

    return result.rows[0];
  },

  async buscarPorSimilaridade(embedding: number[], limite = 5): Promise<MatchResult<Norma>[]> {
    const result = await pool.query(
      `SELECT 
        id, codigo, titulo, descricao, fonte, url_referencia, criado_em,
        1 - (embedding <=> $1::vector) AS similaridade
       FROM normas
       WHERE 1 - (embedding <=> $1::vector) > $2
       ORDER BY similaridade DESC
       LIMIT $3`,
      [`[${embedding.join(',')}]`, SIMILARITY_THRESHOLD, limite]
    );

    return result.rows.map((row) => ({
      item: row as Norma,
      similaridade: parseFloat(row.similaridade),
    }));
  },
};