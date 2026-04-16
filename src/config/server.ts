// ═══════════════════════════════════════
// CONFIGURAÇÃO DO SERVIDOR
// ═══════════════════════════════════════

export const serverConfig = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 30000, // 30 segundos
  headers: {
    'Content-Type': 'application/json',
  },
};

// Endpoints da API
export const API_ENDPOINTS = {
  ANALISAR_DEMANDA: '/demandas/analisar',
  LISTAR_DEMANDAS: '/demandas',
  CADASTRAR_SOLUCAO: '/base/solucao',
  CADASTRAR_NORMA: '/base/norma',
  CADASTRAR_RECURSO: '/base/recurso',
  ESTATISTICAS: '/estatisticas',
} as const;
