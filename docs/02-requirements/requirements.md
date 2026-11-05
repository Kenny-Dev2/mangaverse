# MANGÁVERSE
# Especificação de Requisitos de Software

**Documento:** requirements.md
**Versão:** 1.0
**Status:** Em desenvolvimento
**Projeto:** MANGÁVERSE
**Tipo:** Especificação de Requisitos de Software

---

# 1. Introdução

## 1.1. Objetivo

Este documento tem como objetivo registrar os principais requisitos funcionais e não funcionais do MANGÁVERSE.

A especificação servirá como referência para o desenvolvimento, testes, validação e evolução da plataforma.

Os requisitos foram definidos com base nas decisões tomadas durante o levantamento de necessidades do produto.

## 1.2. Escopo

O MANGÁVERSE será uma plataforma de comércio eletrônico especializada na comercialização de mangás, oferecendo funcionalidades para clientes, funcionários e administradores.

O sistema será composto por três aplicações principais:

- **Store:** interface de compra utilizada pelos clientes.
- **Admin:** painel de administração e operação.
- **API:** responsável pelas regras de negócio, dados e integrações.

## 1.3. Referências

Este documento deverá ser utilizado em conjunto com:

- `docs/01-product/vision.md`
- `docs/03-business-rules/`
- `docs/04-architecture/`
- `docs/05-database/`
- `docs/06-api/`
- `docs/07-security-privacy/`
- `docs/08-testing-quality/`

---

# 2. Conceitos e Classificação dos Requisitos

## 2.1. Requisitos Funcionais (RF)

Requisitos funcionais descrevem aquilo que o sistema deverá fazer.

Exemplos:

- Permitir o cadastro de clientes.
- Permitir a pesquisa de mangás.
- Processar pedidos.
- Controlar o estoque.

## 2.2. Requisitos Não Funcionais (RNF)

Requisitos não funcionais definem características e condições de qualidade que o sistema deverá atender.

Exemplos:

- Segurança.
- Desempenho.
- Disponibilidade.
- Acessibilidade.
- Escalabilidade.
- Manutenibilidade.

## 2.3. Prioridades

Os requisitos serão classificados conforme sua importância.

| Prioridade | Descrição |
|---|---|
| P0 — Crítica | Necessária para a operação segura e correta |
| P1 — Alta | Importante para a entrega de valor principal |
| P2 — Média | Amplia funcionalidades e experiência |
| P3 — Baixa | Evolução futura ou melhoria complementar |

As prioridades poderão ser revisadas conforme mudanças no negócio e no planejamento.

---

# 3. Requisitos Funcionais

Os requisitos funcionais estão organizados por módulos para facilitar o desenvolvimento e a manutenção.

## 3.1. Catálogo de Produtos

| ID | Requisito | Prioridade |
|---|---|---|
| RF-001 | O sistema deverá permitir cadastrar, consultar, atualizar e desativar produtos. | P0 |
| RF-002 | O sistema deverá organizar mangás por séries e volumes. | P0 |
| RF-003 | O sistema deverá permitir cadastrar editoras, autores, ilustradores e gêneros. | P1 |
| RF-004 | O sistema deverá permitir pesquisar produtos por nome, série e outros atributos relevantes. | P0 |
| RF-005 | O sistema deverá oferecer filtros para facilitar a localização de produtos. | P1 |
| RF-006 | O sistema deverá apresentar informações, imagens, preços e disponibilidade dos produtos. | P0 |
| RF-007 | O sistema deverá permitir destacar lançamentos, mais vendidos e promoções. | P1 |
| RF-008 | O sistema deverá controlar o histórico de alterações cadastrais relevantes. | P2 |
| RF-009 | O sistema deverá identificar possíveis duplicidades e inconsistências cadastrais. | P1 |

## 3.2. Clientes e Autenticação

| ID | Requisito | Prioridade |
|---|---|---|
| RF-010 | O sistema deverá permitir cadastro de clientes. | P0 |
| RF-011 | O sistema deverá permitir autenticação e encerramento de sessão. | P0 |
| RF-012 | O sistema deverá permitir recuperação de acesso. | P0 |
| RF-013 | O sistema deverá permitir compras como visitante. | P0 |
| RF-014 | O sistema deverá permitir edição dos dados pessoais. | P1 |
| RF-015 | O sistema deverá permitir gerenciamento de endereços. | P0 |
| RF-016 | O sistema deverá disponibilizar histórico de compras. | P1 |
| RF-017 | O sistema deverá permitir gerenciamento de sessões e dispositivos conforme as políticas de segurança. | P2 |
| RF-018 | O sistema deverá permitir recursos adicionais de proteção de conta, incluindo autenticação em dois fatores. | P2 |

