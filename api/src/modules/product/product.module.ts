import {Module} from '@nestjs/common';
import {ProductService} from './product.service';
import {ProductController} from './product.controller';
import {FileService} from "../../core/modules/file/file.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "../../core/entities/product.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Product])],
    controllers: [ProductController],
    providers: [ProductService, FileService]
})
export class ProductModule {
}
