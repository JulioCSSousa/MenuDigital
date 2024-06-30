import { Product } from "../entity/Product";


export interface productDto {
  id?: string;
  name?: string;
  description?: string;
  isSale?: boolean | true;
  image?: string;
  extraIndex?: number;
  observation?: string[];
  price?: number[];
  previewsPrice?: number[];
  combineAmount?: boolean;
  category?: string;
}

function productToDto(product: Product): productDto{
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    isSale: product.isSale,
    image: product.image,
    extraIndex: product.extraIndex,
    observation: product.observation,
    price: product.price,
    previewsPrice: product.price,
    combineAmount: product.combinedPrice,
    category: product.category,
  }
}