## 3.3. Carrinho de Compras

| ID | Requisito | Prioridade |
|---|---|---|
| RF-019 | O sistema deverá permitir adicionar produtos ao carrinho. | P0 |
| RF-020 | O sistema deverá permitir remover produtos do carrinho. | P0 |
| RF-021 | O sistema deverá permitir alterar quantidades. | P0 |
| RF-022 | O sistema deverá calcular os valores dos itens e o subtotal. | P0 |
| RF-023 | O sistema deverá preservar o carrinho conforme as regras de persistência definidas. | P1 |
| RF-024 | O sistema deverá atualizar valores e disponibilidade antes da finalização da compra. | P0 |
| RF-025 | O sistema deverá permitir aplicação de cupons válidos. | P1 |
| RF-026 | O sistema deverá identificar oportunidades de recuperação de carrinhos abandonados. | P2 |

## 3.4. Checkout e Pagamentos

| ID | Requisito | Prioridade |
|---|---|---|
| RF-027 | O sistema deverá permitir iniciar o checkout como visitante ou cliente autenticado. | P0 |
| RF-028 | O sistema deverá permitir selecionar ou informar o endereço de entrega. | P0 |
| RF-029 | O sistema deverá calcular opções e valores de frete. | P0 |
| RF-030 | O sistema deverá permitir selecionar a forma de pagamento. | P0 |
| RF-031 | O sistema deverá aceitar PIX, cartão de crédito e boleto. | P0 |
| RF-032 | O sistema deverá permitir parcelamento no cartão em até seis vezes, conforme as condições comerciais. | P0 |
| RF-033 | O sistema deverá registrar e acompanhar o estado das transações. | P0 |
| RF-034 | O sistema deverá tratar notificações de pagamento recebidas dos provedores. | P0 |
| RF-035 | O sistema deverá prevenir processamento duplicado de operações financeiras. | P0 |
| RF-036 | O sistema deverá permitir cancelamentos e reembolsos conforme as regras aplicáveis. | P1 |
| RF-037 | O sistema deverá manter registros para conciliação financeira. | P1 |

## 3.5. Pedidos

| ID | Requisito | Prioridade |
|---|---|---|
| RF-038 | O sistema deverá registrar pedidos concluídos. | P0 |
| RF-039 | O sistema deverá gerar identificação única para cada pedido. | P0 |
| RF-040 | O sistema deverá permitir consultar os detalhes dos pedidos. | P0 |
| RF-041 | O sistema deverá controlar os estados do pedido. | P0 |
| RF-042 | O sistema deverá permitir acompanhar o histórico de alterações do pedido. | P1 |
| RF-043 | O sistema deverá permitir cancelamentos conforme as condições aplicáveis. | P1 |
| RF-044 | O sistema deverá permitir devoluções e reembolsos. | P1 |
| RF-045 | O sistema deverá permitir pedidos com remessas independentes quando existirem produtos de diferentes origens. | P1 |
| RF-046 | O sistema deverá registrar ocorrências relacionadas aos pedidos. | P2 |
| RF-047 | O sistema deverá permitir consultar o rastreamento das remessas. | P1 |

## 3.6. Estoque e Inventário

| ID | Requisito | Prioridade |
|---|---|---|
| RF-048 | O sistema deverá controlar a disponibilidade dos produtos. | P0 |
| RF-049 | O sistema deverá registrar entradas e saídas de estoque. | P0 |
| RF-050 | O sistema deverá controlar reservas de produtos durante o processo de compra. | P0 |
| RF-051 | O sistema deverá impedir vendas acima da disponibilidade confirmada. | P0 |
| RF-052 | O sistema deverá permitir identificar a origem do estoque. | P1 |
| RF-053 | O sistema deverá permitir inventários e ajustes controlados. | P1 |
| RF-054 | O sistema deverá gerar alertas de estoque baixo. | P1 |
| RF-055 | O sistema deverá permitir controle de múltiplos locais de armazenamento. | P2 |
| RF-056 | O sistema deverá registrar a rastreabilidade das movimentações. | P1 |
| RF-057 | O sistema deverá permitir bloquear produtos reprovados em inspeções de qualidade. | P1 |
| RF-058 | O sistema deverá permitir acompanhar a inspeção de produtos recebidos e expedidos. | P2 |

