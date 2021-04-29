import { Product } from './product';

export class ProductOrder {
    id: number;
    orderId: number;
    productId: number;
    unityPrice: number;
    quantity: number;
    product: Product;
}