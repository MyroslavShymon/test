import { Role } from "./role.entity";
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    mobile: string;
    roles: Role[];
}
