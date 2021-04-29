import { User } from './user';
import { ProductOrder } from './productOrder';

export class Order {
    id: number;
    userId: number;
    user: User;
    creationDate: Date;
    products: ProductOrder;
}