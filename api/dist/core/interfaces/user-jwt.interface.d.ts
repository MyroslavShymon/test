import { Role } from '../entities/role.entity';
export interface IUserJwtInterface {
    email: string;
    id: number;
    roles: Role[];
}
