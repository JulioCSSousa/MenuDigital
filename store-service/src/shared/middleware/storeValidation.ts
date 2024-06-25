import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const storeSchema: yup.Schema = yup.object().shape({

    registerId: yup.string()
    .matches(/^\d{11}$|^\d{14}$/, 'RegisterId needs to be a CPF(11 digits) or CNPJ(14 digits)')
    .required(),
    name: yup.string().required(),
});

export async function storeValidation(request, response, next){
    const errors = {}
    try
    {
    await storeSchema.validate(request.body, {abortEarly: false});
    next()
    }
    catch(exceptions)
    {  
        exceptions.inner.forEach(error => { errors[error.path] = error.message; })
    }
    return response.status(StatusCodes.BAD_REQUEST).json({errors})



}