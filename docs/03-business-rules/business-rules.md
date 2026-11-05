# Regras de Negócio — MANGÁVERSE

## 1. Introdução

Este documento apresenta as principais regras de negócio do MANGÁVERSE, estabelecendo condições, restrições e comportamentos que devem ser respeitados pelos processos da plataforma.

As regras de negócio orientam o desenvolvimento do sistema, garantindo consistência nas operações comerciais, administrativas, financeiras e logísticas.

Elas devem ser consideradas na implementação do backend, frontend, banco de dados, integrações e processos administrativos.

## 2. Identificação e Classificação

As regras serão identificadas por códigos únicos no formato `RN-XXX`, facilitando sua documentação, rastreabilidade e manutenção.

As regras estão organizadas por áreas de negócio:

- Catálogo e produtos.
- Clientes e contas.
- Carrinho e compras.
- Preços e promoções.
- Pagamentos e pedidos.
- Estoque e inventário.
- Logística e entregas.
- Cancelamentos, devoluções e reembolsos.
- Administração e permissões.
- Fornecedores e compras.
- Avaliações e comunidade.
- Comunicação e notificações.
- Segurança, privacidade e auditoria.

## 3. Regras de Catálogo e Produtos

| Código | Regra de negócio |
|---|---|
| RN-001 | O catálogo inicial será composto exclusivamente por mangás novos, em edições nacionais e no idioma português. |
| RN-002 | Cada volume ou edição de uma série será tratado como um produto independente para fins comerciais e de estoque. |
| RN-003 | Uma série poderá possuir diversos volumes associados, mantendo o relacionamento entre eles. |
| RN-004 | Todo produto deverá possuir identificação única e informações comerciais e editoriais essenciais. |
| RN-005 | Produtos deverão estar associados às categorias e classificações pertinentes. |
| RN-006 | Um produto somente poderá ser disponibilizado para venda após passar pelo processo de cadastro e aprovação definido pela administração. |
| RN-007 | Produtos inativos, bloqueados ou reprovados na inspeção de qualidade não poderão ser comercializados. |
| RN-008 | O cadastro deverá evitar duplicidade de produtos, séries, volumes, edições e demais entidades do catálogo. |
| RN-009 | Alterações relevantes no cadastro deverão manter histórico para rastreabilidade. |
| RN-010 | Imagens e demais materiais digitais deverão respeitar os direitos de uso e as condições de licenciamento aplicáveis. |

## 4. Regras de Clientes e Contas

| Código | Regra de negócio |
|---|---|
| RN-011 | O cliente poderá realizar compras como visitante ou utilizando uma conta cadastrada. |
| RN-012 | A criação de conta deverá exigir as informações obrigatórias para o funcionamento dos serviços. |
| RN-013 | Cada conta deverá possuir identificação única. |
| RN-014 | Informações pessoais e dados de acesso deverão ser protegidos contra acessos não autorizados. |
| RN-015 | Clientes autenticados poderão manter endereços, histórico de pedidos, wishlist, coleção pessoal e avaliações. |
| RN-016 | O cliente poderá solicitar alterações ou exclusões de dados pessoais, respeitando as obrigações legais de retenção. |
| RN-017 | A utilização de funcionalidades que dependam de autenticação deverá respeitar as permissões e condições de acesso correspondentes. |

## 5. Regras de Carrinho e Compras

| Código | Regra de negócio |
|---|---|
| RN-018 | O carrinho deverá permitir adicionar, remover e alterar quantidades de produtos. |
| RN-019 | A quantidade solicitada não poderá ultrapassar a disponibilidade comercial, considerando as reservas e demais restrições aplicáveis. |
| RN-020 | O carrinho deverá atualizar valores e disponibilidade antes da conclusão da compra. |
| RN-021 | A inclusão de um produto no carrinho não garante sua reserva ou disponibilidade futura. |
| RN-022 | Clientes autenticados poderão manter o carrinho associado à sua conta. |
| RN-023 | O carrinho de visitantes poderá ser mantido temporariamente, respeitando as regras de persistência definidas pelo sistema. |
| RN-024 | A consolidação de carrinhos deverá evitar duplicidade de itens e inconsistências de quantidade. |
| RN-025 | O pedido somente será criado após a conclusão das validações necessárias do checkout. |

