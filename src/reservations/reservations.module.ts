import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { reservationModelName } from './reservation.model-name';
import { reservationSchema } from './reservation.schema';
import { ReservationsPropertyResolver } from './reservations-property.resolver';
import { RerservationResolver } from './reservations.resolver';
import { ReservationsService } from './reservations.service';

@Module({
    imports: [
        MongooseModule.forFeature([ { name: reservationModelName, schema: reservationSchema } ]),
        AuthModule,
        UsersModule
    ],
  providers: [ReservationsService, RerservationResolver, ReservationsPropertyResolver],
  exports: [ReservationsService]
})
export class ReservationsModule {}
