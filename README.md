# MANGÁVERSE
**Plataforma de E-commerce especializada na comercialização de mangás.**
 - Projeto de Engenharia de Software desenvolvido com foco em
   arquitetura escalável, organização modular, qualidade de software e
   experiência do usuário.
## 1 - Sobre o Projeto
A MANGÁVERSE é uma plataforma de comércio eletrônico especializada na venda de mangás, desenvolvida para oferecer uma experiência de compra completa, organizada e intuitiva aos leitores e colecionadores.
O projeto contempla uma operação comercial B2C com atendimento em todo território brasileiro, combinando estoque próprio e fornecimento por parceiros comerciais.
Além da comercialização de mangás, a plataforma pretende oferecer recursos que aproximem os leitores de suas obras favoritas, como gerenciamento de coleções, listas de desejos, avaliações e recomendações personalizadas.
A solução será composta por uma loja virtual, um painel administrativo e uma API centralizada, responsáveis por atender às necessidades dos clientes e da operação comercial.
## 2 - Objetivos do Projeto
### Objetivo Geral
Projetar e desenvolver uma plataforma de e-commerce especializada em mangás, aplicando boas práticas de Engenharia de Software, arquitetura de sistemas, desenvolvimento web, segurança e qualidade.
### Objetivos Específicos
 - Desenvolver uma experiência de compra moderna e responsiva.
 - Implementar um catálogo estruturado de mangás, séries, volumes e edições.
 - Disponibilizar mecanismos de buscas e filtragem.
 - Implementar carrinho de compras e checkout.
 - Integrar meios de pagamentos e serviços logísticos.
 - Desenvolver ferramentas administartivas para gestão da operação.
 - Implementar controle de estoque e pedidos.
 - Aplicar autenticação, autotização e auditoria.
 - garantir acessibilidade, seguramça e proteção de dados.
 - Construir uma arquitetura preparada para evolução funcional e tecnológica.
## 3 - Principais Funcionalidades Planejadas
### Loja Virtual
 -  Catálogo de mangás.
 -  Organização por séries, volumes, edições e editoras.
 -  Busca e filtros avançados.
 -  Página de detalhes dos produtos.
 -  Carrinho de compras.
 -  Checkout.
 -  Pagamentos via PIX, cartão e boleto.
 -  Acompanhamento de pedidos.
 -  Lista de desejos.
 -  Gerenciamento de coleções pessoais.
 -  Avaliações e comentários.
 -  Recomendações personalizadas.
### Área do Cliente
 - Cadastro e autenticação.
 - Gerenciamento de perfil.
 - Gerenciamento de endereços.
 - Histórico de compras.
 - Acompanhamento de pedidos e remessas.
 - Gerenciamento de wishlist e coleções.
 - Preferências de comunicação.
 - participação opcional na comunidade de leitores.
### Painel Administrativo
 - Gerenciamento de produtos e catálogo.
 - Gerenciamento de clientes.
 - Gestão de pedidos.
 - Controle de estoque.
 - Gestão de fornecedores.
 - Controle de pagamentos e reembolsos.
 - Gestão de promoções e cupons.
 - Gerenciamento de funcionários e permissões.
 - Relatórios e indicadores.
 - Auditoria das operações.
### Evolução da Plataforma
O projeto também pprevê módulos avançados de logística, financeiro, fidelidade, atendimento, CMS, BI, automações e integrações externas. Esses recursos serão desenvolvidos progressivamente, conforme o roadmap.
## 4 - Tecnologias Previstas
### Front-end
 - React
 - TypeScript
 - Vite
 - React Router
 - Tailwind CSS
 - Shadcn/ui
 - Radix UI
 - Zustand
 - TanStack Query
 - React Hook Form
 - Zod
### Back-end
 - Node.js
 - TypeScript
 - NestJS
 - API REST
 - Prisma ORM
### Banco de Dados e Infraestrutura
 - PostgresSQL
 - Redis
 - BullMQ
 - Meilisearch
 - Docker
 - Docker Compose
 - Armazenamento compatível com S3
### Qualidade e DevOps
 - Git
 - GitHub
 - GitHub Actions
 - Vitest
 - Supertest
 - React Testing Library
 - Playwright
 - K6
 - OpenTelemetry
 - Prometheus
 - Grafana