## 6. Regras de Preços, Promoções e Cupons

| Código | Regra de negócio |
|---|---|
| RN-026 | Todo produto comercializado deverá possuir preço válido e vigente. |
| RN-027 | Alterações de preço deverão respeitar as permissões administrativas e manter histórico. |
| RN-028 | O preço apresentado ao cliente deverá ser validado novamente durante o checkout. |
| RN-029 | Promoções deverão possuir condições de utilização, período de validade e critérios de elegibilidade. |
| RN-030 | Cupons deverão respeitar suas regras de validade, quantidade de utilizações, público elegível e demais restrições. |
| RN-031 | O sistema deverá impedir a utilização de cupons inválidos, expirados ou incompatíveis com a compra. |
| RN-032 | A aplicação simultânea de promoções e cupons deverá respeitar as regras de combinação estabelecidas para cada campanha. |
| RN-033 | Descontos não poderão resultar em valores comerciais inválidos. |
| RN-034 | O valor final da compra deverá apresentar de forma transparente os preços, descontos, frete e total a pagar. |

## 7. Regras de Checkout e Pagamentos

| Código | Regra de negócio |
|---|---|
| RN-035 | O checkout deverá validar os dados do cliente, endereço, produtos, quantidades, preços, descontos e frete. |
| RN-036 | O sistema deverá disponibilizar PIX, cartão de crédito e boleto, conforme os provedores e condições habilitados. |
| RN-037 | O parcelamento no cartão de crédito poderá ocorrer em até seis vezes, respeitando as condições comerciais configuradas. |
| RN-038 | Um pedido não deverá ser considerado pago apenas pela tentativa de pagamento. A confirmação dependerá do retorno válido do provedor de pagamento. |
| RN-039 | As notificações de pagamento recebidas dos provedores deverão ser validadas antes de atualizar o estado financeiro do pedido. |
| RN-040 | O processamento de pagamentos deverá utilizar mecanismos de idempotência para evitar cobranças ou operações duplicadas. |
| RN-041 | Falhas, recusas, cancelamentos e pagamentos pendentes deverão possuir tratamento específico. |
| RN-042 | Dados sensíveis de pagamento não deverão ser armazenados de maneira indevida pela plataforma. |
| RN-043 | O pedido deverá manter o registro dos valores e das condições comerciais aplicados no momento da compra. |

## 8. Regras de Pedidos

| Código | Regra de negócio |
|---|---|
| RN-044 | Cada pedido deverá possuir identificador único. |
| RN-045 | O pedido deverá manter os produtos, quantidades, preços, descontos, frete e demais informações relevantes da compra. |
| RN-046 | O pedido deverá possuir estados que representem corretamente seu ciclo de vida comercial e operacional. |
| RN-047 | As mudanças de estado deverão respeitar transições válidas e autorizadas. |
| RN-048 | O cliente poderá acompanhar o histórico e a situação de seus pedidos. |
| RN-049 | Alterações administrativas relevantes no pedido deverão ser registradas para auditoria. |
| RN-050 | Um pedido poderá possuir múltiplas remessas, permitindo que produtos de diferentes origens sejam enviados separadamente. |
| RN-051 | O acompanhamento de cada remessa deverá ser independente, sem comprometer o estado geral do pedido. |

## 9. Regras de Estoque e Inventário

