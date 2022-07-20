import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { Product } from "src/products/dto/product.entity";
import { User } from "src/users/dto/user.entity";
import { IUser } from "src/users/interfaces/user.interface";
import { IReservation } from "../interfaces/reservation.interface";

@ObjectType()
export class Reservation {
    @Field(type => [Product])
    products: Product[];

    @Field()
    amount: number;

    @Field(type => User)
    client: IUser;
}