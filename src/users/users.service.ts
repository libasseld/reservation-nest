import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { userModelName } from './user.model-name';

@Injectable()
export class UsersService {
    constructor(@InjectModel(userModelName) private model: Model<IUser>) {}

    insert(user: IUser) {
        return this.model.create(user);
    }

    findByUsername(username: string) {
        return this.model.findOne({ username });
    }

    async findByUsernameOrFail(username: string) {
        const found = await this.findByUsername(username);
        if(!found) {
            throw new NotFoundException();
        }
        return found;
    }
}
