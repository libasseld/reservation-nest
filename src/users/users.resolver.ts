import { NotFoundException } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { User } from "./dto/user.entity";
import { UsersService } from "./users.service";

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(returns => [User])
    fetchUsers() {
        return this.usersService.findAll();
    }

    @Query(returns => User)
    async fetchUser(
        @Args({ name: 'username', type: () => String }) username: string
    ) {
        const found = await this.usersService.findByUsername(username);
        if(!found) {
            throw new NotFoundException();
        }
        return found;
    }
}