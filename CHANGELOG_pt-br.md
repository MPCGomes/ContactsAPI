# Changelog

## [2.1.0] - 27-06-2024
### Adicionado
- Camada de serviços para lógica de negócios, separando dos controladores.
- Serviços para v1 e v2 para lidar com lógica de negócios.
- Controladores atualizados para usar Serviços para v1 e v2.

## [2.0.0] - 27-06-2024
### Adicionado
- Data Transfer Objects (DTOs) para v1 e v2.
- Data Access Objects (DAOs) para v1 e v2.
- Repositórios para gerenciar interações com DAOs e DTOs para ambas as versões.
- Controladores atualizados para suportar as versões v1 e v2.
- Estrutura do projeto aprimorada para suportar versionamento com endpoints separados para v1 e v2.
- .gitignore para ignorar os diretórios node_modules e dist.
- README atualizado com nova estrutura de projeto e instruções.
- YAML do Swagger atualizado com exemplos e informações de versionamento.
- Funcionalidade verificada usando Postman.

### Alterado
- Nomes de campos alinhados com a API do Google People.
- Estrutura de campos atualizada para corresponder aos requisitos da API do Google People.
- Campos expandidos para incluir:
  - **Nomes**: Prefixo, nome dado (primeiro nome), nome do meio, sobrenome (último nome), sufixo, nomes fonéticos.
  - **Apelidos**: Apelido.
  - **Organizações**: Empresa, departamento, título.
  - **Endereços**: Endereço, cidade, região, país, código postal, tipo de endereço.
  - **URLs**: Website.
  - **Relacionamentos**: Pessoa relacionada, tipo de relacionamento.
  - **Notas**: Conteúdo.
  - **Números de Telefone**: Valor, tipo.
  - **Endereços de Email**: Valor, tipo.
  - **Eventos**: Data, tipo.
  - **Campos Definidos pelo Usuário**: Chave, valor.
  - **Biografias**: Conteúdo.
  - **Clientes de Mensagens Instantâneas (IM)**: Protocolo, nome de usuário.
  - **Ocupações**: Título, empresa.
  - **Associações**: Tipo, domínio.
- SwaggerHub atualizado para refletir novos endpoints e estruturas de dados.

## [1.0.1] - 25-06-2024
### Adicionado
- Versionamento da API: Adicionado prefixo `/api/v1/` para todos os endpoints.
- Documentação: READMEs atualizados com endpoints versionados.

## [1.0.0] - 25-06-2024
### Adicionado
- Lançamento inicial com funcionalidades básicas de gerenciamento de contatos:
  - Operações CRUD para contatos.
  - Campos: foto, primeiro nome, último nome, empresa, múltiplos números de telefone, emails, datas significativas.
  - Validação de dados usando Mongoose.
  - Documentação da API com Swagger.
