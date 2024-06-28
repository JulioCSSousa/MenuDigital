import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { combinedDto } from "../../dtos/combinedDto";
import { categoryDto } from "../../dtos/categoryDto";


export const categoryQuerySchema: yup.Schema<categoryDto> = yup.object().shape({
    
    id: yup.number()
    
});


export async function categoryValidation(request, response, next){
    try {
        await categoryQuerySchema.validate(request.params, { abortEarly: false });
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




