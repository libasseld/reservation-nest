import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoBasicQueriesService } from 'src/commons/services/mongo-basic-queries.service';
import { ReservationsService } from 'src/reservations/reservations.service';
import { Product } from './dto/product.entity';
import { ProductInput } from './dto/product.input';
import { IProduct } from './interfaces/product.interface';
import { productModelName } from './product-model-name';

@Injectable()
export class ProductsService extends MongoBasicQueriesService<IProduct> {
    constructor(
        @InjectModel(productModelName) private model: Model<IProduct>,
        private readonly reservationService: ReservationsService
    ) {
        super(model);
    }

    async fetchProductsReservations() {
        const products = await this.findAll();
        const reservations = await this.reservationService.findAll();
        return [...products, ...reservations];
    }
}
