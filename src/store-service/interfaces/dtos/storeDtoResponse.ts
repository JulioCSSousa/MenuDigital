
import { AddressDto } from "../../../address-service/dtos/addressDto";
import { Store } from "../../entity/Store";
import { SocialMediaDto } from "./socialMediaDto";


interface IColor {
    primary: string,
    secundary: string
}
interface IImages {
    logo?: string;
    header?: string;
}
interface IContacts {
    storePhone?: string[],
    whatsApp?: string[],
    email?: string[]
}

export class StoreDto {
    storeId: string;
    storeName: string;
    addressId: string;
    address: AddressDto;
    category: string[];
    description: string;
    imageUrl: string;
    hasImage: boolean;
    closed: boolean;
    color: IColor
    images: IImages;
    openingHour: string[][];
    paymentForms: string[];
    contact: IContacts;
    alert: string;
    socialMedias: SocialMediaDto[];
    minOrderPrice: number;

    constructor(props: any) {
        this.storeId = props.storeId;
        this.storeName = props.storeName;
        this.addressId = props.addressId;
        this.address = props.address;
        this.category = props.category;
        this.description = props.description;
        this.imageUrl = props.imageUrl;
        this.hasImage = props.hasImage;
        this.closed = props.closed;
        this.color = props.color;
        this.images = props.images;
        this.openingHour = props.openingHours;
        this.paymentForms = props.paymentForms;
        this.contact = props.contact;
        this.alert = props.alert;
        this.socialMedias = props.socialMedias.map((sm: any) => new SocialMediaDto(sm));
        this.minOrderPrice = props.minOrderPrice;
    }
}

export function toDtoResponse(store: Store[]) {
    return (
        store.map(store => new StoreDto({
            storeId: store.storeId,
            storeName: store.storeName,
            address: store.address,
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
        }))
    )
}
