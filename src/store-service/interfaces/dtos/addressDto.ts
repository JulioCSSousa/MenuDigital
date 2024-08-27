
import { StoreDto } from "./storeDto";
import { tenantDto } from "./tenantDto";

export interface AddressDto {
    store?: StoreDto | null;
    street?: string | null;
    storeNumber?: string | null;
    district?: string | null;
    complement?: string | null;
    tenant?: tenantDto | null;
}
