import { Router } from 'express';
import { analisar, listar, resolver } from './controllers/demandaController.js';
import { adicionarSolucao, adicionarNorma, adicionarRecurso } from './controllers/baseConhecimentoController.js';

const router = Router();

router.post('/demandas/analisar', analisar);
router.get('/demandas', listar);
router.patch('/demandas/:id/resolver', resolver);

router.post('/base/solucao', adicionarSolucao);
router.post('/base/norma', adicionarNorma);
router.post('/base/recurso', adicionarRecurso);

router.get('/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default router;