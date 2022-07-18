import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User {
    @Field(type => String, { nullable: true })
    username: string;

    @Field({ nullable: true })
    password: string;
}