| Código | Regra de negócio |
|---|---|
| RN-052 | O estoque deverá controlar as quantidades disponíveis, reservadas, bloqueadas e demais situações necessárias à operação. |
| RN-053 | O estoque deverá considerar produtos armazenados em locais próprios e produtos disponibilizados por parceiros. |
| RN-054 | Uma venda somente poderá ser confirmada conforme as condições de disponibilidade e reserva aplicáveis à origem do produto. |
| RN-055 | O sistema deverá impedir vendas acima da disponibilidade comercial, evitando overselling. |
| RN-056 | Reservas deverão possuir regras de criação, validade, confirmação e liberação. |
| RN-057 | Cancelamentos, pagamentos expirados e outras ocorrências deverão atualizar as reservas conforme suas condições. |
| RN-058 | Movimentações de estoque deverão possuir registro de origem, destino, quantidade, responsável e data. |
| RN-059 | Produtos reprovados em inspeção de qualidade deverão permanecer bloqueados para comercialização. |
| RN-060 | Ajustes manuais de estoque deverão exigir autorização e justificativa, mantendo histórico da operação. |
| RN-061 | O sistema deverá gerar alertas para situações como estoque baixo, indisponibilidade e divergências de inventário. |
| RN-062 | Kits e combos deverão considerar a disponibilidade de seus componentes, evitando reservas duplicadas. |

## 10. Regras de Logística e Entregas

| Código | Regra de negócio |
|---|---|
| RN-063 | O cálculo do frete deverá considerar CEP, peso, dimensões, origem e modalidade de entrega. |
| RN-064 | As opções de entrega deverão depender dos serviços disponíveis para o endereço e a origem da mercadoria. |
| RN-065 | Pedidos com produtos de diferentes origens poderão gerar remessas independentes. |
| RN-066 | Cada remessa deverá possuir informações próprias de transporte e rastreamento, quando disponíveis. |
| RN-067 | O sistema deverá registrar as alterações relevantes do processo logístico. |
| RN-068 | O cliente deverá receber informações sobre o andamento da entrega conforme os canais habilitados. |
| RN-069 | Ocorrências logísticas deverão possuir registro, responsável, evidências e acompanhamento até sua resolução. |
| RN-070 | A expedição deverá respeitar os procedimentos de conferência, embalagem e identificação dos produtos. |
| RN-071 | Os custos de embalagem deverão ser considerados nos controles operacionais e financeiros pertinentes. |

## 11. Regras de Cancelamentos, Devoluções e Reembolsos

| Código | Regra de negócio |
|---|---|
| RN-072 | Cancelamentos, devoluções e reembolsos deverão respeitar as condições comerciais e a legislação aplicável. |
| RN-073 | O cliente deverá poder solicitar atendimento relacionado a um pedido ou a itens específicos, conforme as condições permitidas. |
| RN-074 | Solicitações deverão possuir motivo, data, responsável e histórico de tratamento. |
| RN-075 | O sistema deverá controlar os estados de cada solicitação até sua conclusão. |
| RN-076 | Reembolsos deverão ser processados conforme o meio de pagamento e as regras do provedor responsável. |
| RN-077 | O estoque somente deverá ser atualizado após a confirmação das condições necessárias para o retorno do produto. |
| RN-078 | Produtos devolvidos deverão passar por avaliação quando necessário, antes de retornarem à disponibilidade comercial. |
| RN-079 | O sistema deverá impedir reembolsos duplicados ou superiores aos valores efetivamente elegíveis. |

## 12. Regras de Administração e Controle de Acesso

| Código | Regra de negócio |
|---|---|
| RN-080 | O proprietário deverá possuir acesso administrativo total à plataforma. |
| RN-081 | Funcionários deverão acessar somente os recursos necessários às suas atividades. |
| RN-082 | As permissões deverão ser organizadas por funções e responsabilidades, utilizando controle de acesso baseado em papéis (RBAC). |
| RN-083 | A autorização deverá ser validada no backend, independentemente das restrições apresentadas na interface. |
| RN-084 | Operações administrativas críticas deverão possuir controles adicionais de autorização e auditoria. |
| RN-085 | O sistema deverá permitir a evolução da estrutura de cargos e permissões sem exigir mudanças estruturais em todos os módulos. |
| RN-086 | Contas administrativas deverão possuir identificação individual, evitando o compartilhamento de credenciais. |
| RN-087 | Alterações de permissões e ações administrativas relevantes deverão ser registradas. |

## 13. Regras de Fornecedores e Compras