## 3.7. Logística e Entregas

| ID | Requisito | Prioridade |
|---|---|---|
| RF-059 | O sistema deverá calcular fretes conforme CEP e características dos produtos. | P0 |
| RF-060 | O sistema deverá integrar serviços de entrega e transportadoras. | P0 |
| RF-061 | O sistema deverá permitir acompanhar remessas. | P1 |
| RF-062 | O sistema deverá controlar diferentes remessas de um mesmo pedido. | P1 |
| RF-063 | O sistema deverá registrar ocorrências logísticas. | P1 |
| RF-064 | O sistema deverá registrar informações de embalagem e expedição. | P2 |
| RF-065 | O sistema deverá permitir acompanhar o desempenho dos operadores logísticos. | P2 |

## 3.8. Administração e Controle de Acesso

| ID | Requisito | Prioridade |
|---|---|---|
| RF-066 | O sistema deverá disponibilizar um painel administrativo. | P0 |
| RF-067 | O sistema deverá permitir gerenciar usuários administrativos. | P0 |
| RF-068 | O sistema deverá permitir definir funções e permissões. | P0 |
| RF-069 | O sistema deverá controlar autorizações no backend. | P0 |
| RF-070 | O sistema deverá respeitar o princípio do menor privilégio. | P0 |
| RF-071 | O sistema deverá registrar operações administrativas relevantes. | P1 |
| RF-072 | O sistema deverá permitir aprovação de operações sensíveis conforme as permissões configuradas. | P2 |
| RF-073 | O sistema deverá permitir consultar informações operacionais conforme o perfil autorizado. | P0 |

## 3.9. Fornecedores e Compras

| ID | Requisito | Prioridade |
|---|---|---|
| RF-074 | O sistema deverá permitir cadastrar e gerenciar fornecedores. | P2 |
| RF-075 | O sistema deverá permitir registrar solicitações e pedidos de compra. | P2 |
| RF-076 | O sistema deverá permitir acompanhar o recebimento de mercadorias. | P2 |
| RF-077 | O sistema deverá registrar informações de fornecimento e disponibilidade. | P2 |
| RF-078 | O sistema deverá diferenciar fornecedores comerciais de operadores logísticos. | P2 |

## 3.10. Wishlist e Coleções

| ID | Requisito | Prioridade |
|---|---|---|
| RF-079 | O sistema deverá permitir criar listas de desejos. | P2 |
| RF-080 | O sistema deverá permitir organizar coleções pessoais. | P2 |
| RF-081 | O sistema deverá identificar volumes adquiridos e faltantes. | P2 |
| RF-082 | O sistema deverá permitir acompanhar o progresso de coleções por série. | P2 |
| RF-083 | O sistema deverá permitir receber alertas de reposição, sem garantir reserva automática. | P2 |

## 3.11. Avaliações e Comunidade

| ID | Requisito | Prioridade |
|---|---|---|
| RF-084 | O sistema deverá permitir avaliar produtos com notas de uma a cinco estrelas. | P2 |
| RF-085 | O sistema deverá permitir comentários e avaliações textuais. | P2 |
| RF-086 | O sistema deverá identificar avaliações de compras verificadas. | P2 |
| RF-087 | O sistema deverá permitir denúncias e moderação de conteúdo. | P2 |
| RF-088 | O sistema deverá permitir respostas administrativas às avaliações. | P2 |
| RF-089 | O sistema deverá permitir votos de utilidade nas avaliações. | P3 |
| RF-090 | O sistema deverá permitir recursos de comunidade e listas compartilhadas. | P3 |
| RF-091 | O sistema deverá respeitar configurações de privacidade dos perfis e coleções. | P2 |

## 3.12. Promoções, Pré-vendas e Fidelidade

