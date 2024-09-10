
export class AddressDto {
    public street?: string | null;
    public number?: string | null;
    public district?: string | null;
    public complement?: string | null;
    public zipCde?: string | null

    constructor(address: any) {
        this.street = address.street
        this.number = address.number
        this.district = address.district
        this.complement = address.complement
        this.zipCde = address.zipCde
    }
}
