import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const productSchema: yup.Schema = yup.object().shape({

    name: yup.string().required()
});

export async function productValidation(request, response, next){
    const errors = {}
    try
    {
    await productSchema.validate(request.body, {abortEarly: false});
    next()
    }
    catch(exceptions)
    {  
        exceptions.inner.forEach(error => { errors[error.path] = error.message; })
    }
    return response.status(StatusCodes.BAD_REQUEST).json({errors})

}