| ID | Requisito | Prioridade |
|---|---|---|
| RF-092 | O sistema deverá permitir cadastrar cupons e promoções. | P2 |
| RF-093 | O sistema deverá validar regras e condições das promoções. | P2 |
| RF-094 | O sistema deverá permitir campanhas de pré-venda. | P2 |
| RF-095 | O sistema deverá permitir diferentes modalidades de pré-venda conforme a campanha. | P2 |
| RF-096 | O sistema deverá permitir listas de espera para lançamentos. | P2 |
| RF-097 | O sistema deverá permitir cadastrar kits e combos. | P2 |
| RF-098 | O sistema deverá calcular a disponibilidade de kits com base em seus componentes. | P2 |
| RF-099 | O sistema deverá oferecer recursos de fidelidade, pontos e benefícios. | P3 |

## 3.13. Comunicação e Atendimento

| ID | Requisito | Prioridade |
|---|---|---|
| RF-100 | O sistema deverá enviar notificações transacionais aos clientes. | P1 |
| RF-101 | O sistema deverá permitir notificações internas, por e-mail e WhatsApp Business, conforme disponibilidade e autorização. | P2 |
| RF-102 | O sistema deverá permitir configurar preferências de comunicação. | P2 |
| RF-103 | O sistema deverá permitir registrar atendimentos e solicitações. | P2 |
| RF-104 | O sistema deverá permitir acompanhar o estado dos atendimentos. | P2 |
| RF-105 | O sistema deverá permitir controlar prazos e níveis de serviço de atendimento. | P3 |
| RF-106 | O sistema deverá permitir recuperar carrinhos abandonados por canais autorizados. | P2 |

## 3.14. Financeiro e Indicadores

| ID | Requisito | Prioridade |
|---|---|---|
| RF-107 | O sistema deverá registrar informações financeiras relacionadas às vendas. | P1 |
| RF-108 | O sistema deverá permitir acompanhar receitas e despesas. | P2 |
| RF-109 | O sistema deverá permitir acompanhar fluxo financeiro e conciliação. | P2 |
| RF-110 | O sistema deverá permitir consultar custos e margens. | P2 |
| RF-111 | O sistema deverá disponibilizar indicadores comerciais e operacionais. | P1 |
| RF-112 | O sistema deverá permitir dashboards gerenciais. | P2 |
| RF-113 | O sistema deverá disponibilizar dados para análises futuras. | P3 |

---

# 4. Requisitos Não Funcionais

Os requisitos não funcionais definem as condições de qualidade que deverão ser consideradas durante o desenvolvimento.

## 4.1. Segurança

| ID | Requisito |
|---|---|
| RNF-001 | O sistema deverá proteger credenciais utilizando mecanismos seguros de hash de senhas. |
| RNF-002 | O sistema deverá implementar autenticação e autorização adequadas. |
| RNF-003 | O sistema deverá utilizar cookies e sessões com configurações de segurança apropriadas. |
| RNF-004 | O sistema deverá proteger operações contra CSRF, XSS, SQL Injection e outras vulnerabilidades relevantes. |
| RNF-005 | O sistema deverá aplicar limitação de requisições em operações sensíveis. |
| RNF-006 | O sistema deverá proteger informações sensíveis e segredos de configuração. |
| RNF-007 | O sistema deverá manter registros de auditoria sem armazenar senhas, tokens ou segredos. |
| RNF-008 | O desenvolvimento deverá seguir práticas de segurança baseadas em OWASP. |

## 4.2. Privacidade e Conformidade

| ID | Requisito |
|---|---|
| RNF-009 | O sistema deverá respeitar a Lei Geral de Proteção de Dados (LGPD). |
| RNF-010 | O sistema deverá permitir gerenciar consentimentos quando aplicável. |
| RNF-011 | O sistema deverá permitir atender solicitações de titulares conforme a legislação. |
| RNF-012 | O sistema deverá aplicar políticas de retenção e descarte de dados. |
| RNF-013 | O sistema deverá limitar o acesso aos dados conforme necessidade e autorização. |
| RNF-014 | O sistema deverá manter mecanismos para investigação e tratamento de incidentes de privacidade. |

## 4.3. Desempenho

