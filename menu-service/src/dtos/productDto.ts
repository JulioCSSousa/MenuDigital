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
  combinePrice?: boolean;
  category?: string;
  
}

export function productToDto(product: Product): productDto{
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    description: product.description,
    isSale: product.isSale,
    image: product.image,
    extraIndex: product.extraIndex,
    observation: product.observation,
    price: product.price,
    previewsPrice: product.price,
    combinePrice: product.combinedPrice,
    
    
  }
}

