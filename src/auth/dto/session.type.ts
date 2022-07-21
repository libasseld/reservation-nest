import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/users/dto/user.entity";
import { IUser } from "src/users/interfaces/user.interface";

@ObjectType()
export class Session {
    @Field(type => User)
    user: IUser;

    @Field()
    token: string;
}
