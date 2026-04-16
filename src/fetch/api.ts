// ═══════════════════════════════════════
// CHAMADAS API
// ═══════════════════════════════════════

import { serverConfig, API_ENDPOINTS } from '../config/server';
import type { ResultadoMatching, Classificacao, Solucao, Norma, Recurso } from '../config/AppConfig';

// ═══════════════════════════════════════
// FUNÇÃO AUXILIAR PARA FETCH
// ═══════════════════════════════════════

async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${serverConfig.apiUrl}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      ...serverConfig.headers,
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

// ═══════════════════════════════════════
// FUNÇÕES DA API - DEMANDAS
// ═══════════════════════════════════════

/**
 * Analisa uma demanda de acessibilidade e retorna soluções, normas e recursos
 */
export async function analisarDemanda(descricao: string): Promise<ResultadoMatching> {
  // MOCK: Simula resposta da API
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockClassificacao: Classificacao = {
        tipo_barreira: descricao.toLowerCase().includes('leitor de tela') ? 'Tecnológica' :
                      descricao.toLowerCase().includes('degrau') ? 'Física' :
                      descricao.toLowerCase().includes('libras') ? 'Comunicacional' : 'Digital',
        urgencia: descricao.toLowerCase().includes('não consegue') ? 'Alta' : 'Média',
        area_responsavel: descricao.toLowerCase().includes('sistema') ? 'TIC' :
                         descricao.toLowerCase().includes('prédio') ? 'Serviços Prediais' :
                         descricao.toLowerCase().includes('intranet') ? 'TIC' : 'Comunicação'
      };

      const mockSolucoes: Solucao[] = [
        {
          titulo: 'Implementação de leitor de tela compatível',
          descricao: 'Instalação e configuração do NVDA/JAWS para acesso ao sistema de ponto eletrônico',
          similaridade: 94,
          detalhes: 'Solução aplicada com sucesso em 15 casos similares',
          custo: 'R$ 0 (NVDA gratuito)',
          tempo: '2 dias',
          status: 'Testado e aprovado'
        },
        {
          titulo: 'Adaptação do sistema de ponto',
          descricao: 'Desenvolvimento de interface acessível conforme WCAG 2.1',
          similaridade: 87,
          detalhes: 'Implementação de tags ARIA e navegação por teclado',
          custo: 'R$ 12.000',
          tempo: '3 semanas',
          status: 'Em andamento em 3 unidades'
        },
        {
          titulo: 'Treinamento de acessibilidade digital',
          descricao: 'Capacitação da equipe de TI em desenvolvimento acessível',
          similaridade: 76,
          custo: 'R$ 8.000',
          tempo: '1 semana',
          status: 'Disponível'
        }
      ];

      const mockNormas: Norma[] = [
        {
          titulo: 'Lei 13.146/2015 - Art. 63',
          descricao: 'É obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no País',
          similaridade: 92,
          fonte: 'LBI - Lei Brasileira de Inclusão',
          url: 'http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm'
        },
        {
          titulo: 'WCAG 2.1 - Nível AA',
          descricao: 'Diretrizes de Acessibilidade para Conteúdo Web - compatibilidade com leitores de tela',
          similaridade: 89,
          fonte: 'W3C',
          url: 'https://www.w3.org/TR/WCAG21/'
        },
        {
          titulo: 'eMAG - Modelo de Acessibilidade',
          descricao: 'Conjunto de recomendações para acessibilidade de sistemas governamentais e corporativos',
          similaridade: 85,
          fonte: 'Governo Federal',
          url: 'https://www.gov.br/governodigital/pt-br/acessibilidade-digital/emag'
        }
      ];

      const mockRecursos: Recurso[] = [
        {
          titulo: 'NVDA Screen Reader',
          descricao: 'Leitor de tela gratuito e de código aberto para Windows',
          similaridade: 96,
          contato: 'https://www.nvaccess.org/'
        },
        {
          titulo: 'Freedom Scientific - JAWS',
          descricao: 'Software profissional de leitura de tela com suporte técnico',
          similaridade: 91,
          contato: 'contato@freedomscientific.com.br'
        },
        {
          titulo: 'Consultoria DRC Acessibilidade',
          descricao: 'Empresa especializada em auditoria e implementação de acessibilidade digital',
          similaridade: 83,
          contato: '(11) 3456-7890'
        }
      ];

      resolve({
        classificacao: mockClassificacao,
        solucoes: mockSolucoes,
        normas: mockNormas,
        recursos: mockRecursos,
      });
    }, 1500);
  });

  // Implementação real (comentada):
  /*
  return fetchAPI<ResultadoMatching>(API_ENDPOINTS.ANALISAR_DEMANDA, {
    method: 'POST',
    body: JSON.stringify({ descricao }),
  });
  */
}

/**
 * Lista todas as demandas cadastradas
 */
export async function listarDemandas(): Promise<any[]> {
  // MOCK
  return Promise.resolve([]);
  
  // Implementação real (comentada):
  // return fetchAPI<any[]>(API_ENDPOINTS.LISTAR_DEMANDAS);
}

// ═══════════════════════════════════════
// FUNÇÕES DA API - BASE DE CONHECIMENTO
// ═══════════════════════════════════════

export async function cadastrarSolucao(solucao: Partial<Solucao>): Promise<void> {
  // MOCK
  return Promise.resolve();
  
  // Implementação real (comentada):
  /*
  return fetchAPI(API_ENDPOINTS.CADASTRAR_SOLUCAO, {
    method: 'POST',
    body: JSON.stringify(solucao),
  });
  */
}

export async function cadastrarNorma(norma: Partial<Norma>): Promise<void> {
  // MOCK
  return Promise.resolve();
}

export async function cadastrarRecurso(recurso: Partial<Recurso>): Promise<void> {
  // MOCK
  return Promise.resolve();
}

// ═══════════════════════════════════════
// FUNÇÕES DA API - ESTATÍSTICAS
// ═══════════════════════════════════════

export async function obterEstatisticas(): Promise<any> {
  // MOCK
  return Promise.resolve({
    totalDemandas: 1247,
    totalPCDs: 1623,
    totalSolucoes: 892,
    tempoMedio: 4.2,
  });
}
