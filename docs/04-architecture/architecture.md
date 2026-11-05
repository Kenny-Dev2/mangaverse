# Arquitetura de Software — MANGÁVERSE

## 1. Introdução

Este documento apresenta a arquitetura de software definida para o MANGÁVERSE, descrevendo sua organização estrutural, aplicações, tecnologias, responsabilidades e estratégias de comunicação.

O objetivo é estabelecer uma base técnica consistente, segura e preparada para evolução, mantendo a complexidade proporcional ao estágio do produto.

A arquitetura deverá orientar o desenvolvimento, a organização do código, a integração entre módulos e a manutenção da plataforma.

## 2. Visão Geral da Arquitetura

O MANGÁVERSE utilizará uma arquitetura baseada em monólito modular, com aplicações independentes para a loja virtual, o painel administrativo e a API central.

A solução será organizada em um monorepositório, permitindo compartilhar configurações, tipos e componentes entre aplicações.

A arquitetura será baseada nos seguintes princípios:

- Separação de responsabilidades.
- Baixo acoplamento entre módulos.
- Alta coesão interna.
- Reutilização controlada de componentes.
- Segurança desde a concepção.
- Facilidade de manutenção e evolução.
- Escalabilidade proporcional às necessidades do negócio.
- Centralização das regras de negócio no backend.

## 3. Estilo Arquitetural

### 3.1. Monólito Modular

O backend será desenvolvido como um monólito modular utilizando NestJS.

Os módulos representarão áreas específicas do negócio, como catálogo, clientes, pedidos, pagamentos, estoque e logística.

Apesar de compartilharem a mesma aplicação backend, os módulos deverão possuir responsabilidades bem definidas e comunicação controlada.

Essa abordagem oferece organização e facilidade de manutenção sem introduzir a complexidade operacional de microsserviços.

### 3.2. Arquitetura em Camadas

A API será organizada em camadas com responsabilidades distintas:

- **Presentation:** recebe requisições HTTP e apresenta respostas.
- **Application:** coordena casos de uso e operações da aplicação.
- **Domain:** concentra conceitos, regras e comportamentos fundamentais do negócio.
- **Infrastructure:** implementa acesso a bancos de dados, filas e serviços externos.

A separação deverá evitar que regras de negócio fiquem diretamente vinculadas a tecnologias de infraestrutura ou às interfaces do usuário.

### 3.3. DDD Pragmático

O projeto utilizará princípios de Domain-Driven Design (DDD) de maneira pragmática.

Os módulos serão organizados considerando as áreas e responsabilidades reais do negócio.

O objetivo é manter o domínio compreensível, evitando abstrações e complexidades desnecessárias.

## 4. Aplicações do Sistema

O MANGÁVERSE será composto por três aplicações principais.

### 4.1. Store — Loja Virtual

Aplicação pública destinada aos clientes.

Principais responsabilidades:

- Apresentação do catálogo.
- Pesquisa e filtros de produtos.
- Visualização de séries e volumes.
- Cadastro e autenticação de clientes.
- Carrinho de compras.
- Checkout e pagamentos.
- Acompanhamento de pedidos.
- Wishlist e coleções.
- Avaliações e comunidade.

Tecnologias principais: React, TypeScript e Vite.

### 4.2. Admin — Painel Administrativo

Aplicação privada destinada à administração e operação da loja.

Principais responsabilidades:

- Gestão do catálogo.
- Gestão de clientes.
- Gestão de pedidos.
- Controle de estoque.
- Gestão de fornecedores.
- Gestão de preços e promoções.
- Acompanhamento financeiro.
- Gestão de usuários administrativos.
- Controle de permissões.
- Relatórios e indicadores.

Tecnologias principais: React, TypeScript e Vite.

### 4.3. API — Backend Central

Aplicação responsável por concentrar as regras de negócio e disponibilizar os recursos necessários às aplicações Store e Admin.

Principais responsabilidades:

- Exposição dos endpoints REST.
- Autenticação e autorização.
- Validação de dados.
- Execução dos casos de uso.
- Aplicação das regras de negócio.
- Persistência de informações.
- Comunicação com serviços externos.
- Processamento de tarefas assíncronas.
- Auditoria e rastreabilidade.

