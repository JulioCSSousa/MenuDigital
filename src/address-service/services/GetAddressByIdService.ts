import axios from 'axios';

export class GetAddressService {
    private static readonly BASE_URL = 'http://localhost:8000/api/address';

    static async getAddressById(addressId: string) {
        try {
            const response = await axios.get(`${this.BASE_URL}/${addressId}`);
            return response.data;
        } catch (error) {
            throw new Error('Error communicating with AddressService');
        }
    }
}
