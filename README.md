Documentação da API
Visão Geral
Esta API fornece endpoints para gerenciar produtos, categorias, adicionais e informações de tamanho. Cada recurso possui endpoints para operações CRUD (Create, Read, Update, Delete).

Endpoints
Produtos (/product)
Listar Produtos
Endpoint: GET /product
Descrição: Recupera uma lista de todos os produtos.
Resposta:
json
Copy code
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
Criar Produto
Endpoint: POST /product
Descrição: Cria um novo produto.
Parâmetros:
name (string, obrigatório): Nome do produto.
flavor (string, obrigatório): Sabor do produto.
description (string, opcional): Descrição do produto.
isSale (boolean, obrigatório): Se o produto está em promoção.
image (string, obrigatório): URL da imagem do produto.
size (array, obrigatório): Lista de tamanhos do produto com seus detalhes.
category (object, obrigatório): Categoria do produto.
additional (array, opcional): Lista de adicionais do produto.
Corpo da Requisição:
json
Copy code
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
Resposta:
json
Copy code
{
  "id": "new_product_id",
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
      "productId": "new_product_id",
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
Atualizar Produto
Endpoint: PUT /product/:id
Descrição: Atualiza um produto existente.
Parâmetros:
id (string, obrigatório): ID do produto a ser atualizado.
Corpo da Requisição:
json
Copy code
{
  "name": "Pizza de Calabresa",
  "flavor": "calabresa",
  "description": "Pizza de calabresa atualizada",
  "isSale": false,
  "image": "new_image_url",
  "size": [
    {
      "itemSizeId": 1,
      "size": "pequena",
      "observation": "sem cebola",
      "realAmount": 42.0,
      "previewsAmount": 47
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
Resposta:
json
Copy code
{
  "id": "updated_product_id",
  "name": "Pizza de Calabresa",
  "flavor": "calabresa",
  "description": "Pizza de calabresa atualizada",
  "isSale": false,
  "image": "new_image_url",
  "size": [
    {
      "itemSizeId": 1,
      "size": "pequena",
      "observation": "sem cebola",
      "realAmount": 42.0,
      "previewsAmount": 47
    }
  ],
  "category": {
    "id": 1,
    "name": "pizzas"
  },
  "additional": [
    {
      "id": 1,
      "productId": "updated_product_id",
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
Deletar Produto
Endpoint: DELETE /product/:id
Descrição: Deleta um produto existente.
Parâmetros:
id (string, obrigatório): ID do produto a ser deletado.
Resposta:
json
Copy code
{
  "message": "Product deleted successfully"
}