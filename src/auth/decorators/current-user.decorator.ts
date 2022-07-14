import { createParamDecorator, SetMetadata } from '@nestjs/common';
import { IncomingMessage } from 'http';

export const CurrentUser = createParamDecorator((pick: string, context: any) => {
    const user = context.args[0].user;
    return pick ? user[pick] : user;
})