Tecnologias principais: Node.js, NestJS e TypeScript.

## 5. Organização dos Módulos de Domínio

A API será dividida em módulos organizados por responsabilidade.

Os principais módulos previstos são:

| Módulo | Responsabilidade |
|---|---|
| Auth | Autenticação, sessões e tokens. |
| Users | Usuários e contas. |
| Customers | Informações dos clientes. |
| Catalog | Produtos, séries e volumes. |
| Categories | Categorias e classificações. |
| Cart | Carrinho de compras. |
| Checkout | Processo de finalização da compra. |
| Payments | Processamento e acompanhamento de pagamentos. |
| Orders | Gestão dos pedidos. |
| Inventory | Estoque e movimentações. |
| Shipping | Frete, remessas e entregas. |
| Suppliers | Gestão de fornecedores. |
| Purchasing | Compras e recebimentos. |
| Promotions | Promoções e cupons. |
| Reviews | Avaliações de produtos. |
| Wishlist | Listas de desejos. |
| Collections | Coleções pessoais. |
| Notifications | Notificações e comunicações. |
| Support | Atendimento ao cliente. |
| Finance | Gestão financeira. |
| Loyalty | Fidelidade e benefícios. |
| Audit | Registros de auditoria. |

A implementação será gradual, seguindo o roadmap do produto.

A existência de um módulo previsto na arquitetura não significa que todas as suas funcionalidades precisarão estar presentes no MVP.

## 6. Comunicação entre Aplicações

As aplicações Store e Admin não terão acesso direto ao banco de dados.

Toda comunicação com os dados e regras de negócio deverá ocorrer por meio da API central.

A comunicação utilizará HTTP com JSON, seguindo o padrão REST.

A API terá versionamento por URL, inicialmente utilizando o prefixo:

`/api/v1`

A documentação dos endpoints será mantida utilizando OpenAPI/Swagger.

A comunicação deverá respeitar autenticação, autorização, validação de dados e tratamento padronizado de erros.

## 7. Banco de Dados e Persistência

### 7.1. PostgreSQL

Será utilizado como banco de dados relacional principal.

Responsabilidades:

- Armazenamento de clientes.
- Catálogo de produtos.
- Pedidos e pagamentos.
- Estoque e movimentações.
- Fornecedores e compras.
- Dados financeiros.
- Informações administrativas.
- Registros operacionais.

O PostgreSQL será a fonte oficial dos dados transacionais e comerciais.

### 7.2. Prisma ORM

Será utilizado como principal ferramenta de comunicação entre a aplicação e o PostgreSQL.

Responsabilidades:

- Definição do modelo de dados.
- Consultas e operações de persistência.
- Gerenciamento de migrations.
- Tipagem das operações.
- Relacionamento entre entidades.

SQL puro poderá ser utilizado quando houver necessidade técnica justificada.

### 7.3. Redis

Será utilizado como infraestrutura complementar.

Principais aplicações:

- Cache.
- Suporte a filas.
- Controle de tarefas temporárias.
- Operações assíncronas.
- Suporte a mecanismos de processamento.

Dados críticos deverão continuar sendo validados em suas fontes oficiais.

### 7.4. Meilisearch

Será utilizado como mecanismo especializado de pesquisa do catálogo.

Permitirá implementar:

- Pesquisa textual.
- Busca por relevância.
- Filtros.
- Facetas.
- Ordenação.
- Experiência de pesquisa otimizada.

Os dados indexados deverão ser sincronizados com o banco principal, que continuará sendo a fonte oficial.

### 7.5. Armazenamento de Arquivos

Imagens de produtos, arquivos e demais conteúdos digitais serão armazenados em serviço compatível com S3.

O armazenamento ficará separado do banco de dados relacional.

As opções de provedor serão avaliadas conforme custo, segurança, disponibilidade e necessidades operacionais.

## 8. Processamento Assíncrono

O sistema utilizará processamento assíncrono para operações que não precisem ser concluídas durante a requisição principal do usuário.

