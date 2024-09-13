
import { Store } from "../entity/Store";
import { SocialMediaDto } from "../dtos/socialMediaDto";
import { StoreDto } from "../dtos/storeDto";
import { AddressDto } from "../../address-service/responses/addressDto";
import { GetAddressService } from "../../address-service/services/GetAddressByIdService";
import { StoreResponse } from "../responses/storeResponse";


export async function toDtoResponse(store: Store[]) {
    return await Promise.all(store.map(async (store) => {
        const address = await GetAddressService.getAddressById(store.addressId); // Espera o endereço ser retornado

        return new StoreResponse({
            storeId: store.storeId,
            storeName: store.storeName,
            address: new AddressDto(address), // Passa o endereço completo para o DTO
            category: store.category,
            description: store.description,
            imageUrl: store.imageUrl,
            hasImage: store.hasImage,
            closed: store.closed,
            color: store.color,
            images: store.images,
            openingHours: store.openingHours,
            paymentForms: store.paymentForms,
            contact: store.contact,
            alert: store.alert,
            socialMedias: store.socialMedias ? store.socialMedias.map(sm => new SocialMediaDto(sm)) : undefined,
            minOrderPrice: store.minOrderPrice,
        });
    }));
}

