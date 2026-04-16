import { analisarDemanda } from '../services/demandaService.js';
import type { Response, Request, NextFunction } from 'express';

// POST /api/demandas/analisar
export async function analisar(req: Request, res: Response, next: NextFunction) {
  try {
    const { descricao } = req.body;

    // validação básica
    if (!descricao || typeof descricao !== 'string') {
      return res.status(400).json({
        error: 'Campo "descricao" é obrigatório e deve ser texto',
      });
    }

    const resultado = await analisarDemanda(descricao);

    return res.status(200).json(resultado);
  } catch (error) {
    next(error);
  }
}

// GET /api/demandas
export async function listar(req: Request, res: Response, next: NextFunction) {
  try {
    // depois você conecta com repository
    return res.json({ message: 'listar demandas (TODO)' });
  } catch (error) {
    next(error);
  }
}

// PATCH /api/demandas/:id/resolver
export async function resolver(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    // depois você implementa no repository
    return res.json({ message: `resolver demanda ${id} (TODO)` });
  } catch (error) {
    next(error);
  }
}