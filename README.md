
<div align="center">

<br />
<br />


### **C E N T R A L**

*Transformando acessibilidade corporativa com inteligência artificial*

<br />


### **Central Inteligente de Demandas de Acessibilidade**

*Transformando acessibilidade corporativa com inteligência artificial*

<br />

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-pgvector-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://github.com/pgvector/pgvector)
[![Claude AI](https://img.shields.io/badge/Claude-API-D97757?style=for-the-badge&logo=anthropic&logoColor=white)](https://www.anthropic.com/)
[![License](https://img.shields.io/badge/Licença-MIT-22C55E?style=for-the-badge)](./LICENSE)

<br />

>  **Projeto desenvolvido para o Grand Prix** — Tema: *Acessibilidade ligada à inclusão e performance organizacional*  
> Proposta de solução para o desafio apresentado pela **Petrobras**

<br />

</div>

---

## Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [O Problema que Resolvemos](#-o-problema-que-resolvemos)
- [Como Funciona](#-como-funciona)
- [Arquitetura Técnica](#-arquitetura-técnica)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológica](#-stack-tecnológica)
- [Instalação e Execução](#-instalação-e-execução)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Reference](#-api-reference)
- [Roadmap do MVP](#-roadmap-do-mvp)
- [Impacto e Métricas](#-impacto-e-métricas)
- [Time](#-time)

---

##  Sobre o Projeto

**CENTRAL** é uma plataforma de inteligência artificial desenhada para transformar a maneira como grandes organizações identificam, compreendem e resolvem demandas de acessibilidade.

Em vez de um sistema de ouvidoria genérico, o CENTRAL funciona como um **motor de busca semântico especializado em acessibilidade corporativa** — ele entende o *significado* do problema relatado, não apenas palavras-chave, e conecta automaticamente cada demanda a soluções já testadas, normas aplicáveis e áreas responsáveis.

```
Antes do CENTRAL                    Depois do CENTRAL
─────────────────                   ──────────────────
Demanda chega por e-mail    →       Qualquer canal omnichannel
Vai para a pessoa errada    →       Roteamento automático por IA
Gestor começa do zero       →       80% do caminho já percorrido
Solução some, não é         →       Base de conhecimento viva
  documentada
Diretoria não tem visão     →       Dashboard estratégico em
  macro                               tempo real
```

---

##  O Problema que Resolvemos

A Petrobras possui **~50.000 colaboradores**, sendo **3,2% pessoas com deficiência**. As demandas de acessibilidade chegavam de forma fragmentada — por e-mail, telefone, conversa informal — para diferentes áreas (RH, TIC, Ergonomia, Saúde, Serviços Prediais) sem qualquer integração.

O resultado era:

-  **Alto esforço manual** de análise, articulação e encaminhamento
-  **Sem memória organizacional** — soluções já testadas ficavam invisíveis
-  **Atuação reativa** sem dados para ação preventiva
-  **"Cai no vazio"** — colaboradores sem retorno sobre suas solicitações
-  **Inclusão superficial** — a pessoa é contratada, mas barreiras não são removidas

---

##  Como Funciona

### Fluxo Geral

```
┌─────────────────────────────────────────────────────────────────┐
│                        CANAIS DE ENTRADA                        │
│    App/Web    Chatbot    E-mail    QR Code    Teams  │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                       MOTOR DE IA (Claude)                      │
│                                                                 │
│   1. Classificação por tipo de barreira                         │
│      ├──   Física/Arquitetônica                              │
│      ├──   Comunicação                                        │
│      ├──   Tecnológica                                        │
│      ├──   Atitudinal/Cultural                               │
│      └──   Benefícios/Saúde                                  │
│                                                                 │
│   2. Priorização (gravidade + frequência + impacto)             │
│   3. Enriquecimento (normas, soluções similares, responsável)   │
└────────────────────────────┬────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                  BUSCA SEMÂNTICA (pgvector)                     │
│                                                                 │
│  Problema: "colega não usa sistema de ponto com leitor de tela" │
│                                                                 │
│  Encontra automaticamente:                                      │
│   Caso resolvido: "Adaptação RH para NVDA — TIC, 2023"       │
│   Norma: "WCAG 2.1 — Critério 1.1.1"                         │
│   Fornecedor: "Software X com certificação acessível"         │
│   Iniciativa: "Projeto Teclado Acessível — área TIC"          │
└────────────────────────────┬────────────────────────────────────┘
                             │
                    ┌────────┴────────┐
                    ▼                 ▼
         ┌──────────────┐   ┌──────────────────┐
         │  SOLICITANTE │   │     GESTOR        │
         │              │   │                   │
         │ • Protocolo  │   │ • Resumo da IA    │
         │ • Status     │   │ • Normas aplicáv. │
         │ • Previsão   │   │ • Casos similares │
         │ • Satisfação │   │ • Checklist ações │
         └──────────────┘   └──────────────────┘
                                     │
                                     ▼
                         ┌───────────────────────┐
                         │  BASE DE CONHECIMENTO │
                         │       (aprende)       │
                         └───────────────────────┘
```

---



---

## Funcionalidades

### Para o Colaborador
| Funcionalidade | Descrição |
|---|---|
|  **Omnichannel** | Registro via app, chatbot, e-mail ou QR Code físico |
|  **Chatbot acessível** | Conversa natural, inclusive por voz |
|  **Protocolo imediato** | Confirmação automática ao registrar |
|  **Acompanhamento** | Status em tempo real, previsão de resolução |
|  **Pesquisa de satisfação** | Feedback ao fechar a demanda |

### Para o Gestor
| Funcionalidade | Descrição |
|---|---|
|  **Resumo gerado por IA** | Problema já compreendido e contextualizado |
|  **Normas aplicáveis** | LBI, NBR 9050, WCAG 2.1 e outras automaticamente linkadas |
|  **Soluções similares** | Casos já resolvidos internamente, rankeados por relevância |
|  **Checklist de ações** | Roteiro sugerido pela IA para resolução |
|  **SLA sugerido** | Prazo recomendado com base na urgência |

### Para a Liderança
| Funcionalidade | Descrição |
|---|---|
|  **Mapa de barreiras** | Visualização por área, andar ou unidade |
|  **Tendências** | Problemas emergentes identificados antes de virar crise |
| **Alertas de reincidência** | Mesmo problema, mesma área, múltiplas vezes |
|  **Score de Inclusão** | Evolução histórica por departamento |
|  **Métricas de resolutividade** | Tempo médio, taxa de resolução, satisfação |

---

##  Stack Tecnológica

| Camada | Tecnologia | Justificativa |
|---|---|---|
| **Frontend** | React 18 + Vite + TailwindCSS | Interface acessível e responsiva |
| **Backend** | Node.js + TypeScript + Express | Tipagem forte, manutenibilidade |
| **Banco de Dados** | PostgreSQL + pgvector | Busca semântica nativa e eficiente |
| **IA** | OpenAI (gpt-4o-mini) | Classificação, embeddings e geração de contexto |
| **Notificações** | WebSocket + e-mail (Nodemailer) | Status em tempo real |


---


##  Impacto e Métricas

### Métricas que a plataforma rastreia

```
 Redução do tempo médio de resolução de demandas
Taxa de resolutividade por departamento
Índice de reincidência (mesmo problema, mesma área)
NPS de satisfação dos solicitantes
Score de Inclusão por unidade (evolução mensal)
Volume de demandas por tipo de barreira
```

### Impacto esperado

> Com base em benchmarks de sistemas similares em grandes organizações, a centralização e automação de demandas de acessibilidade pode reduzir em até **60% o tempo médio de resposta** e em **40% o retrabalho operacional** nas áreas envolvidas, além de aumentar significativamente a visibilidade e o engajamento de colaboradores com deficiência.

---


---

## Licença

Este projeto está licenciado sob a [MIT License](./LICENSE).

---

<div align="center">

**CENTRAL** — *Porque acessibilidade não é favor. É direito. E agora, também é dado.*

<br />


</div>