A solução utilizará:

- Redis como infraestrutura de suporte.
- BullMQ para gerenciamento de filas.
- Workers para execução das tarefas.
- Retries para novas tentativas controladas.
- Dead Letter Queue para tratamento de tarefas que falharem repetidamente.
- Idempotência para evitar efeitos duplicados.
- Transactional Outbox para aumentar a confiabilidade na publicação de eventos.

Exemplos de tarefas:

- Envio de e-mails.
- Envio de notificações.
- Atualização do mecanismo de busca.
- Processamento de eventos.
- Comunicação com serviços externos.

O processamento assíncrono deverá possuir mecanismos de monitoramento, recuperação e tratamento de falhas.

## 9. Frontend e Renderização

As aplicações Store e Admin utilizarão React, TypeScript e Vite.

A organização do frontend deverá considerar:

- Componentização.
- Separação de responsabilidades.
- Reutilização controlada.
- Design System próprio.
- Responsividade e Mobile First.
- Acessibilidade.
- Gerenciamento adequado de estados.

Tecnologias complementares definidas:

| Tecnologia | Responsabilidade |
|---|---|
| React Router | Navegação e rotas. |
| Context API | Estados simples e compartilhados. |
| Zustand | Gerenciamento de estado global. |
| TanStack Query | Dados provenientes da API. |
| Tailwind CSS | Estilização. |
| shadcn/ui | Componentes de interface. |
| Radix UI | Primitivos acessíveis. |
| React Hook Form | Gerenciamento de formulários. |
| Zod | Validação de dados no frontend. |

A Store deverá considerar Server-Side Rendering (SSR) para páginas públicas, visando melhorar a indexação e a experiência de carregamento.

A implementação de SSR será planejada separadamente, pois exige configuração adicional ao Vite.

O Admin poderá utilizar renderização no cliente, conforme as necessidades da aplicação.

## 10. Segurança da Arquitetura

A segurança será considerada em todas as camadas do sistema.

Os principais mecanismos previstos são:

- Autenticação centralizada pela API.
- Autorização baseada em papéis (RBAC).
- Access tokens de curta duração.
- Refresh tokens com controle de renovação e revogação.
- Cookies seguros HttpOnly, Secure e SameSite, conforme o fluxo adotado.
- Proteção contra CSRF e XSS.
- Hash seguro de senhas.
- Rate limiting.
- Validação de entradas.
- Auditoria de operações críticas.
- Gerenciamento seguro de variáveis e credenciais.
- Proteção de dados pessoais conforme a LGPD.

As aplicações frontend não serão consideradas fontes confiáveis para decisões de autorização.

## 11. Integrações Externas

O MANGÁVERSE poderá utilizar serviços externos para apoiar suas operações.

Principais categorias:

- Gateways de pagamento.
- Correios e transportadoras.
- Serviços de e-mail.
- WhatsApp Business.
- Serviços de armazenamento.
- Ferramentas de monitoramento.
- Sistemas ERP.
- Serviços de fornecedores.

As integrações deverão utilizar adaptadores, evitando dependência direta das regras de negócio em relação a um fornecedor específico.

A escolha dos provedores será realizada considerando custo, segurança, disponibilidade, documentação, suporte e capacidade de integração.

## 12. Organização do Repositório

O projeto utilizará um monorepositório com Workspaces e Turborepo.

A estrutura inicial prevista será:

```text
mangaverse/
├── apps/
│   ├── store/
│   ├── admin/
│   └── api/
│
├── packages/
│   ├── shared-types/
│   ├── shared-ui/
│   └── config/
│
├── docs/
├── infrastructure/
├── scripts/
├── .github/
├── package.json
├── turbo.json
├── .gitignore
└── README.md
```

Cada aplicação terá suas próprias responsabilidades e configurações.

Os pacotes compartilhados deverão conter somente recursos que realmente precisem ser reutilizados.

A estrutura detalhada de diretórios será definida na etapa de organização do monorepositório.

## 13. Infraestrutura e Ambientes

