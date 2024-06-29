import { Combined } from "../entity/Combined";

export interface combinedDto {
    type?: string;
    mainMenu?: boolean;
    size?: string;
    min?: number;
    max?: number;
}

function combinedToDto(combined: Combined): combinedDto{
    return {
        type: combined.type,
        mainMenu: combined.mainMenu,
        min: combined.min,
        max: combined.max
    }
  }
  