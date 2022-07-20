import { Schema } from "mongoose";
import { userModelName } from "src/users/user.model-name";

export const reservationSchema = new Schema({
    products: [{
        id: { type: Schema.Types.ObjectId },
        name: { type: String },
        price: { type: Number }
    }],
    amount: { type: Number },
    client: { type: Schema.Types.ObjectId, ref: userModelName }
}, { timestamps: true });