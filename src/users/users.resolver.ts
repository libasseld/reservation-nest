import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./dto/user.entity";
import { UsersService } from "./users.service";

@Resolver()
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(returns => [User])
    fetchUsers() {
        return this.usersService.findAll();
    }
}