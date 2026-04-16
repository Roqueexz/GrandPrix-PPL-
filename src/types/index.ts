// ─── BARREIRAS E ÁREAS ───────────────────────────────────────────────────────

export type TipoBarreira =
  | 'fisica'
  | 'comunicacao'
  | 'tecnologica'
  | 'atitudinal'
  | 'beneficios'
  | 'transporte'
  | 'outro';

export type NivelUrgencia = 'alta' | 'media' | 'baixa';

export type AreaResponsavel =
  | 'TIC'
  | 'RH'
  | 'Predial'
  | 'Ergonomia'
  | 'Saude'
  | 'Beneficios'
  | 'Comunicacao'
  | 'DI';

export type StatusSolucao = 'testada' | 'em_andamento' | 'descartada' | 'recomendada';

export type TipoRecurso = 'fornecedor' | 'software' | 'equipamento' | 'servico';

// ─── MODELS ──────────────────────────────────────────────────────────────────

export interface Demanda {
  id: string;
  descricao: string;
  tipo_barreira: TipoBarreira;
  urgencia: NivelUrgencia;
  area_responsavel: AreaResponsavel;
  resumo_ia: string;
  embedding: number[];
  resolvida: boolean;
  criado_em: Date;
}

export interface Solucao {
  id: string;
  titulo: string;
  descricao: string;
  area_responsavel: AreaResponsavel;
  tipo_barreira: TipoBarreira;
  custo_estimado: string;
  tempo_resolucao: string;
  status: StatusSolucao;
  embedding: number[];
  criado_em: Date;
}

export interface Norma {
  id: string;
  codigo: string;
  titulo: string;
  descricao: string;
  fonte: string;
  url_referencia: string;
  embedding: number[];
  criado_em: Date;
}

export interface Recurso {
  id: string;
  nome: string;
  tipo: TipoRecurso;
  descricao: string;
  contato: string;
  embedding: number[];
  criado_em: Date;
}

// ─── INPUTS (sem id, embedding e criado_em) ───────────────────────────────────

export type SolucaoInput = Omit<Solucao, 'id' | 'embedding' | 'criado_em'>;
export type NormaInput = Omit<Norma, 'id' | 'embedding' | 'criado_em'>;
export type RecursoInput = Omit<Recurso, 'id' | 'embedding' | 'criado_em'>;

// ─── CLASSIFICAÇÃO (retorno da IA) ────────────────────────────────────────────

export interface Classificacao {
  tipo_barreira: TipoBarreira;
  urgencia: NivelUrgencia;
  area_responsavel: AreaResponsavel;
  resumo: string;
  normas_aplicaveis: string[];
}

// ─── MATCHING ────────────────────────────────────────────────────────────────

export interface MatchResult<T> {
  item: T;
  similaridade: number;
}

// ─── RESPOSTA FINAL ───────────────────────────────────────────────────────────

export interface AnaliseResult {
  demanda_id: string;
  classificacao: Classificacao;
  solucoes: MatchResult<Solucao>[];
  normas: MatchResult<Norma>[];
  recursos: MatchResult<Recurso>[];
}