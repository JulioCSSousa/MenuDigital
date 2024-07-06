import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { CombinedDto } from "../../dtos/combinedDto";

export const combinedSchema: yup.Schema<CombinedDto> = yup.object().shape({
    mainMenu: yup.boolean().required(),
    type: yup.string().required(),
    min: yup.number().typeError('field needs to be a number'),
    max: yup.number().typeError('field needs to be a number'),
    category: yup.string().required()
    
});

export async function combinedValidation(request, response, next){
    
    try {
        await combinedSchema.validate(request.body, { abortEarly: false });
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




