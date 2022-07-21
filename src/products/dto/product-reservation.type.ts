import { createUnionType } from "@nestjs/graphql";
import { Reservation } from "src/reservations/dto/reservation.entity";
import { Product } from "./product.entity";

export const ProductReservation = createUnionType({
    name: "ProductReservation",
    types: () => [Product, Reservation] as const,
    resolveType(value) {
        if(value.price) {
            return Product;
        } else {
            return Reservation;
        }
    }
})