
export class SocialMediaDto{
    public id: string
    public facebook?: string[];
    public X?: string[];
    public instagram?: string[];
    public linkedIn?: string[];

    constructor(id: string, facebook?: string[], X?: string[], instagram?: string[], linkedIn?: string[]) {
        this.id = id;
        this.facebook = facebook;
        this.X = X;
        this.instagram = instagram
        this.linkedIn = linkedIn
    }
}