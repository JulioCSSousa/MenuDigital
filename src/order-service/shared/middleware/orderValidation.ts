import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { orderDto } from "../../dtos/orderDto";

export const orderSchema: yup.Schema<orderDto> = yup.object().shape({

    orderNumber: yup.number().required(),
    storeId: yup.string().required(),
    user: yup.string().required(),
    deliveryForm: yup.string(),
    paymentForm: yup.string(),
    totalPrice: yup.number().typeError('field needs to be a number'),
    status: yup.string()
    
});

export async function orderValidation(request, response, next) {
    try {
        await orderSchema.validate(request.body, { abortEarly: false });
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






