import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { initDatabase } from './database/pgClient.js';

const PORT = Number(process.env.PORT) || 3000;

async function start() {
  try {
    await initDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 API rodando em http://localhost:${PORT}`);
      console.log(`📋 POST /api/demandas/analisar`);
      console.log(`📋 GET  /api/demandas`);
      console.log(`📋 GET  /api/health`);
    });
  } catch (error) {
    console.error('❌ Falha ao iniciar:', error);
    process.exit(1);
  }
}

start();