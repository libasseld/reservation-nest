import { Field, ID, InputType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { ProductInput } from "src/products/dto/product.input";

@InputType()
export class ReservationInput {
    @Field(type => [ProductInput])
    products: ProductInput[];

    @Field()
    amount: number;
}