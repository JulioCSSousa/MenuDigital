import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { tenantDto } from "../../interfaces/dtos/tenantDto";
import { storeSchema } from "./storeValidation";

const tenantSchema: yup.Schema<tenantDto> = yup.object().shape({
    registerId: yup.string()
        .matches(/^\d{11}$|^\d{14}$/, 'RegisterId needs to be a CPF (11 digits) or CNPJ (14 digits)')
        .required('registerId is a required field'),
        
    fullName: yup.string().required('fullName is a required field'),
    phoneNumber: yup.string().required('phoneNumber is a required field'),
    subscription: yup.number().required('subscription is a required field'),
    payment: yup.number().required('payment is a required field'),
    planValue: yup.number().required('planValue is a required field'),
});

export async function tenantValidation(request, response, next){
    console.log(request.body)
    try {
        await tenantSchema.validate(request.body, { abortEarly: false });
        next()
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors: Record<string, string> = {};

            (error as yup.ValidationError).inner.forEach((e) => {
                validationErrors[e.path] = e.message;
            });
            return response.status(StatusCodes.BAD_REQUEST).json({ validationErrors });
        }
        else throw error
    }

}