

export class productDto {
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

  constructor(
    id?: string,
    name?: string,
    description?: string,
    isSale?: boolean,
    image?: string,
    extraIndex?: number,
    observation?: string[],
    price?: number[],
    previewsPrice?: number[],
    combinePrice?: boolean,
    category?: string,

  ){

    this.id =id;
    this.name = name;
    this.description = description;
    this.isSale = isSale;
    this.image = image;
    this.extraIndex = extraIndex;
    this.observation = observation;
    this.price = price;
    this.previewsPrice = previewsPrice;
    this.combinePrice = combinePrice;
    this.category = category;
  }
  
}


