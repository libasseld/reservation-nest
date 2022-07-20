import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoBasicQueriesService } from 'src/commons/services/mongo-basic-queries.service';
import { Product } from './dto/product.entity';
import { ProductInput } from './dto/product.input';
import { IProduct } from './interfaces/product.interface';
import { productModelName } from './product-model-name';

@Injectable()
export class ProductsService extends MongoBasicQueriesService<IProduct> {
    constructor(
        @InjectModel(productModelName) private model: Model<IProduct>
    ) {
        super(model);
    }
}
