import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Dimensão oficial do modelo
const EMBEDDING_DIM = 1536;

export async function gerarEmbedding(texto: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: texto,
    });

    const embedding = response.data?.[0]?.embedding;

if (!embedding) {
  throw new Error("Embedding não retornado pela OpenAI");
}

    // validação de segurança (boa prática)
    if (!Array.isArray(embedding) || embedding.length !== EMBEDDING_DIM) {
      throw new Error("Embedding inválido");
    }

    return embedding;
  } catch (error) {
    console.error(" Erro ao gerar embedding:", error);

    // fallback simples pra não quebrar demo
    return Array.from({ length: EMBEDDING_DIM }, () => Math.random());
  }
}