| Código | Regra de negócio |
|---|---|
| RN-088 | Fornecedores comerciais e operadores logísticos deverão ser cadastrados como entidades distintas, mesmo quando uma empresa exercer ambas as funções. |
| RN-089 | Produtos fornecidos por parceiros deverão possuir informações sobre origem e responsabilidade de fornecimento. |
| RN-090 | Processos de compra deverão manter registros de fornecedores, produtos, quantidades, custos e condições negociadas. |
| RN-091 | O recebimento de mercadorias deverá permitir conferência física e registro de divergências. |
| RN-092 | Produtos recebidos deverão passar pelos controles de qualidade definidos antes de serem disponibilizados para venda. |
| RN-093 | Divergências de quantidade, qualidade ou documentação deverão gerar registros para acompanhamento. |
| RN-094 | O histórico de compras e desempenho dos fornecedores deverá apoiar decisões administrativas. |

## 14. Regras de Wishlist, Coleções e Comunidade

| Código | Regra de negócio |
|---|---|
| RN-095 | Clientes autenticados poderão manter listas de desejos e coleções pessoais. |
| RN-096 | A coleção deverá permitir acompanhar volumes adquiridos e volumes faltantes de uma série. |
| RN-097 | O sistema poderá emitir alertas de disponibilidade e reposição, sem garantir reserva automática do produto. |
| RN-098 | A lista de espera para lançamentos deverá ser independente de uma reserva ou compra confirmada. |
| RN-099 | Perfis e listas compartilhadas deverão respeitar as configurações de privacidade e visibilidade. |
| RN-100 | Conteúdos publicados pela comunidade deverão respeitar as regras de moderação da plataforma. |
| RN-101 | Denúncias e conteúdos inadequados deverão possuir mecanismos de análise e tratamento administrativo. |
| RN-102 | A publicação de avaliações deverá respeitar as condições de elegibilidade e moderação. |
| RN-103 | Avaliações identificadas como compra verificada deverão estar associadas a uma compra elegível. |

## 15. Regras de Comunicação e Atendimento

| Código | Regra de negócio |
|---|---|
| RN-104 | Comunicações deverão respeitar os canais disponíveis e as preferências válidas dos clientes. |
| RN-105 | Mensagens de marketing deverão observar os consentimentos e requisitos legais aplicáveis. |
| RN-106 | Notificações operacionais e transacionais deverão ser diferenciadas de comunicações promocionais. |
| RN-107 | O sistema deverá controlar a frequência de comunicações para evitar envios excessivos. |
| RN-108 | Solicitações de atendimento deverão possuir identificação, responsável, histórico e situação. |
| RN-109 | O atendimento deverá permitir acompanhamento e escalonamento de ocorrências conforme sua prioridade. |
| RN-110 | A recuperação de carrinhos abandonados deverá respeitar as regras de consentimento, frequência e elegibilidade. |

## 16. Regras Financeiras e de Fidelidade

| Código | Regra de negócio |
|---|---|
| RN-111 | Operações financeiras deverão manter registros consistentes e rastreáveis. |
| RN-112 | Receitas, despesas, custos, taxas e reembolsos deverão ser registrados de acordo com suas categorias. |
| RN-113 | Indicadores financeiros deverão utilizar critérios documentados e fontes de dados identificáveis. |
| RN-114 | O sistema de fidelidade deverá respeitar regras de acúmulo, utilização, validade e cancelamento de pontos. |
| RN-115 | Benefícios e níveis de fidelidade deverão seguir condições comerciais previamente configuradas. |
| RN-116 | Cancelamentos e reembolsos deverão refletir os ajustes correspondentes nos pontos e benefícios, quando aplicável. |

## 17. Regras de Segurança, Privacidade e Auditoria

