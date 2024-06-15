# Documentação da API
## https://menudigital-production.up.railway.app
## Visão Geral

Esta API fornece endpoints para gerenciar produtos, categorias, adicionais e informações de tamanho. Cada recurso possui endpoints para operações CRUD (Create, Read, Update, Delete).

## Endpoints

### Produtos (`/api/product?page=1&limit=10`)
### Category (`/api/category`)
### Size (`/api/size`)
### Additional (`/api/additional`)

#### Listar Produtos

- **Endpoint:** `GET /product`
- **Descrição:** Recupera uma lista de todos os produtos.
- **Resposta:**

  ```json
  {
    "data": [
      {
        "id": "67a7ea0b-a638-4d4f-b6a2-6898f2b22478",
        "name": "Pizza de Mussarela",
        "flavor": "mussarela",
        "description": "",
        "isSale": true,
        "image": "sdklnasldkalskdaskdjalksjal",
        "size": [
          {
            "itemSizeId": 1,
            "size": "pequena",
            "observation": "sei não num sei que la 258",
            "realAmount": 45.5,
            "previewsAmount": 50
          },
          {
            "itemSizeId": 2,
            "size": "média",
            "observation": "sei não num sei que la 258",
            "realAmount": 50.5,
            "previewsAmount": 60
          },
          {
            "itemSizeId": 3,
            "size": "grande",
            "observation": "sei não num sei que la 258",
            "realAmount": 60.5,
            "previewsAmount": 70
          }
        ],
        "category": {
          "id": 1,
          "name": "pizzas"
        },
        "additional": [
          {
            "id": 1,
            "productId": "67a7ea0b-a638-4d4f-b6a2-6898f2b22478",
            "combineAmount": true,
            "combineWith": {
              "type": "pizza",
              "options": "string",
              "mainMenu": true,
              "sizeRestriction": {
                "max": 1,
                "min": 1,
                "size": "pequena"
              }
            }
          },
          {
            "id": 2,
            "productId": "67a7ea0b-a638-4d4f-b6a2-6898f2b22478",
            "combineAmount": true,
            "combineWith": {
              "type": "pizza",
              "options": "string",
              "mainMenu": true,
              "sizeRestriction": {
                "max": 2,
                "min": 1,
                "size": "média"
              }
            }
          }
        ]
      }
    ],
    "meta": {
      "total": 1,
      "page": 1,
      "limit": 10,
      "totalPages": 1
    }
  }


## Criar Produto

### Endpoint

`POST /product`

### Descrição

Cria um novo produto.

### Parâmetros

- `name` (string): Nome do produto.
- `flavor` (string): Sabor do produto.
- `description` (string, opcional): Descrição do produto.
- `isSale` (boolean): Se o produto está em promoção.
- `image` (string): URL da imagem do produto.
- `size` (array): Lista de tamanhos do produto com seus detalhes.
  - `itemSizeId` (integer): ID do tamanho do item.
  - `size` (string): Tamanho do item (por exemplo, "pequena", "média", "grande").
  - `observation` (string, opcional): Observações sobre o tamanho do item.
  - `realAmount` (float): Preço real do item.
  - `previewsAmount` (float): Preço anterior do item.
- `category` (object): Categoria do produto.
  - `id` (integer): ID da categoria.
  - `name` (string): Nome da categoria.
- `additional` (array): Lista de adicionais do produto.
  - `id` (integer): ID do adicional.
  - `productId` (string): ID do produto ao qual o adicional está associado.
  - `combineAmount` (boolean): Se os valores devem ser combinados.
  - `combineWith` (object): Detalhes de combinação.
    - `type` (string): Tipo de item com o qual pode ser combinado.
    - `options` (string, opcional): Opções de combinação.
    - `mainMenu` (boolean): Se está no menu principal.
    - `sizeRestriction` (object): Restrições de tamanho.
      - `max` (integer): Quantidade máxima.
      - `min` (integer): Quantidade mínima.
      - `size` (string): Tamanho permitido.

### Corpo da Requisição

```json
{
  "name": "Pizza de Calabresa",
  "flavor": "calabresa",
  "description": "Deliciosa pizza de calabresa",
  "isSale": true,
  "image": "image_url",
  "size": [
    {
      "itemSizeId": 1,
      "size": "pequena",
      "observation": "sem cebola",
      "realAmount": 40.0,
      "previewsAmount": 45
    },
    {
      "itemSizeId": 2,
      "size": "média",
      "observation": "sem cebola",
      "realAmount": 50.0,
      "previewsAmount": 55
    }
  ],
  "category": {
    "id": 1,
    "name": "pizzas"
  },
  "additional": [
    {
      "id": 1,
      "productId": "product_id",
      "combineAmount": true,
      "combineWith": {
        "type": "pizza",
        "options": "string",
        "mainMenu": true,
        "sizeRestriction": {
          "max": 1,
          "min": 1,
          "size": "pequena"
        }
      }
    }
  ]
}

