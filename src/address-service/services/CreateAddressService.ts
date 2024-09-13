import axios from 'axios';
import { IAddress } from '../entity/IAddress';

export class CreateAddressService {
    private static readonly BASE_URL = 'http://localhost:8000/api/address';

    static async createAddress(addressData: IAddress) {
        try {
            const response = await axios.post(this.BASE_URL, addressData);
            return response.data;
        } catch (error) {
            throw new Error('Error creating address');
        }
    }
}