| ID | Requisito |
|---|---|
| RNF-015 | O sistema deverá oferecer tempos de resposta adequados às operações comerciais. |
| RNF-016 | O sistema deverá otimizar o carregamento das páginas e recursos visuais. |
| RNF-017 | O sistema deverá evitar consultas e operações desnecessariamente pesadas. |
| RNF-018 | O sistema deverá suportar testes de carga e análise de desempenho. |
| RNF-019 | O sistema deverá acompanhar métricas como latência p95 e p99. |

As metas numéricas de desempenho serão definidas posteriormente, considerando a infraestrutura e o volume esperado de utilização.

## 4.4. Disponibilidade e Recuperação

| ID | Requisito |
|---|---|
| RNF-020 | O sistema deverá possuir mecanismos de monitoramento e identificação de falhas. |
| RNF-021 | O sistema deverá possuir backups periódicos. |
| RNF-022 | O sistema deverá permitir recuperação de dados conforme políticas definidas. |
| RNF-023 | O sistema deverá possuir procedimentos de contingência e recuperação. |
| RNF-024 | O sistema deverá permitir implantação controlada e rollback. |

Metas arquiteturais inicialmente definidas:

- Disponibilidade desejada: 99,9% mensal.
- RTO: até uma hora.
- RPO: até quinze minutos.

Essas metas deverão ser avaliadas e validadas conforme a capacidade da infraestrutura implantada.

## 4.5. Escalabilidade e Manutenibilidade

| ID | Requisito |
|---|---|
| RNF-025 | A arquitetura deverá permitir evolução gradual do produto. |
| RNF-026 | Os módulos deverão possuir responsabilidades bem definidas. |
| RNF-027 | O sistema deverá evitar dependências desnecessárias entre módulos. |
| RNF-028 | O código deverá seguir padrões de organização e legibilidade. |
| RNF-029 | O sistema deverá possuir documentação técnica atualizada. |
| RNF-030 | A infraestrutura deverá permitir ampliação conforme a demanda. |

## 4.6. Usabilidade e Acessibilidade

| ID | Requisito |
|---|---|
| RNF-031 | A interface deverá ser responsiva. |
| RNF-032 | O desenvolvimento deverá seguir abordagem Mobile First. |
| RNF-033 | A navegação deverá ser intuitiva e consistente. |
| RNF-034 | A interface deverá oferecer tema claro e escuro. |
| RNF-035 | O sistema deverá considerar WCAG 2.2 nível AA como referência de acessibilidade. |
| RNF-036 | As mensagens de erro deverão ser claras e orientar o usuário. |
| RNF-037 | Os fluxos principais deverão ser avaliados por testes de usabilidade. |

## 4.7. Compatibilidade

| ID | Requisito |
|---|---|
| RNF-038 | A aplicação deverá funcionar nos principais navegadores modernos. |
| RNF-039 | A interface deverá se adaptar a diferentes tamanhos de tela. |
| RNF-040 | A plataforma deverá utilizar português brasileiro e Real brasileiro. |

## 4.8. Observabilidade

| ID | Requisito |
|---|---|
| RNF-041 | O sistema deverá gerar logs estruturados. |
| RNF-042 | O sistema deverá disponibilizar métricas de funcionamento. |
| RNF-043 | O sistema deverá permitir rastrear operações distribuídas entre componentes. |
| RNF-044 | O sistema deverá permitir monitorar erros e incidentes. |
| RNF-045 | Os registros deverão respeitar as políticas de segurança e privacidade. |

## 4.9. Qualidade e Testabilidade

| ID | Requisito |
|---|---|
| RNF-046 | Os módulos deverão possuir testes automatizados adequados. |
| RNF-047 | Os fluxos críticos deverão possuir testes de integração e ponta a ponta. |
| RNF-048 | O sistema deverá possuir validação automatizada durante o processo de integração contínua. |
| RNF-049 | As alterações deverão passar por revisão antes de serem integradas à branch principal. |
| RNF-050 | O sistema deverá permitir identificar regressões antes da publicação de novas versões. |

---

# 5. Regras Gerais de Autorização

O acesso às funcionalidades deverá respeitar os perfis e permissões definidos.

As principais diretrizes são:

- O proprietário deverá possuir acesso administrativo completo.
- Os funcionários deverão acessar somente as funcionalidades autorizadas.
- As permissões deverão ser verificadas no backend.
- Operações sensíveis deverão possuir controles adicionais.
- Alterações administrativas relevantes deverão ser auditadas.
- Os dados dos clientes deverão ser protegidos contra acesso indevido.

