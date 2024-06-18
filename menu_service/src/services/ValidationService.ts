import { validate, ValidationError } from 'class-validator';
import { Store } from '../entity/Store';
import { AppDataSource } from '../database/data-source';

export class ValidationException extends Error {
    constructor(public errors: ValidationError[]) {
        super('Validation failed');
    }
}

export async function saveStore(store: Store) {
    const errors = await validate(store);
    if (errors.length > 0) {
        throw new ValidationException(errors);
    }
}