| Código | Regra de negócio |
|---|---|
| RN-117 | Senhas deverão ser armazenadas utilizando mecanismos seguros de hash, nunca em texto puro. |
| RN-118 | O acesso a recursos protegidos deverá exigir autenticação e autorização adequadas. |
| RN-119 | Sessões e tokens deverão possuir controles de validade, renovação e revogação. |
| RN-120 | Dados pessoais deverão ser tratados conforme a LGPD e as finalidades legítimas da operação. |
| RN-121 | O sistema deverá permitir o gerenciamento de consentimentos e solicitações relacionadas aos direitos dos titulares. |
| RN-122 | Dados deverão possuir regras de retenção, arquivamento e descarte conforme obrigações legais e operacionais. |
| RN-123 | Operações críticas deverão manter registros de auditoria com responsável, data, entidade e informações relevantes da alteração. |
| RN-124 | Senhas, tokens, credenciais e outros segredos não deverão ser registrados em logs ou trilhas de auditoria. |
| RN-125 | Incidentes de segurança e privacidade deverão possuir processo de registro, análise, tratamento e acompanhamento. |

## 18. Regras Gerais de Consistência

Além das regras específicas de cada módulo, todo o sistema deverá respeitar os seguintes princípios:

- **Integridade:** operações não poderão deixar dados relacionados em estados inconsistentes.
- **Rastreabilidade:** operações relevantes deverão permitir identificar sua origem e responsáveis.
- **Idempotência:** operações sujeitas a repetição deverão evitar efeitos duplicados.
- **Autorização:** nenhuma operação protegida deverá depender exclusivamente de controles visuais do frontend.
- **Confiabilidade:** dados críticos deverão ser persistidos e validados nas fontes oficiais do sistema.
- **Separação de responsabilidades:** cada módulo deverá respeitar os limites definidos na arquitetura.
- **Histórico:** alterações relevantes deverão preservar informações necessárias para auditoria.
- **Transparência:** informações comerciais apresentadas ao cliente deverão refletir as condições reais da operação.

## 19. Rastreabilidade

As regras de negócio deverão manter relacionamento com os requisitos funcionais, não funcionais e decisões de arquitetura que justificam sua existência.

A rastreabilidade deverá permitir identificar:

- Qual requisito é atendido por determinada regra.
- Quais módulos implementam a regra.
- Quais operações dependem dela.
- Quais testes validam seu comportamento.
- Quais decisões de negócio justificam sua definição.

Os identificadores `RN-XXX` deverão permanecer estáveis sempre que possível. Caso uma regra seja removida ou substituída, seu histórico deverá ser preservado na documentação de alterações.

## 20. Gestão de Alterações

As regras de negócio poderão evoluir conforme o amadurecimento do produto e da operação.

Toda alteração relevante deverá:

1. Possuir justificativa documentada.
2. Avaliar impactos nos requisitos e módulos relacionados.
3. Identificar possíveis impactos no banco de dados e nas integrações.
4. Avaliar riscos operacionais, comerciais e de segurança.
5. Atualizar a documentação e os testes correspondentes.
6. Preservar o histórico da decisão.

Mudanças que afetem processos comerciais críticos deverão passar por validação antes de serem implementadas.

## 21. Pendências para Especificação Detalhada

Este documento apresenta as regras gerais de negócio. Alguns pontos precisarão ser detalhados durante a especificação dos módulos e processos:

- Estados e transições completas dos pedidos, pagamentos e remessas.
- Critérios exatos de reserva, expiração e liberação de estoque.
- Regras de combinação e prioridade de promoções e cupons.
- Políticas específicas de cancelamento, devolução e reembolso.
- Regras de cálculo de frete e divisão de remessas.
- Critérios de aprovação e inspeção de produtos.
- Matriz detalhada de cargos, papéis e permissões.
- Configurações granulares de privacidade de perfis e coleções.
- Políticas de pontos, níveis e benefícios de fidelidade.
- Prazos de retenção e descarte de cada categoria de dado.

Esses detalhes deverão ser registrados nos documentos específicos de cada módulo, sem transformar este documento geral em uma especificação excessivamente extensa.

## 22. Considerações Finais

As regras de negócio do MANGÁVERSE representam as condições fundamentais para o funcionamento consistente da plataforma.

Elas deverão orientar a implementação dos módulos, a definição das validações, a modelagem do banco de dados e a elaboração dos testes.

Este documento poderá ser atualizado conforme novas necessidades forem identificadas, mantendo alinhamento com a visão do produto, os requisitos e as decisões arquiteturais.