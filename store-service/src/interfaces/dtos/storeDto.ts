
import { addressDto } from "./addressDto";
import { tenantDto } from "./tenantDto";

export interface StoreDto {
    storeId?: string | null;
    tenant?: tenantDto | null;
    address?: addressDto | null;
    storePhone?: string | null;
    storeName: string;
    workTime?: string | null;
    categoryId?: string | null;
    description?: string | null;
    imageUrl?: string | null;
    color?: {
        primary: string;
        secundary: string;
    } | null;
    logo?: string | null;
}
