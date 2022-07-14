import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IUser } from 'src/users/interfaces/user.interface';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
    @Get()
    fetchProducts(@CurrentUser() currentUser: IUser) {
        console.log({ currentUser })
        return []
    }
}