A definição detalhada dos cargos, permissões e regras de autorização será documentada na especificação de segurança e nos requisitos dos módulos administrativos.

---

# 6. Priorização e Fases de Implementação

Os requisitos serão implementados de forma progressiva.

| Fase | Escopo principal |
|---|---|
| Fase 1 — MVP | Catálogo, clientes, carrinho, checkout, pagamentos, pedidos, estoque básico e administração essencial |
| Fase 2 — Expansão Comercial | Wishlist, coleções, avaliações, promoções, pré-vendas, notificações e comunidade |
| Fase 3 — Gestão Empresarial | Fornecedores, compras, financeiro, estoque avançado, atendimento e dashboards |
| Fase 4 — Maturidade e Escala | BI, automações, recomendações avançadas e otimizações |

A classificação de prioridade de cada requisito deverá ser considerada em conjunto com a fase prevista para sua implementação.

Requisitos críticos de segurança, privacidade, acessibilidade e confiabilidade deverão acompanhar o desenvolvimento desde o início.

---

# 7. Critérios Gerais de Aceitação

Um requisito será considerado implementado quando:

1. Seu comportamento estiver documentado.
2. As regras de negócio aplicáveis estiverem definidas.
3. A funcionalidade estiver implementada conforme a especificação.
4. As validações necessárias estiverem funcionando.
5. Os testes previstos tiverem sido executados.
6. Não existirem defeitos críticos conhecidos que impeçam sua utilização.
7. Os critérios de segurança e autorização aplicáveis estiverem atendidos.
8. A documentação correspondente estiver atualizada.

Os critérios específicos de aceitação serão definidos nas histórias de usuário e especificações detalhadas de cada módulo.

---

# 8. Rastreabilidade dos Requisitos

Cada requisito deverá possuir um identificador único.

A rastreabilidade permitirá relacionar:

- Requisitos.
- Decisões de negócio.
- Regras de negócio.
- Histórias de usuário.
- Tarefas de desenvolvimento.
- Casos de teste.
- Implementações.
- Releases.

Exemplo:

| Requisito | História relacionada | Teste relacionado |
|---|---|---|
| RF-001 | US-CAT-001 | CT-CAT-001 |
| RF-019 | US-CAR-001 | CT-CAR-001 |
| RF-027 | US-CHK-001 | CT-CHK-001 |
| RF-038 | US-PED-001 | CT-PED-001 |

Os identificadores acima servem como exemplos de nomenclatura. As histórias e casos de teste deverão ser criados nas etapas correspondentes.

---

# 9. Gestão de Alterações

Os requisitos poderão ser alterados durante o desenvolvimento.

Toda alteração relevante deverá:

- Possuir justificativa.
- Ser analisada quanto ao impacto.
- Considerar dependências técnicas e comerciais.
- Ter sua prioridade revisada.
- Atualizar a documentação relacionada.
- Preservar a rastreabilidade.

As decisões importantes deverão ser registradas e vinculadas às respectivas alterações.

---

# 10. Pendências para Especificação Detalhada

Os requisitos deste documento representam uma visão consolidada das capacidades esperadas do produto.

Alguns pontos ainda precisarão de detalhamento nas próximas etapas:

- Regras completas de cálculo de frete.
- Estados e transições de pedidos.
- Regras de reserva e liberação de estoque.
- Políticas de cancelamento, devolução e reembolso.
- Regras de promoções e cupons.
- Permissões administrativas detalhadas.
- Privacidade granular de perfis e coleções.
- Critérios de aprovação de pré-vendas.
- Metas numéricas de desempenho.
- Contratos e comportamentos das integrações externas.

Esses pontos serão documentados nos arquivos de requisitos específicos e regras de negócio.

---

# 11. Considerações Finais

Este documento estabelece a base de requisitos do MANGÁVERSE.

Os requisitos funcionais descrevem as capacidades que a plataforma deverá oferecer, enquanto os requisitos não funcionais estabelecem as condições de qualidade, segurança, desempenho e confiabilidade.

A especificação deverá evoluir conforme os módulos forem detalhados e implementados.

O objetivo é manter uma documentação clara, rastreável e útil para orientar o desenvolvimento, sem antecipar detalhes que pertencem às etapas posteriores da Engenharia de Software.