import { IUser } from "src/users/interfaces/user.interface";

export class Session {
    user: IUser;
    token: string;
}