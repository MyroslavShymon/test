import { CreateOrderDto } from '../../core/dtos/order/create-order.dto';
import { UpdateOrderDto } from '../../core/dtos/order/update-order.dto';
export declare class OrderService {
    create(createOrderDto: CreateOrderDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): string;
}
