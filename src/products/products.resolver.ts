import { Query, Resolver } from "@nestjs/graphql";
import { Product } from "./dto/product.entity";

@Resolver()
export class ProductsResolver {
    @Query(returns => [Product])
    fetchProducts() {
        return "Digital Africa";
    }
}