O desenvolvimento utilizará Docker e Docker Compose para padronizar os serviços necessários ao ambiente local.

Serão considerados os seguintes ambientes:

- **Development:** desenvolvimento local.
- **Test:** execução automatizada de testes.
- **Staging/Homologation:** validação antes da produção.
- **Production:** ambiente utilizado pelos clientes.

A infraestrutura de produção será definida conforme as necessidades reais do projeto, considerando custos, segurança, disponibilidade e capacidade de operação.

O ambiente inicial deverá ser simples e proporcional ao MVP.

## 14. Qualidade, Monitoramento e Observabilidade

A arquitetura deverá permitir acompanhar o funcionamento da plataforma.

As ferramentas previstas incluem:

- OpenTelemetry para instrumentação.
- Prometheus para métricas.
- Grafana para visualização.
- Loki para gerenciamento de logs.
- Tempo ou Jaeger para rastreamento distribuído.
- Sentry ou solução equivalente para acompanhamento de erros.

A estratégia de testes deverá contemplar testes unitários, integração, ponta a ponta, contratos, carga, segurança e acessibilidade.

A implementação será gradual, acompanhando a evolução dos módulos.

## 15. Escalabilidade e Evolução

A arquitetura deverá permitir o crescimento progressivo da plataforma.

As principais estratégias serão:

- Separação de responsabilidades.
- Baixo acoplamento.
- Processamento assíncrono.
- Cache controlado.
- Otimização de consultas.
- Monitoramento de desempenho.
- Escalabilidade horizontal quando necessária.
- Evolução independente das interfaces.
- Integrações desacopladas.

A adoção de microsserviços somente deverá ser considerada quando houver justificativa técnica e operacional concreta.

## 16. Decisões Arquiteturais Relacionadas

As principais decisões que fundamentam esta arquitetura foram registradas durante a definição do projeto.

| Decisão | Assunto |
|---|---|
| DR-043 | Monólito modular e arquitetura em camadas. |
| DR-044 | Aplicações Store, Admin e API. |
| DR-045 | PostgreSQL e Redis. |
| DR-046 | Prisma ORM. |
| DR-048 | Organização dos módulos de domínio. |
| DR-049 | API REST e OpenAPI. |
| DR-050 | Node.js, NestJS e TypeScript. |
| DR-051 a DR-056 | Tecnologias do frontend. |
| DR-057 a DR-059 | Armazenamento, filas e cache. |
| DR-060 a DR-063 | Cloud, Docker, CI/CD e Git. |
| DR-065 e DR-066 | Testes e observabilidade. |
| DR-067 a DR-070 | Integrações, busca, SSR e domínio. |
| DR-075 | Monorepositório e organização dos pacotes. |
| DR-077 a DR-080 | Ambiente, variáveis, eventos e versionamento da API. |
| DR-079 | Processamento assíncrono e Transactional Outbox. |
| DR-082 | Metas de disponibilidade e recuperação. |

## 17. Pendências Arquiteturais

Algumas decisões técnicas precisarão ser detalhadas durante a implementação:

- Escolha definitiva do provedor de cloud.
- Escolha do provedor de armazenamento S3-compatible.
- Configuração detalhada de SSR para a Store.
- Estratégia de implantação e hospedagem.
- Configuração de rede e segurança da infraestrutura.
- Estratégia de escalabilidade dos serviços.
- Políticas detalhadas de backup e recuperação.
- Estratégia de monitoramento e alertas.
- Definição dos provedores externos.
- Configuração dos processos de CI/CD.

Essas decisões serão documentadas conforme forem necessárias, sem antecipar escolhas que ainda não possuem justificativa suficiente.

## 18. Considerações Finais

A arquitetura definida para o MANGÁVERSE busca equilibrar organização, segurança, manutenção e possibilidade de crescimento.

A adoção de um monólito modular, com aplicações independentes e tecnologias modernas, permitirá desenvolver uma plataforma estruturada sem adicionar complexidade operacional desnecessária.

Este documento servirá como referência para as próximas etapas de organização do repositório, preparação do ambiente, modelagem de dados e implementação dos módulos.