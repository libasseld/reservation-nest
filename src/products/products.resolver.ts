import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "./dto/product.entity";
import { ProductInput } from "./dto/product.input";
import { ProductsService } from "./products.service";

@Resolver()
export class ProductsResolver {
    constructor(private productService: ProductsService) {}

    @Query(returns => [Product])
    async fetchProducts() {
        return this.productService.findAll();
    }

    @Mutation(returns => Product)
    async createProduct(
        @Args({ name: 'productInput', type: () => ProductInput }) product: ProductInput
    ) {
        const p = await this.productService.insertOne(product);
        return p;
    }
}