Obersevação: as tecnologias listadas representam a stack planejada. Sua adoção e configuração ocorrerão progressivamente durante o desenvolvimento.
## 5 - Arquitetura
O projeto adotará uma arquitetura de monólito modular com separação em camadas, utilizando aplicações independentes para a loja virtual, o painel administrativo e a API central.
</b>
Principais aplicações:

| Aplicação |                  Responsabilidade                  |
|:---------:|:--------------------------------------------------:|
|   Store   |             Interface da loja Virtual              |
|   Admin   |              Interface administrativa              |
|    API    | Regras de negócio, autenticação e acesso aso dados |

A arquitetura será organizada para favorecer:
 - Baixo acoplamento.
 - Alta coesão.
 - Separação de responsabilidades.
 - Reutilização de componentes.
 - Testabilidade.
 - Manutenibilidade.
 - Evolição progressiva.
A arquitetura detalhada será documentada em docs/04-architecture/.
## 6 - Estrutura Planejada do Repositório
```
MANGAVERSE/
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
│
├── infrastructure/
│
├── .gitignore
├── package.json
└── README.md
```
O projeto utilizará uma estratégia de monorepo com Workspaces e Turborepo, mantendo aplicações e bibliotecas compartilhadas organizadas em seus respectivos diretórios.
## Roadmap
O desenvolvimento será dividido em fases.

| Fases                        |                                       Objetivo                                       |
|:---------------------------- |:------------------------------------------------------------------------------------:|
| Fase 1 - MVP                 |            Implementar as funcionalidades essenciais de uma loja virtual             |
| Fase 2 - Expansão comercial  |        Adicionar recursos de relacionamento, promoções, coleções e logística.        |
| Fase 3 - Gestão empresarial  | Desenvolver módulos avançados de fornecedores, financeiro, atendimento e indicadores |
| Fase 4 - Maturidade e escala |             Evoluir integrações, automações, BI e capacidade operacional             |

O detalhamento das entregas será realizado por meio de épicos, histórias de usuário, Sprints e releases.
## 8 - Documentação
A documentação oficial do projeto será mantida no diretório docs/.
Principais áreas:
 - 00-governance/ — governança e padrões de documentação.
 - 01-product/ — visão e especificação do produto.
 - 02-requirements/ — requisitos funcionais e não funcionais.
 - 03-business-rules/ — regras de negócio.
 - 04-architecture/ — arquitetura e decisões técnicas.
 - 05-database/ — modelagem e persistência de dados.
 - 06-api/ — contratos e padrões da API.
 - 07-security-privacy/ — segurança e privacidade.
 - 08-testing-quality/ — testes e qualidade.
 - 09-infrastructure-devops/ — infraestrutura e implantação.
 - 10-integrations/ — integrações externas.
 - 11-project-management/ — planejamento e acompanhamento.
 - 12-user-documentation/ — manuais de utilização.
## 9 - Metodologia de Desenvolvimento
O desenvolvimento será conduzido por meios de Sprints, com planejamento, implementação, testes, revisão e documentação.
Serão adotadas as seguintes práticas:
 - GitHub Flow.
 - Conventional Commits.
 - Pull Requests.
 - Revisão de código.
 - Testes automatizados.
 - Definition of Done.
 - Registro de decisões arquiteturais (ADR).
 - Documentação versionada.
## 10 - Status do Projeto
Etapa atual: consolidação da documentação e planejamento técnico.

| Área                                  | Situação      |
| ------------------------------------- | ------------- |
| Levantamento inicial de requisitos    | Concluído     |
| Documentação do produto               | Em elaboração |
| Especificação detalhada de requisitos | Pendente      |
| Arquitetura detalhada                 | Pendente      |
| Modelagem do banco de dados           | Pendente      |
| Preparação do ambiente                | Pendente      |
| Desenvolvimento do MVP                | Não iniciado  |

## 11 - Licença
A licença de distribuição e utilização do projeto será definida antes de qualquer publicação que permita seu uso por terceiros.

---

**MANGÁVERSE** - Uma experiência completa para quem vive dos mangás.
