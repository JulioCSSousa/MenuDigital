import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const storeSchema: yup.Schema = yup.object().shape({

    storeName: yup.string().required(),
});

export async function storeValidation(request, response, next){
    try {
        await storeSchema.validate(request.body, { abortEarly: false });
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