export interface IStore {
    registerId: string;
    name: string;
    description: string;
    category: [];
    imageUrl: string;
    color: {
        primary: string,
        secundary: string
    };
}