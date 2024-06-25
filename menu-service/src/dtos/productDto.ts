import { categoryDto } from "./categoryDto";

export interface productDto {
  id?: string;
  name?: string;
  description?: string;
  isSale?: boolean | true;
  image?: string;
  extraIndex?: number;
  observation?: string;
  amount?: number;
  previewsAmount?: number;
  combineAmount?: boolean;
  category?: categoryDto;
}

