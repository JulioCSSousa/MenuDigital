import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

export const tenantSchema: yup.Schema = yup.object().shape({

    registerId: yup.string()
    .matches(/^\d{11}$|^\d{14}$/, 'RegisterId needs to be a CPF(11 digits) or CNPJ(14 digits)')
    .required(),
    fullName: yup.string().required(),
    subscription: yup.number().required(),
    payment: yup.number().required(),
    panValue: yup.number().required()
});

export async function tenantValidation(request, response, next){
try {
    await tenantSchema.validate(request.body, { abortEarly: false });
    next()

} catch (exceptions) {
    const validationErrors = {};
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