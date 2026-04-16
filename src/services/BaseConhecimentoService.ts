import { gerarEmbedding } from './embeddingService.js';
import { SolucaoRepository } from '../repositories/solucaoRepository.js';
import { NormaRepository } from '../repositories/normaRepository.js';
import { RecursoRepository } from '../repositories/recursoRepository.js';
import type { Solucao, Norma, Recurso, SolucaoInput, NormaInput, RecursoInput } from '../types/index.js';
export async function cadastrarSolucao(input: SolucaoInput): Promise<Solucao> {
  const texto = `${input.titulo}. ${input.descricao}. Área: ${input.area_responsavel}. Tipo: ${input.tipo_barreira}`;
  const embedding = await gerarEmbedding(texto);
  return SolucaoRepository.salvar({ ...input, embedding });
}

export async function cadastrarNorma(input: NormaInput): Promise<Norma> {
  const texto = `${input.codigo} - ${input.titulo}. ${input.descricao}. Fonte: ${input.fonte}`;
  const embedding = await gerarEmbedding(texto);
  return NormaRepository.salvar({ ...input, embedding });
}

export async function cadastrarRecurso(input: RecursoInput): Promise<Recurso> {
  const texto = `${input.nome}. ${input.descricao}. Tipo: ${input.tipo}`;
  const embedding = await gerarEmbedding(texto);
  return RecursoRepository.salvar({ ...input, embedding });
}