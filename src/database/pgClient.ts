import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
 
export async function initDatabase(): Promise<void> {
  const client = await pool.connect();
 
  try {
    console.log('Conectando ao banco de dados');
 
    // Habilita extensão pgvector
    await client.query(`CREATE EXTENSION IF NOT EXISTS vector;`);
 
    // Tabela de soluções internas
    await client.query(`
      CREATE TABLE IF NOT EXISTS solucoes (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        titulo TEXT NOT NULL,
        descricao TEXT NOT NULL,
        area_responsavel TEXT NOT NULL,
        tipo_barreira TEXT NOT NULL,
        custo_estimado TEXT,
        tempo_resolucao TEXT,
        status TEXT NOT NULL DEFAULT 'recomendada',
        embedding VECTOR(1024),
        criado_em TIMESTAMP DEFAULT NOW()
      );
    `);
 
    // Tabela de normas e legislação
    await client.query(`
      CREATE TABLE IF NOT EXISTS normas (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        codigo TEXT NOT NULL,
        titulo TEXT NOT NULL,
        descricao TEXT NOT NULL,
        fonte TEXT NOT NULL,
        url_referencia TEXT,
        embedding VECTOR(1024),
        criado_em TIMESTAMP DEFAULT NOW()
      );
    `);
 
    // Tabela de recursos e fornecedores
    await client.query(`
      CREATE TABLE IF NOT EXISTS recursos (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        nome TEXT NOT NULL,
        tipo TEXT NOT NULL,
        descricao TEXT NOT NULL,
        contato TEXT,
        embedding VECTOR(1024),
        criado_em TIMESTAMP DEFAULT NOW()
      );
    `);
 
    // Tabela de demandas (histórico)
    await client.query(`
      CREATE TABLE IF NOT EXISTS demandas (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        descricao TEXT NOT NULL,
        tipo_barreira TEXT,
        urgencia TEXT,
        area_responsavel TEXT,
        resumo_ia TEXT,
        embedding VECTOR(1024),
        resolvida BOOLEAN DEFAULT FALSE,
        criado_em TIMESTAMP DEFAULT NOW()
      );
    `);
 
    // Índices para busca por similaridade (HNSW = mais rápido)
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_solucoes_embedding 
      ON solucoes USING hnsw (embedding vector_cosine_ops);
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_normas_embedding 
      ON normas USING hnsw (embedding vector_cosine_ops);
    `);
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_recursos_embedding 
      ON recursos USING hnsw (embedding vector_cosine_ops);
    `);
 
    console.log('Banco de dados inicializado com sucesso!');
  } catch (error) {
    console.error('Erro ao inicializar banco:', error);
    throw error;
  } finally {
    client.release();
  }
}