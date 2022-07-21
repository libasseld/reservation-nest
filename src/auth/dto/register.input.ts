import { Field, InputType } from "@nestjs/graphql";
import { UserRole } from "src/users/enums/user-role.enum";

@InputType()
export class RegisterInput {
    @Field()
    username: string;

    @Field()
    password: string;

    @Field(type => UserRole)
    role: UserRole;
}
