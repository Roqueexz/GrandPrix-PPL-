import OpenAI from "openai";
import type { Classificacao } from "../types/index.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function classificarDemanda(
  descricao: string
): Promise<Classificacao> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `Você é um especialista em acessibilidade e inclusão no ambiente de trabalho no Brasil.

Classifique demandas de acessibilidade considerando:
- tipo de barreira
- urgência
- área responsável
- normas brasileiras aplicáveis (LBI, WCAG, NBR 9050, etc)

Sempre responda apenas JSON válido.`,
        },
        {
          role: "user",
          content: `Analise a seguinte demanda:

"${descricao}"

Retorne exatamente neste formato JSON:
{
  "tipo_barreira": "fisica|comunicacao|tecnologica|atitudinal|beneficios|transporte|outro",
  "urgencia": "alta|media|baixa",
  "area_responsavel": "TIC|RH|Predial|Ergonomia|Saude|Beneficios|Comunicacao|DI",
  "resumo": "resumo claro em 1 frase",
  "normas_aplicaveis": ["normas relevantes"]
}

Critérios:
- alta: impede trabalho
- media: dificulta
- baixa: melhoria`,
        },
      ],
      temperature: 0,
    });

    const content = response.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("Resposta vazia da OpenAI");
    }

    // limpa possível markdown
    const cleanJson = content
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const classificacao: Classificacao = JSON.parse(cleanJson);

    if (!classificacao.tipo_barreira || !classificacao.urgencia) {
      throw new Error("Classificação inválida");
    }

    return classificacao;
  } catch (error) {
    console.error("Erro ao classificar:", error);

    return {
      tipo_barreira: "outro",
      urgencia: "media",
      area_responsavel: "DI",
      resumo: "Demanda registrada para análise",
      normas_aplicaveis: ["Lei 13.146/2015"],
    };
  }
}