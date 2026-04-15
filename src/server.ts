import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDatabase } from './database/pgClient';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// ─── MIDDLEWARES ─────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ─── ROTAS ───────────────────────────────────────────────
app.use('/api', routes);

// ─── ERRO GLOBAL ─────────────────────────────────────────
app.use(errorHandler);

// ─── START ───────────────────────────────────────────────
async function start() {
  try {
    await initDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 API rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Falha ao iniciar aplicação:', error);
    process.exit(1);
  }
}

start();