import type { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error('❌ Erro não tratado:', err.message);
  res.status(500).json({
    sucesso: false,
    erro: 'Erro interno do servidor.',
  });
}