import { UseGuards } from "@nestjs/common";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ObjectId } from "mongoose";
import { AuthGuard } from "src/auth/auth.guard";
import { CurrentUser } from "src/auth/decorators/current-user.decorator";
import { IUser } from "src/users/interfaces/user.interface";
import { Product } from "./dto/product.entity";
import { ProductInput } from "./dto/product.input";
import { IProduct } from "./interfaces/product.interface";
import { ProductsService } from "./products.service";

@UseGuards(AuthGuard)
@Resolver()
export class ProductsResolver {
    constructor(private productService: ProductsService) {}

    @Query(returns => [Product])
    async fetchProducts() {
        return this.productService.findAll();
    }

    @Mutation(returns => Product)
    async createProduct(
        @Args({ name: 'productInput', type: () => ProductInput }) product: IProduct
    ) {
        const p = await this.productService.insertOne(product);
        return p;
    }

    @Query(returns => Product)
    async fetchProduct(
        @Args({ name: 'id', type: () => ID }) id: ObjectId,
    ): Promise<IProduct> {
        return this.productService.findOneByIdOrFail(id);
    }
}