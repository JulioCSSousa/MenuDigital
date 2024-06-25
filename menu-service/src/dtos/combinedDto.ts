
export interface combinedDto {
    id?: string;
    type?: string;
    mainMenu?: boolean;
    sizeRestriction?: {
        size?: string;
        min?: number;
        max?: number;
    };
}
  