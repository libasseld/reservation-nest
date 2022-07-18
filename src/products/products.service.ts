import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './dto/product.entity';
import { ProductInput } from './dto/product.input';
import { IProduct } from './interfaces/product.interface';
import { productModelName } from './product-model-name';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(productModelName) private model: Model<IProduct>
    ) {}

    insertOne(product: ProductInput): Promise<IProduct> {
        return this.model.create(product);
    }

    async findAll(): Promise<IProduct[]> {
        return this.model.find();
    }
}
