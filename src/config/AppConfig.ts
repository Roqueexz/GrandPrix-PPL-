// ═══════════════════════════════════════
// CONFIGURAÇÃO CENTRAL DA APLICAÇÃO
// ═══════════════════════════════════════

export const AppConfig = {
  appName: 'Motor de Matching de Acessibilidade',
  appSubtitle: 'GrandPrix Petrobras - Sistema Inteligente de Acessibilidade',
  apiBaseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
};

// ═══════════════════════════════════════
// ENUMERAÇÕES
// ═══════════════════════════════════════

export enum TipoBarreira {
  FISICA = 'Física',
  TECNOLOGICA = 'Tecnológica',
  COMUNICACIONAL = 'Comunicacional',
  DIGITAL = 'Digital',
  ATITUDINAL = 'Atitudinal',
  BENEFICIOS = 'Benefícios'
}

export enum Urgencia {
  BAIXA = 'Baixa',
  MEDIA = 'Média',
  ALTA = 'Alta',
  CRITICA = 'Crítica'
}

export enum AreaResponsavel {
  TIC = 'TIC',
  SERVICOS_PREDIAIS = 'Serviços Prediais',
  RH = 'RH',
  COMUNICACAO = 'Comunicação',
  SAUDE = 'Saúde',
  BENEFICIOS = 'Benefícios',
  ERGONOMIA = 'Ergonomia'
}

// ═══════���═══════════════════════════════
// TIPOS E INTERFACES
// ═══════════════════════════════════════

export interface Classificacao {
  tipo_barreira: string;
  urgencia: string;
  area_responsavel: string;
}

export interface Solucao {
  titulo: string;
  descricao: string;
  similaridade: number;
  detalhes?: string;
  custo?: string;
  tempo?: string;
  status?: string;
  area_responsavel?: string;
  tipo_barreira?: string;
}

export interface Norma {
  titulo: string;
  descricao: string;
  similaridade: number;
  fonte?: string;
  url?: string;
  codigo?: string;
}

export interface Recurso {
  titulo: string;
  descricao: string;
  similaridade: number;
  contato?: string;
  tipo?: string;
}

export interface ResultadoMatching {
  classificacao: Classificacao;
  solucoes: Solucao[];
  normas: Norma[];
  recursos: Recurso[];
}

// ═══════════════════════════════════════
// ROTAS
// ═══════════════════════════════════════

export const Routes = {
  HOME: '/',
  MATCHING: '/matching',
  DASHBOARD: '/dashboard',
  ADMINISTRADOR: '/administrador',
} as const;
