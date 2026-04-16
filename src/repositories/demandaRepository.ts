import { pool } from '../database/pgClient.js';
import type { Demanda } from '../types/index.js';

export const DemandaRepository = {
  async salvar(data: {
    descricao: string;
    tipo_barreira: string;
    urgencia: string;
    area_responsavel: string;
    resumo_ia: string;
    embedding: number[];
  }): Promise<Demanda> {
    const { descricao, tipo_barreira, urgencia, area_responsavel, resumo_ia, embedding } = data;

    const result = await pool.query<Demanda>(
      `INSERT INTO demandas 
        (descricao, tipo_barreira, urgencia, area_responsavel, resumo_ia, embedding, resolvida)
       VALUES ($1, $2, $3, $4, $5, $6::vector, $7)
       RETURNING *`,
      [descricao, tipo_barreira, urgencia, area_responsavel, resumo_ia, `[${embedding.join(',')}]`, false]
    );

    return result.rows[0];
  },

  async buscarTodas(): Promise<Omit<Demanda, 'embedding'>[]> {
    const result = await pool.query(
      `SELECT id, descricao, tipo_barreira, urgencia, area_responsavel, resumo_ia, resolvida, criado_em
       FROM demandas ORDER BY criado_em DESC`
    );
    return result.rows;
  },

  async marcarComoResolvida(id: string): Promise<void> {
    await pool.query(`UPDATE demandas SET resolvida = TRUE WHERE id = $1`, [id]);
  },
};  