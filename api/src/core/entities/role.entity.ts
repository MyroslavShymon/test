import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "./user.entity";

@Entity()
export class Role {
    @ApiProperty({example: '1', description: 'Unique id'})
    @PrimaryGeneratedColumn()
    public id: number

    @ApiProperty({example: 'Administrator', description: 'title of role'})
    @Column({type: 'varchar', length: 100, nullable: false})
    public title: string

    @ApiProperty({example: 'Main user', description: 'description of role'})
    @Column({type: 'text', nullable: true})
    public description: string

    @ManyToMany(() => User, (user: User) => user.roles, {cascade: true})
    @JoinTable({
        name: 'roles_users',
        joinColumn: {name: 'roleId', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'userId'},
    })
    public users: User[];
}
