import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userModelName } from './user.model-name';
import { userSchema } from './user.schema';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([ { schema: userSchema, name: userModelName } ])],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
