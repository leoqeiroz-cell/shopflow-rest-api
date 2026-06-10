# Relatório Técnico - Atividade 6

## Introdução ao Backend: Roteamento REST com Express e TypeScript

**Projeto:** PrimeShop API  
**Tema:** Produtos e Pedidos com rotas REST  
**Tecnologias:** Node.js, Express, TypeScript  
**Data:** 10 de junho de 2026

## 1. Objetivo

Esta atividade teve como objetivo implementar uma API REST utilizando Express e TypeScript, praticando a criação de rotas, o uso correto dos verbos HTTP, a leitura de informações enviadas pelo cliente por Query String, Params e Body, além da criação de middlewares para logs e validação.

A API foi personalizada para o contexto da aplicação **PrimeShop**, simulando operações comuns de uma loja virtual: consulta de produtos, criação de pedidos, atualização de status e cancelamento de compras.

## 2. Estrutura Implementada

O backend foi organizado em uma pasta própria dentro do projeto:

```text
src/api
├── app.ts
├── server.ts
├── data
│   └── products.ts
├── middlewares
│   ├── logger.ts
│   ├── notFound.ts
│   ├── validateBody.ts
│   └── validateOrder.ts
└── routes
    ├── orders.ts
    └── products.ts
```

Essa separação torna o código mais limpo, facilita manutenção e atende ao critério de uso de `express.Router()` para separar Produtos e Pedidos.

## 3. Middlewares

### Logger

Foi criado um middleware global para registrar cada requisição no terminal no formato:

```text
[DATA] MÉTODO /URL
```

Exemplo:

```text
[2026-06-10T20:30:00.000Z] GET /products?category=eletronicos
```

### Validação de Body

No fluxo de pedidos, o `POST /orders` usa um middleware que impede o processamento quando o corpo da requisição está vazio. Nesse caso, a API retorna `400 Bad Request`.

Também foram adicionadas validações profissionais para garantir que:

- `customerName` seja informado.
- `productIds` seja uma lista com IDs positivos.
- `status` seja válido no `PATCH /orders/:id`.

## 4. Rotas de Produtos

### GET /products

Lista os produtos cadastrados no catálogo.

Também aceita filtro por categoria via Query String:

```http
GET /products?category=eletronicos
```

Resposta esperada:

```json
{
  "total": 2,
  "category": "eletronicos",
  "products": [
    {
      "id": 1,
      "name": "Notebook PrimeBook 14",
      "category": "eletronicos",
      "price": 3499.9
    }
  ]
}
```

### GET /products/:id

Consulta um produto específico por ID usando Params.

Exemplo:

```http
GET /products/1
```

Regra implementada:

- Se o ID for negativo, a API retorna `400 Bad Request`.
- Se o produto não existir, retorna `404 Not Found`.

## 5. Rotas de Pedidos

### POST /orders

Cria um pedido a partir do JSON enviado no corpo da requisição.

Exemplo de Body:

```json
{
  "customerName": "Ana Souza",
  "productIds": [1, 2]
}
```

Resposta:

- Status `201 Created`.
- Retorna o objeto recebido, confirmando a criação.

### PATCH /orders/:id

Atualiza o status de um pedido.

Exemplo:

```http
PATCH /orders/10
```

Body:

```json
{
  "status": "pago"
}
```

Resposta:

```json
{
  "id": 10,
  "status": "pago",
  "message": "Status do pedido atualizado com sucesso."
}
```

### DELETE /orders/:id

Cancela ou remove um pedido.

Exemplo:

```http
DELETE /orders/10
```

Resposta:

- Status `204 No Content`.
- Sem corpo de resposta, seguindo a semântica REST.

## 6. Status Codes Utilizados

| Situação | Status |
|---|---:|
| Listagem e consulta bem-sucedida | 200 |
| Pedido criado com sucesso | 201 |
| Exclusão/cancelamento confirmado | 204 |
| Dados inválidos enviados pelo cliente | 400 |
| Produto ou rota não encontrada | 404 |

## 7. Como Executar

Instalar dependências:

```bash
npm install
```

Executar a API em desenvolvimento:

```bash
npm run dev:api
```

Compilar o backend TypeScript:

```bash
npm run build:api
```

Servidor padrão:

```text
http://localhost:3000
```

## 8. Evidências de Teste

Foram validados os principais endpoints da atividade:

| Endpoint | Resultado |
|---|---:|
| GET /products?category=eletronicos | 200 |
| GET /products/1 | 200 |
| GET /products/-1 | 400 |
| POST /orders | 201 |
| POST /orders com body vazio | 400 |
| PATCH /orders/10 | 200 |
| DELETE /orders/10 | 204 |

Além disso, o comando de build TypeScript foi executado com sucesso:

```bash
npm run build:api
```

## 9. Conclusão

A entrega implementa uma API REST funcional, organizada e tipada, utilizando boas práticas de separação por routers, middlewares reutilizáveis, validação de entrada e status codes coerentes com a semântica HTTP.

O resultado demonstra, de forma prática, que no REST a URL representa o recurso acessado e o verbo HTTP representa a ação realizada sobre esse recurso.
