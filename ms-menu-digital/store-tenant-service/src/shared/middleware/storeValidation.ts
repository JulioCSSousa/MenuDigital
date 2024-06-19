import * as yup from "yup";
import { IStore } from "../../Interface/IStore";
import { Store } from "../../entity/Store";

export const BodyValidation: yup.Schema<IStore> = yup.object().shape({

    registerId: yup.string()
    .matches(/^\d{11}$|^\d{14}$/, 'RegisterId needs to be a CPF(11 digits) or CNPJ(14 digits)')
    .required(),
    name: yup.string(),
    description: yup.string(),
    category: yup.array(),
    imageUrl: yup.string(),
    color: yup.object({
        primary: yup.string(),
        secundary: yup.string(),
    }).nullable()
});