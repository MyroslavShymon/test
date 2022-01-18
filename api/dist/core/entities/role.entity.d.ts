import { User } from "./user.entity";
export declare class Role {
    id: number;
    title: string;
    description: string;
    users: User[];
}
