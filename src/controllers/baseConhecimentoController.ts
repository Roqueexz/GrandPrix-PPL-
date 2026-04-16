import { Request, Response } from 'express';
import { cadastrarSolucao, cadastrarNorma, cadastrarRecurso } from '../services/BaseConhecimentoService';
 
/**
 * POST /api/base/solucao
 * Cadastra uma nova solução interna na base de conhecimento
 */
export async function adicionarSolucao(req: Request, res: Response): Promise<void> {
  try {
    const { titulo, descricao, area_responsavel, tipo_barreira, custo_estimado, tempo_resolucao, status } = req.body;
 
    if (!titulo || !descricao || !area_responsavel || !tipo_barreira) {
      res.status(400).json({ erro: 'Campos obrigatórios: titulo, descricao, area_responsavel, tipo_barreira' });
      return;
    }
 
    const solucao = await cadastrarSolucao({ titulo, descricao, area_responsavel, tipo_barreira, custo_estimado, tempo_resolucao, status: status ?? 'recomendada' });
 
    res.status(201).json({ sucesso: true, data: solucao });
  } catch (error) {
    console.error('Erro em BaseConhecimentoController.adicionarSolucao:', error);
    res.status(500).json({ erro: 'Erro ao cadastrar solução.' });
  }
}
 
/**
 * POST /api/base/norma
 * Cadastra uma norma ou lei na base de conhecimento
 */
export async function adicionarNorma(req: Request, res: Response): Promise<void> {
  try {
    const { codigo, titulo, descricao, fonte, url_referencia } = req.body;
 
    if (!codigo || !titulo || !descricao || !fonte) {
      res.status(400).json({ erro: 'Campos obrigatórios: codigo, titulo, descricao, fonte' });
      return;
    }
 
    const norma = await cadastrarNorma({ codigo, titulo, descricao, fonte, url_referencia });
 
    res.status(201).json({ sucesso: true, data: norma });
  } catch (error) {
    console.error('Erro em BaseConhecimentoController.adicionarNorma:', error);
    res.status(500).json({ erro: 'Erro ao cadastrar norma.' });
  }
}
 
/**
 * POST /api/base/recurso
 * Cadastra um fornecedor ou recurso de tecnologia assistiva
 */
export async function adicionarRecurso(req: Request, res: Response): Promise<void> {
  try {
    const { nome, tipo, descricao, contato } = req.body;
 
    if (!nome || !tipo || !descricao) {
      res.status(400).json({ erro: 'Campos obrigatórios: nome, tipo, descricao' });
      return;
    }
 
    const recurso = await cadastrarRecurso({ nome, tipo, descricao, contato });
 
    res.status(201).json({ sucesso: true, data: recurso });
  } catch (error) {
    console.error('Erro em BaseConhecimentoController.adicionarRecurso:', error);
    res.status(500).json({ erro: 'Erro ao cadastrar recurso.' });
  }
}