
export class SocialMediaDto
{
    public facebook?: string[];
    public X?: string[];
    public instagram?: string[];
    public linkedIn?: string[];

    constructor(socialmedia:any) {
        this.facebook = socialmedia.facebook;
        this.X = socialmedia.X;
        this.instagram = socialmedia.instagram
        this.linkedIn = socialmedia.linkedIn
    }
}