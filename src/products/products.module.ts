import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ReservationsModule } from 'src/reservations/reservations.module';
import { productModelName } from './product-model-name';
import { productSchema } from './product.schema';
import { ProductsController } from './products.controller';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([ { name: productModelName, schema: productSchema } ]),
    ReservationsModule
  ],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsResolver]
})
export class ProductsModule {}
