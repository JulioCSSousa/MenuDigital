import { Combined } from "../entity/Combined";

export class CombinedDto {
    type?: string;
    category?:string;
    mainMenu?: boolean;
    size?: string;
    min?: number;
    max?: number;

    constructor(type?:string, category?: string, mainMenu?:boolean, size?: string, min?: number, max?:number ){
        this.type = type;
        this.category = category;
        this.mainMenu = mainMenu;
        this.size = size;
        this.min = min; 
        this.max = max;
    }
}

export function combinedToDto(combined: Combined): CombinedDto{
    return {
        type: combined.type,
        mainMenu: combined.mainMenu,
        min: combined.min,
        max: combined.max
    }
  }
  