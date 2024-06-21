import * as yup from "yup";

export const tenantBodyValidation: yup.Schema = yup.object().shape({

    registerId: yup.string()
    .matches(/^\d{11}$|^\d{14}$/, 'RegisterId needs to be a CPF(11 digits) or CNPJ(14 digits)')
    .required(),
    fullName: yup.string().required("Full name is required"),
    subscription: yup.number().required("choose a subscription plan"),
    payment: yup.number().required('Choose the payment way')
});