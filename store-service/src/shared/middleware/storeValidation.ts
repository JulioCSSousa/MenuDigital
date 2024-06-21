import * as yup from "yup";

export const BodyValidation: yup.Schema = yup.object().shape({

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