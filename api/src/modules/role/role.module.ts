import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/core/entities/role.entity';

@Module({
	providers: [RoleService],
	controllers: [RoleController],
	imports: [TypeOrmModule.forFeature([Role])],
	exports: [],
})
export class RoleModule {}
