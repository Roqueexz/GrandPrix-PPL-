import { pool } from '../database/pgClient.js';
import { Recurso, MatchResult } from '../types/index.js';

const SIMILARITY_THRESHOLD = 0.4;

export const RecursoRepository = {
  async salvar(data: Omit<Recurso, 'id' | 'criado_em'>): Promise<Recurso> {
    const { nome, tipo, descricao, contato, embedding } = data;

    const result = await pool.query<Recurso>(
      `INSERT INTO recursos (nome, tipo, descricao, contato, embedding)
       VALUES ($1, $2, $3, $4, $5::vector)
       RETURNING *`,
      [nome, tipo, descricao, contato, `[${embedding.join(',')}]`]
    );

    return result.rows[0];
  },

  async buscarPorSimilaridade(embedding: number[], limite = 3): Promise<MatchResult<Recurso>[]> {
    const result = await pool.query(
      `SELECT 
        id, nome, tipo, descricao, contato, criado_em,
        1 - (embedding <=> $1::vector) AS similaridade
       FROM recursos
       WHERE 1 - (embedding <=> $1::vector) > $2
       ORDER BY similaridade DESC
       LIMIT $3`,
      [`[${embedding.join(',')}]`, SIMILARITY_THRESHOLD, limite]
    );

    return result.rows.map((row) => ({
      item: row as Recurso,
      similaridade: parseFloat(row.similaridade),
    }));
  },
};