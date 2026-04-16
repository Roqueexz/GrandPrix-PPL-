-- ─────────────────────────────────────────
-- RESET TOTAL (ordem importa por causa de FK no futuro)
-- ─────────────────────────────────────────

DROP TABLE IF EXISTS demandas;
DROP TABLE IF EXISTS solucoes;
DROP TABLE IF EXISTS normas;
DROP TABLE IF EXISTS recursos;

-- ─────────────────────────────────────────
-- EXTENSÕES
-- ─────────────────────────────────────────

CREATE EXTENSION IF NOT EXISTS vector;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ─────────────────────────────────────────
-- TABELA: SOLUCOES
-- ─────────────────────────────────────────

CREATE TABLE solucoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  area_responsavel TEXT NOT NULL,
  tipo_barreira TEXT NOT NULL,
  custo_estimado TEXT,
  tempo_resolucao TEXT,
  status TEXT NOT NULL DEFAULT 'recomendada',
  embedding VECTOR(1536) NOT NULL,
  criado_em TIMESTAMP DEFAULT NOW()
);

-- índice vetorial
CREATE INDEX idx_solucoes_embedding 
ON solucoes USING hnsw (embedding vector_cosine_ops);

-- ─────────────────────────────────────────
-- TABELA: NORMAS
-- ─────────────────────────────────────────

CREATE TABLE normas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  codigo TEXT NOT NULL,
  titulo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  fonte TEXT NOT NULL,
  url_referencia TEXT,
  embedding VECTOR(1536) NOT NULL,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_normas_embedding 
ON normas USING hnsw (embedding vector_cosine_ops);

-- ─────────────────────────────────────────
-- TABELA: RECURSOS
-- ─────────────────────────────────────────

CREATE TABLE recursos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  tipo TEXT NOT NULL,
  descricao TEXT NOT NULL,
  contato TEXT,
  embedding VECTOR(1536) NOT NULL,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_recursos_embedding 
ON recursos USING hnsw (embedding vector_cosine_ops);

-- ─────────────────────────────────────────
-- TABELA: DEMANDAS
-- ─────────────────────────────────────────

CREATE TABLE demandas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  descricao TEXT NOT NULL,
  tipo_barreira TEXT,
  urgencia TEXT,
  area_responsavel TEXT,
  resumo_ia TEXT,
  embedding VECTOR(1536) NOT NULL,
  resolvida BOOLEAN DEFAULT FALSE,
  criado_em TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_demandas_embedding 
ON demandas USING hnsw (embedding vector_cosine_ops);