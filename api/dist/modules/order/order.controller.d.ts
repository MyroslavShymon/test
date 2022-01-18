import { OrderService } from './order.service';
import { CreateOrderDto } from '../../core/dtos/order/create-order.dto';
import { UpdateOrderDto } from '../../core/dtos/order/update-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(createOrderDto: CreateOrderDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOrderDto: UpdateOrderDto): string;
    remove(id: string): string;
}
