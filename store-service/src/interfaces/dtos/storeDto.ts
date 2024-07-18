
import { AddressDto } from "./addressDto";
import { SocialMediaDto } from "./socialMediaDto";

interface StoreDtoProps {
    storeId: string;
    storeName: string;
    address?: AddressDto;
    category: string[];
    description?: string;
    imageUrl?: string;
    hasImage: boolean;
    closed: boolean;
    color?: IColor;
    images?: IImages;
    openingHours: string[][];
    paymentForms: string[];
    contact?: IContacts;
    alert?: string;
    socialMedias?: SocialMediaDto[];
    minOrderPrice?: number
}

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

    constructor(props: StoreDtoProps) {
        this.storeId = props.storeId;
        this.storeName = props.storeName;
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
        this.socialMedias = props.socialMedias;
        this.minOrderPrice = props.minOrderPrice;
    }
}

