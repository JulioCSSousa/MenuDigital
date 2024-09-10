import { AddressDto } from "../../address-service/dtos/addressDto";
import { Product } from "../../menu-service/entity/Product";

export class orderDto {
  orderId?: string;
  orderNumber?: number;
  storeId?: string;
  user?: string;
  deliveryForm?: string;
  paymentForm?: string;
  totalPrice?: number;
  status?: string;
  deliveryAddress?: AddressDto;
  rank?: number;
  feedback?: string;
  orderItems?: Product;

  constructor(
    orderId?: string,
    orderNumber?: number,
    storeId?: string,
    user?: string,
    deliveryForm?: string,
    paymentForm?: string,
    totalPrice?: number,
    status?: string,
    deliveryAddress?: AddressDto,
    rank?: number,
    feedback?: string,
    orderItems?: Product,

  ) {

    this.orderId = orderId;
    this.orderNumber = orderNumber
    this.storeId = storeId;
    this.user = user;
    this.deliveryForm = deliveryForm;
    this.paymentForm = paymentForm;
    this.totalPrice = totalPrice;
    this.status = status;
    this.deliveryAddress = deliveryAddress;
    this.rank = rank;
    this.feedback = feedback;
    this.orderId = orderId;
    this.orderItems = orderItems
  }

}


