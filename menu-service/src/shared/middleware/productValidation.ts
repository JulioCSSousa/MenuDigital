import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { productDto } from "../../dtos/productDto";

export const productSchema: yup.Schema<productDto> = yup.object().shape({

    name: yup.string().required()
});

export async function productValidation(request, response, next){
    try {
        await productSchema.validate(request.body, { abortEarly: false });
        next()
    
    } catch (exceptions) {
        const validationErrors: Record<string, string> = {};
        const yupError = exceptions as yup.ValidationError;
            yupError.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          
        return response.status(StatusCodes.BAD_REQUEST).json(
            {
                validationErrors
            }
        )
    }
}




